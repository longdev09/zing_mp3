import Button from "../Button";
import { FaForwardStep } from "../../assets/icon";
export default function ControlNext() {
  const handleNextSong = () => {};

  return (
    <Button onclick={handleNextSong} className="mx-4 !text-xl">
      <FaForwardStep />
    </Button>
  );
}
