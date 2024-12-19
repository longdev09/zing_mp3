import http from "../utils/http";

class ApiSong {
  async getSongInfo({ queryKey }) {
    const [, encodeId] = queryKey;

    const { data } = await http.get(`/songInfo/${encodeId}`);
    return data.data;
  }
}
export default new ApiSong();
