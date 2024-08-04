import axios from "axios";
import crypto from "crypto";

class ZingMp3Api {
  VERSION;
  URL;
  SECRET_KEY;
  API_KEY;
  CTIME;

  constructor(VERSION, URL, SECRET_KEY, API_KEY, CTIME) {
    this.VERSION = VERSION;
    this.URL = URL;
    this.SECRET_KEY = SECRET_KEY;
    this.API_KEY = API_KEY;
    this.CTIME = CTIME;
  }

  getHash256(str) {
    return crypto.createHash("sha256").update(str).digest("hex");
  }

  getHmac512(str, key) {
    let hmac = crypto.createHmac("sha512", key);
    return hmac.update(Buffer.from(str, "utf8")).digest("hex");
  }

  hashParamNoId(path) {
    return this.getHmac512(
      path + this.getHash256(`ctime=${this.CTIME}version=${this.VERSION}`),
      this.SECRET_KEY
    );
  }

  hashParam(path, id) {
    return this.getHmac512(
      path +
        this.getHash256(`ctime=${this.CTIME}id=${id}version=${this.VERSION}`),
      this.SECRET_KEY
    );
  }

  hashParamHome(path) {
    return this.getHmac512(
      path +
        this.getHash256(
          `count=30ctime=${this.CTIME}page=1version=${this.VERSION}`
        ),
      this.SECRET_KEY
    );
  }

  hashCategoryMV(path, id, type) {
    return this.getHmac512(
      path +
        this.getHash256(
          `ctime=${this.CTIME}id=${id}type=${type}version=${this.VERSION}`
        ),
      this.SECRET_KEY
    );
  }

  hashListMV(path, id, type, page, count) {
    return this.getHmac512(
      path +
        this.getHash256(
          `count=${count}ctime=${this.CTIME}id=${id}page=${page}type=${type}version=${this.VERSION}`
        ),
      this.SECRET_KEY
    );
  }

  getCookie() {
    return new Promise((resolve, reject) => {
      axios
        .get(`${this.URL}`)
        .then((res) => {
          if (res.headers["set-cookie"]) {
            res.headers["set-cookie"].forEach((element, index) => {
              if (index === 1) {
                resolve(element);
              }
            });
          }
        })
        .catch((err) => {
          reject(err);
        });
    });
  }

  requestZingMp3(path, qs) {
    return new Promise((resolve, reject) => {
      const client = axios.create({
        baseURL: `${this.URL}`,
      });

      client.interceptors.response.use((res) => res.data);

      this.getCookie()
        .then((cookie) => {
          client
            .get(path, {
              headers: {
                Cookie: `${cookie}`,
              },
              params: {
                ...qs,
                ctime: this.CTIME,
                version: this.VERSION,
                apiKey: this.API_KEY,
              },
            })
            .then((res) => {
              resolve(res);
            })
            .catch((err) => {
              reject(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  }

  getSong(songId) {
    return this.requestZingMp3("/api/v2/song/get/streaming", {
      id: songId,
      sig: this.hashParam("/api/v2/song/get/streaming", songId),
    });
  }

  getSongPremium(songId) {
    return this.requestZingMp3("/api/v2/song/get/vip-preview-info", {
      id: songId,
      sig: this.hashParam("/api/v2/song/get/vip-preview-info", songId),
    });
  }

  getDetailPlaylist(playlistId) {
    return this.requestZingMp3("/api/v2/page/get/playlist", {
      id: playlistId,
      sig: this.hashParam("/api/v2/page/get/playlist", playlistId),
    });
  }

  getRecommendSong(songId) {
    return this.requestZingMp3("/api/v2/recommend/get/songs", {
      id: songId,
      sig: this.hashParam("/api/v2/recommend/get/songs", songId),
    });
  }

  getHome() {
    return this.requestZingMp3("/api/v2/page/get/home", {
      page: 1,
      segmentId: "-1",
      count: "30",
      sig: this.hashParamHome("/api/v2/page/get/home"),
    });
  }

  getTop100() {
    return this.requestZingMp3("/api/v2/page/get/top-100", {
      sig: this.hashParamNoId("/api/v2/page/get/top-100"),
    });
  }

  getChartHome() {
    return this.requestZingMp3("/api/v2/page/get/chart-home", {
      sig: this.hashParamNoId("/api/v2/page/get/chart-home"),
    });
  }

  getNewReleaseChart() {
    return this.requestZingMp3("/api/v2/page/get/newrelease-chart", {
      sig: this.hashParamNoId("/api/v2/page/get/newrelease-chart"),
    });
  }

  getInfoSong(songId) {
    return this.requestZingMp3("/api/v2/song/get/info", {
      id: songId,
      sig: this.hashParam("/api/v2/song/get/info", songId),
    });
  }

  getListArtistSong(artistId, page, count) {
    return this.requestZingMp3("/api/v2/song/get/list", {
      id: artistId,
      type: "artist",
      page: page,
      count: count,
      sort: "new",
      sectionId: "aSong",
      sig: this.hashListMV(
        "/api/v2/song/get/list",
        artistId,
        "artist",
        page,
        count
      ),
    });
  }

  getArtist(name) {
    return this.requestZingMp3("/api/v2/page/get/artist", {
      alias: name,
      sig: this.hashParamNoId("/api/v2/page/get/artist"),
    });
  }

  getLyric(songId) {
    return this.requestZingMp3("/api/v2/lyric/get/lyric", {
      id: songId,
      sig: this.hashParam("/api/v2/lyric/get/lyric", songId),
    });
  }

  search(name) {
    return this.requestZingMp3("/api/v2/search/multi", {
      q: name,
      sig: this.hashParamNoId("/api/v2/search/multi"),
    });
  }

  getListMV(id, page, count) {
    return this.requestZingMp3("/api/v2/video/get/list", {
      id: id,
      type: "genre",
      page: page,
      count: count,
      sort: "listen",
      sig: this.hashListMV("/api/v2/video/get/list", id, "genre", page, count),
    });
  }

  getCategoryMV(id) {
    return this.requestZingMp3("/api/v2/genre/get/info", {
      id: id,
      type: "video",
      sig: this.hashCategoryMV("/api/v2/genre/get/info", id, "video"),
    });
  }

  getVideo(videoId) {
    return this.requestZingMp3("/api/v2/page/get/video", {
      id: videoId,
      sig: this.hashParam("/api/v2/page/get/video", videoId),
    });
  }

  getWeekChart(id, week = 0, year = 0) {
    return this.requestZingMp3("/api/v2/page/get/week-chart", {
      id: id,
      week: week,
      year: year,
      sig: this.hashParam("/api/v2/page/get/week-chart", id),
    });
  }

  // searchAll(name, page, count) {
  //     return new Promise((resolve, rejects) => {
  //         this.requestZingMp3("/api/v2/search", {
  //             q: name,
  //             type: "song",
  //             page: page,
  //             count: count,
  //             sig: this.hashSearchAll("/api/v2/search", "song", page, count),
  //         })
  //             .then((res) => {
  //             resolve(res);
  //         })
  //             .catch((err) => {
  //             rejects(err);
  //         });
  //     });
  // }

  // searchAllPlaylist(name, page, count) {
  //     return new Promise((resolve, rejects) => {
  //         this.requestZingMp3("/api/v2/search", {
  //             q: name,
  //             type: "playlist",
  //             page: page,
  //             count: count,
  //             sig: this.hashSearchAllPlaylist("/api/v2/search", "playlist", page, count),
  //         })
  //             .then((res) => {
  //             resolve(res);
  //         })
  //             .catch((err) => {
  //             rejects(err);
  //         });
  //     });
  // }

  // searchAllVideo(name, page, count) {
  //     return new Promise((resolve, rejects) => {
  //         this.requestZingMp3("/api/v2/search", {
  //             q: name,
  //             type: "video",
  //             page: page,
  //             count: count,
  //             sig: this.hashSearchAllVideo("/api/v2/search", "video", page, count),
  //         })
  //             .then((res) => {
  //             resolve(res);
  //         })
  //             .catch((err) => {
  //             rejects(err);
  //         });
  //     });
  // }
}

// instance default
export const ZingMp3 = new ZingMp3Api(
  "1.10.40", // VERSION
  "https://zingmp3.vn/", // URL
  "acOrvUS15XRW2o9JksiK1KgQ6Vbds8ZW", // SECRET_KEY
  "X5BM3w8N7MKozC0B85o4KMlzLZKhV00y", // API_KEY
  String(Math.floor(Date.now() / 1000)) // CTIME
);
