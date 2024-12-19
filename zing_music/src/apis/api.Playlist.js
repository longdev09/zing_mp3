import http from "../utils/http";

class ApiPlayList {
  async getPlayListUser() {
    const { data } = await http.get("/user/get/playlist");
    return data.playLists;
  }

  async putSongPlayList({ encodeId, dataSong }) {
    const res = await http.put(`/user/put/song/playlist/${encodeId}`, {
      dataSong,
    });
    return res.data;
  }
}
export default new ApiPlayList();
