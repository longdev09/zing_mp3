import { FaForwardStep } from "../../assets/icon";
import { nextSong } from "../../redux/features/music/musicPlaySlice";
import Button from "../atoms/Button";
import { useDispatch } from "react-redux";
export default function ControlNext() {
  const dispatch = useDispatch();

  const handleNextSong = () => {
    dispatch(nextSong());
  };

  return (
    <Button onclick={handleNextSong} className="mx-4 !text-xl">
      <FaForwardStep />
    </Button>
  );
}
