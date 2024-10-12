import { ZingMp3 } from "../services/ZingMp3Api.js";

export const getSong = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await ZingMp3.getSong(id);
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy nhạc bài hát premium
export const getSongPremium = async (req, res) => {
  const { id } = req.params;
  try {
    const song = await ZingMp3.getSongPremium(id);
    res.json(song);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin playlist
export const getPlaylist = async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await ZingMp3.getDetailPlaylist(id);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin recommend
export const recommendSong = async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await ZingMp3.getRecommendSong(id);
    res.json(playlist);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy dữ liệu trang chủ
export const home = async (req, res) => {
  try {
    const homeData = await ZingMp3.getHome();
    res.json(homeData);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy danh sách Top 100
export const top100 = async (req, res) => {
  try {
    const top100 = await ZingMp3.getTop100();
    res.json(top100);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy dữ liệu trang Chart Home
export const chartHome = async (req, res) => {
  try {
    const chartHome = await ZingMp3.getChartHome();
    res.json(chartHome);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy dữ liệu trang New Release Chart
export const newReleaseChart = async (req, res) => {
  try {
    const newReleaseChart = await ZingMp3.getNewReleaseChart();
    res.json(newReleaseChart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy dữ liệu trang newRelease
export const newRelease = async (req, res) => {
  try {
    const newRelease = await ZingMp3.getNewRelease();
    res.json(newRelease);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin bài hát

export const songInfo = async (req, res) => {
  const { id } = req.params;
  try {
    const songInfo = await ZingMp3.getInfoSong(id);
    res.json(songInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy danh sách bài hát của nghệ sĩ
export const artistSong = async (req, res) => {
  const { id } = req.params;
  const { page, count } = req.query;
  try {
    const artistSongs = await ZingMp3.getListArtistSong(id, page, count);
    res.json(artistSongs);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy thông tin nghệ sĩ
export const artist = async (req, res) => {
  const { name } = req.params;
  try {
    const artistInfo = await ZingMp3.getArtist(name);
    res.json(artistInfo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Lấy lời bài hát
export const lyric = async (req, res) => {
  const { id } = req.params;
  try {
    const lyric = await ZingMp3.getLyric(id);
    res.json(lyric);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Tìm kiếm
export const search = async (req, res) => {
  const { q } = req.query;
  try {
    const searchResult = await ZingMp3.search(q);
    res.json(searchResult);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// // Lấy danh sách video
// app.get("/api/videos/:id", async (req, res) => {
//   const { id } = req.params;
//   const { page, count } = req.query;
//   try {
//     const videoList = await ZingMp3.getListMV(id, page, count);
//     res.json(videoList);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Lấy thông tin danh mục video
// app.get("/api/videoCategory/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const videoCategory = await ZingMp3.getCategoryMV(id);
//     res.json(videoCategory);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Lấy thông tin video
// app.get("/api/videoInfo/:id", async (req, res) => {
//   const { id } = req.params;
//   try {
//     const videoInfo = await ZingMp3.getVideo(id);
//     res.json(videoInfo);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// });

// // Lấy dữ liệu tuần chart IWZ9Z08I: vn  IWZ9Z0BO: korea IWZ9Z0BW: us
// app.get("/api/weekChart/:id", async (req, res) => {
//   const { id } = req.params;
//   const { week = 0, year = 0 } = req.query; // Tuần và năm từ query params
//   try {
//     const weekChart = await ZingMp3.getWeekChart(id, week, year);
//     res.json(weekChart);
//   } catch (error) {
//     console.error("Error fetching week chart:", error);
//     res.status(500).json({ error: error.message });
//   }
// });
