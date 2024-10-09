import { useDispatch } from "react-redux";
import {
  fetchApiGetSong,
  pause,
  play,
  setPlayList,
} from "../redux/features/music/musicPlaySlice";
import { set_PreviewTime } from "../redux/features/music/currentTimeSlice";
import { setOpenNowPlay } from "../redux/features/action/actionMusicSlice";
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

  // Sự kiện lấy audio bài hát
  const handleGetSong = async (idSong) => {
    dispatch(fetchApiGetSong(idSong));
  };

  //Sự kiện lấy danh sách bài hát để phát
  const handleSetPlayList = async (idList, playList, idSong) => {
    dispatch(setPlayList([idList, playList]));
    dispatch(fetchApiGetSong(idSong));
  };

  return {
    handlePlay,
    handlePlause,
    handleSetPlayList,
    handleGetSong,
    handleNowPlay,
  };
};

export default useHandleMusic;
