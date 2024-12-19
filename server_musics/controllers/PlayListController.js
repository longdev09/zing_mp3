import PlayList from "../models/PlayList.js";
import PlayListService from "../services/PlayListService.js";
import uploadImageBuffer from "../utils/uploadImageBuffer.js";
class PlayListController {
  // Tạo 1 playList mới chưa có bài hát nào
  async createPlayList(req, res) {
    const { title, public_ } = req.body;
    const buffer = req.file?.buffer || null;
    const { id } = req.user;
    try {
      let url;
      // upload ảnh và lấy url
      if (buffer) {
        //upload ảnh
        const a = await uploadImageBuffer(buffer, "Zingmp3/ImgPlayList", id);
        url = a.url;
      } else {
        url = null;
      }
      // tạo play list
      const newPlayList = await PlayListService.createPlayList({
        title,
        public_,
        url,
        id,
      });
      res.status(201).json({
        message: "PlayList created successfully",
        playList: newPlayList,
      });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }

  async getPlayListUser(req, res) {
    const { id } = req.user;
    try {
      const playLists = await PlayListService.getPlayListUser(id);
      if (!playLists) {
        res.status(200).json({
          message: "Chưa có playlist nào",
        });
      }
      res.status(200).json({
        message: "Lấy playlists thành công",
        playLists: playLists,
      });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }

  async addSongPlayList(req, res) {
    const { encodeId } = req.params; // lay encodeId play list
    const { dataSong } = req.body;

    try {
      const addSong = await PlayListService.updateSongPlayList({
        encodeId,
        newSong: dataSong,
      });
      if (addSong) {
        return res.status(201).json({
          message: "Add song playlist successfully",
          song: dataSong.title,
        });
      }
      return res.status(401).json({ message: "Invalid credentials" });
    } catch (error) {
      return res.status(500).json({ message: "Lỗi máy chủ" });
    }
  }
}

export default new PlayListController();
