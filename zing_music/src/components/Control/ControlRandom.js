import Button from "../Button";
import { FaShuffle } from "../../assets/icon";
import { useDispatch, useSelector } from "react-redux";
import { setRandomSong } from "../../redux/features/music/musicPlaySlice";

export default function ControlRandom() {
  const { randomSong } = useSelector((state) => state.musicPlay);
  const dispatch = useDispatch();

  const handleRamdomSong = () => {
    console.log("random");
    dispatch(setRandomSong(!randomSong));
  };
  return (
    <Button onclick={handleRamdomSong} className="mx-4 !text-xl ">
      <FaShuffle
        className={randomSong ? "text-[var(--text-purple)]" : "text-white"}
      />
    </Button>
  );
}
