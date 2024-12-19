import { useDispatch } from "react-redux";
import {
  setOpenNowPlay,
  setOpenPlayingBar,
} from "../redux/features/action/actionMusicSlice";
import {
  fetchApiGetSong,
  nextSong,
  pause,
  play,
  prevSong,
  setPlayList,
  updatePlayList,
} from "../redux/features/music/musicPlaySlice";
import toast from "react-hot-toast";
const useHandleMusic = () => {
  // Khởi tạo dispatch
  const dispatch = useDispatch();

  //Sự kiện tạm dừng phát
  const handlePlause = () => {
    dispatch(pause());
  };

  //Sự kiện chơi nhạc
  const handlePlay = () => {
    dispatch(play());
  };

  // Sự kiện volume
  const handleVolume = () => {};

  // Sự kiện mở now playing
  const handleNowPlay = () => {
    dispatch(setOpenNowPlay());
  };

  // Sự kiện mở playing Bar
  const handlePlayingBar = () => {
    dispatch(setOpenPlayingBar());
  };

  // Sự kiện lấy audio bài hát
  const handleGetSong = async (idSong) => {
    dispatch(fetchApiGetSong(idSong));
  };

  //Sự kiện lấy danh sách bài hát để phát
  const handleSetPlayList = async (idList, playList, idSong) => {
    dispatch(setPlayList([idList, playList]));
    dispatch(fetchApiGetSong(idSong));
  };

  const handleUpdateSongPlayList = (listSong) => {
    dispatch(updatePlayList(listSong));
  };

  const handleNextSong = () => {
    dispatch(nextSong());
  };

  const handlePrevSong = () => {
    dispatch(prevSong());
  };

  const handleRandom = () => {
    toast("Tính năng đang chờ cập nhật", {
      icon: "⚠️", // Thêm icon cảnh báo
    });
  };

  const handleRepeat = () => {
    toast("Tính năng đang chờ cập nhật", {
      icon: "⚠️", // Thêm icon cảnh báo
    });
  };

  return {
    handlePlay,
    handlePlause,
    handleSetPlayList,
    handleGetSong,
    handleNowPlay,
    handlePlayingBar,
    handleUpdateSongPlayList,
    handleNextSong,
    handlePrevSong,
    handleRandom,
    handleRepeat,
  };
};

export default useHandleMusic;
