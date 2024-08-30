import { useDispatch } from "react-redux";
import { FaPause } from "../../assets/icon";
import { pause } from "../../redux/features/music/musicPlaySlice";
import Button from "../Button";

export default function ControlPause() {
  const dispatch = useDispatch();
  const handlePause = () => {
    dispatch(pause());
  };
  return (
    <Button onclick={handlePause} className="mx-4 !text-xl">
      <FaPause />
    </Button>
  );
}
