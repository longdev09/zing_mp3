import { useDispatch } from "react-redux";
import { play } from "../../redux/features/music/musicPlaySlice";
import Button from "../atoms/Button";

import { FaPlay } from "../../assets/icon";

// nut play music
export default function ControlPlay() {
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(play());
  };
  return (
    <Button onclick={handlePlay} className="mx-4 !text-xl">
      <FaPlay />
    </Button>
  );
}
