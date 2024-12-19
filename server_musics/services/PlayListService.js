import PlayList from "../models/PlayList.js";

class PlayListService {
  //  tạo play list
  async createPlayList({ title, public_, url, id }) {
    try {
      const newPlayList = new PlayList({
        title: title,
        public: public_,
        urlImg: url,
        createdBy: id, // id người dùng
      });
      await newPlayList.save();

      return newPlayList;
    } catch (error) {
      console.log(error);
    }
  }

  // lấy danh sách playlits (quyen tài khoản user)
  async getPlayListUser(id) {
    try {
      const playList = await PlayList.find({ createdBy: id });
      return playList;
    } catch (error) {
      console.log(error);
    }
  }

  // thêm bài hát vào play list
  async updateSongPlayList({ encodeId, newSong }) {
    try {
      const check = await PlayList.findOne({
        encodeId: encodeId,
        "song.items.encodeId": newSong.encodeId,
      });
      if (!check) {
        const checkUpdate = await PlayList.updateOne(
          {
            encodeId,
          },
          {
            $push: { "song.items": newSong },
          }
        );
        return checkUpdate;
      }
      return check;
    } catch (error) {
      console.log(error);
    }
  }
}

export default new PlayListService();
