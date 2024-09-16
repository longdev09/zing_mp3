import { useDispatch } from "react-redux";
import { pause, play } from "../redux/features/music/musicPlaySlice";
const useHandleMusic = () => {
  const dispatch = useDispatch();

  const handlePlause = () => {
    dispatch(pause());
  };
  const handlePlay = () => {
    dispatch(play());
  };
  return { handlePlay, handlePlause };
};

export default useHandleMusic;
