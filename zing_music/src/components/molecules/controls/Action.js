import { useSelector } from "react-redux";
import {
  FaBackwardStep,
  FaShuffle,
  IconLoading,
  FaPause,
  FaPlay,
  FaForwardStep,
  FaRepeat,
} from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
import Button from "../../atoms/Button";
function Action() {
  const { isPlay, loadingSong } = useSelector((state) => state.musicPlay);
  const { handlePlause, handlePlay } = useHandleMusic();
  return (
    <div className="flex items-center gap-2">
      <Button label={<FaShuffle />} variant={"btnAction"} />
      <Button label={<FaBackwardStep />} variant={"btnAction"} />
      <div className="flex h-10 w-10 items-center justify-center rounded-full border text-lg">
        {loadingSong ? (
          <Button label={<IconLoading />} />
        ) : isPlay ? (
          <Button onClick={handlePlause} label={<FaPause />} />
        ) : (
          <Button onClick={handlePlay} label={<FaPlay />} />
        )}
      </div>
      <Button label={<FaForwardStep />} variant={"btnAction"} />
      <Button label={<FaRepeat />} variant={"btnAction"} />
    </div>
  );
}

export default Action;
