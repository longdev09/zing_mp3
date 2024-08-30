import Button from "../Button";
import { FaBackwardStep } from "../../assets/icon";
export default function ControlPrev() {
  const handlePrevSong = () => {};

  return (
    <Button onclick={handlePrevSong} className="mx-4 !text-xl">
      <FaBackwardStep />
    </Button>
  );
}
