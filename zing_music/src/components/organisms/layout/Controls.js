import { memo, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  FaBars,
  FaClone,
  FaHouse,
  FaLayerGroup,
  FaMagnifyingGlass,
  FaMicroscope,
  FaShuffle,
  FaUser,
} from "../../../assets/icon";
import Button from "../../atoms/Button";
import ShowArtists from "../../atoms/ShowArtists";
import { Action, DurationBar, Volume } from "../../molecules/controls";
import { useHandleMusic } from "../../../hooks";
import { Link } from "react-router-dom";
function Controls() {
  const { playList, song } = useSelector((state) => state.musicPlay);

  const [infoSong, setInFoSong] = useState("");

  useEffect(() => {
    const foundSong = playList?.list.find((s) => s.encodeId === song?.idSong);
    setInFoSong(foundSong || "");
  }, [song]);

  const { handleNowPlay, handlePlayingBar, handleNextSong } = useHandleMusic();

  return (
    <div className="h-[140px] w-full flex-col items-center bg-[var(--color-extra)] md:h-[100px]">
      <div className="hidden h-full w-full items-center px-[var(--pd-content)] md:flex">
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
              <Volume />
              <Button
                label={<FaBars />}
                variant={"btnAction"}
                className={"!text-base"}
                onClick={handlePlayingBar}
              />
            </div>
          </div>
        </div>
      </div>





      {/* chỉ xuất hiện khi màn hình nhỏ*/}
      <div
        onClick={handleNowPlay}
        className="flex h-[70px] cursor-pointer bg-[#0c0b0bb3] px-3 py-2 md:hidden"
      >
        {/* item song */}
        <div className="flex max-w-[50%] flex-1 items-center">
          <img className="w-[54px] rounded-lg" src={infoSong.thumbnail} />
          <div className="ml-3 flex flex-col">
            <span className="line-clamp-1 text-sm font-bold text-white">
              {infoSong.title}
            </span>
            <ShowArtists artists={infoSong.artists} />
          </div>
        </div>
        {/* action - duration bar */}
        <div className="relative flex max-w-[50%] flex-1 flex-col items-end justify-center gap-2 text-white">
          <div
            className={`${playList ? "hidden" : "block"} absolute z-50 h-full w-full cursor-no-drop bg-[#000000] opacity-50`}
          ></div>
          <Action />
        </div>
      </div>

      {/* phần menu chỉ hiện cho màn hình nhỏ */}
      <div className="flex h-[70px] md:hidden">
        {/* trang chủ */}
        <Link className="h-full flex-none basis-1/4">
          <div className="flex h-full flex-col items-center justify-center p-2 text-[#dadada] opacity-70">
            <FaHouse className={"mb-1 !text-lg"} />
            <h1 className="text-sm font-semibold">Trang chủ</h1>
          </div>
        </Link>

        {/* tìm kiếm */}
        <Link className="h-full flex-none basis-1/4">
          <div className="flex h-full flex-col items-center justify-center p-2 text-[#dadada] opacity-70">
            <FaMagnifyingGlass className={"mb-1 !text-lg"} />

            <h1 className="text-sm font-semibold">Tìm kiếm</h1>
          </div>
        </Link>

        {/* Thư viện */}
        <Link className="h-full flex-none basis-1/4">
          <div className="flex h-full flex-col items-center justify-center p-2 text-[#dadada] opacity-70">
            <FaLayerGroup className={"mb-1 !text-lg"} />

            <h1 className="text-sm font-semibold">Thư viện</h1>
          </div>
        </Link>

        {/* Thư viện */}
        <Link className="h-full flex-none basis-1/4">
          <div className="flex h-full flex-col items-center justify-center p-2 text-[#dadada] opacity-70">
            <FaUser className={"mb-1 !text-lg"} />

            <h1 className="text-sm font-semibold">Hồ sơ</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
export default memo(Controls);
