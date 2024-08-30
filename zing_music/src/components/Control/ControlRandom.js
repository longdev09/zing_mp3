import Button from "../Button";
import { FaShuffle } from "../../assets/icon";

export default function ControlRandom() {
  return (
    <Button
      onclick={handleRamdomSong}
      className={`mx-4 !text-xl ${
        randomSong ? "text-[var(--text-purple)]" : ""
      } `}
    >
      <FaShuffle />
    </Button>
  );
}
