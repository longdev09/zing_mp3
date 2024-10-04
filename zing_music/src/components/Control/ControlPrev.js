import Button from "../atoms/Button";

import { FaBackwardStep } from "../../assets/icon";
import { useDispatch } from "react-redux";
import { prevSong } from "../../redux/features/music/musicPlaySlice";
export default function ControlPrev() {
  const dispatch = useDispatch();
  const handlePrevSong = () => {
    console.log("lui bai hat");
    dispatch(prevSong());
  };

  return (
    <Button onclick={handlePrevSong} className="mx-4 !text-xl">
      <FaBackwardStep />
    </Button>
  );
}
