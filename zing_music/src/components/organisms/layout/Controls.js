import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FaClone, FaMicroscope, FaShuffle } from "../../../assets/icon";
import Button from "../../atoms/Button";
import ShowArtists from "../../atoms/ShowArtists";
import { Action, DurationBar, Volume } from "../../molecules/controls";
import { useHandleMusic } from "../../../hooks";
function Controls() {
  const { playList, song } = useSelector((state) => state.musicPlay);

  const [infoSong, setInFoSong] = useState("");

  useEffect(() => {
    const foundSong = playList?.list.find((s) => s.encodeId === song?.idSong);
    setInFoSong(foundSong || "");
  }, [song]);

  const { handleNowPlay } = useHandleMusic();

  return (
    <div className="flex h-[100px] w-full items-center bg-[var(--color-extra)] px-[var(--pd-content)]">
      {/* item song */}
      <div className="flex max-w-[33.33333%] flex-1 items-center">
        <img className="w-[64px] rounded-lg" src={infoSong.thumbnail} />
        <div className="ml-3 flex flex-col">
          <span className="line-clamp-1 text-sm font-bold text-white">
            {infoSong.title}
          </span>
          <ShowArtists artists={infoSong.artists} />
        </div>
      </div>

      {/* action - duration bar */}
      <div className="relative flex max-w-[33.33333%] flex-1 flex-col items-center justify-center gap-2 text-white">
        <div
          className={`${playList ? "hidden" : "block"} absolute z-50 h-full w-full cursor-no-drop bg-[#000000] opacity-50`}
        ></div>
        {/* action */}
        <Action />
        {/* duration bar */}
        <DurationBar />
      </div>

      {/* action right */}
      <div className="flex max-w-[33.33333%] flex-1 items-center justify-end">
        <div className="flex items-center">
          <div className="flex items-center gap-2">
            <Button
              label={<FaMicroscope />}
              variant={"btnAction"}
              className={"!text-base"}
              onClick={handleNowPlay}
            />
            <Button
              label={<FaClone />}
              variant={"btnAction"}
              className={"!text-base"}
            />
            <Volume />
          </div>
          <div>sds</div>
        </div>
      </div>
    </div>
  );
}
export default memo(Controls);
