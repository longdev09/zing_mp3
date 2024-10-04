import { useDispatch } from "react-redux";
import {
  fetchApiGetSong,
  pause,
  play,
  setPlayList,
} from "../redux/features/music/musicPlaySlice";
const useHandleMusic = () => {
  // Khởi tạo dispatch
  const dispatch = useDispatch();

  //Tạm dừng phát
  const handlePlause = () => {
    dispatch(pause());
  };

  //Bắt Đầu phát
  const handlePlay = () => {
    dispatch(play());
  };

  const handleGetSong = async (idSong) => {
    dispatch(fetchApiGetSong(idSong));
  };
  //Lấy danh sách nhạc va phat bai hat playlist
  const handleSetPlayList = async (idList, playList, idSong) => {
    dispatch(setPlayList([idList, playList]));
    dispatch(fetchApiGetSong(idSong));
  };

  return { handlePlay, handlePlause, handleSetPlayList, handleGetSong };
};

export default useHandleMusic;
