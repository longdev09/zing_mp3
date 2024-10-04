import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaBars, FaEllipsis, FaHeart, FaMicroscope } from "../../assets/icon";

import { useContext } from "react";
import { MyContext } from "..";
import {
  ControlNext,
  ControlPause,
  ControlPlay,
  ControlPrev,
} from "../../components/Control";
import ControlRandom from "../../components/Control/ControlRandom";
import TimeMusic from "../../components/TimeMusic";
import Volume from "../../components/Volume";

export default function Bottom({ onPlaylist }) {
  const { handleNotify, openNotifly } = useContext(MyContext);

  const { playList, isPlay, song } = useSelector((state) => state.musicPlay);

  return (
    <div
      className={`fixed bottom-0 z-[99] w-full select-none ${
        openNotifly ? "bg-[transparent]" : "bg-[var(--color-extra)]"
      } `}
    >
      <div
        className={`flex h-[--h-bottom] items-center px-5 ${
          openNotifly ? "justify-center" : "justify-between"
        }`}
      >
        <div
          className={`${openNotifly ? "hidden" : "flex"} w-[30%] items-center`}
        >
          <img
            className="w-[64px] rounded-lg"
            src={song?.infoSong?.thumbnail}
          />
          <div className="ml-3 flex flex-col">
            <span className="line-clamp-1 text-sm font-bold text-white">
              {song?.infoSong?.title}
            </span>

            <div className="mt-1 line-clamp-1 text-xs font-bold text-[--text-sub]">
              {playList &&
                playList?.itemSong
                  ?.find((item) => item.encodeId === song.idSong)
                  ?.artists?.map((item, index) => (
                    <Link
                      key={index}
                      className="mt-[3px] text-xs text-[var(--text-sub)] hover:text-[var(--text-pink)] hover:underline"
                    >
                      <span className="mt-[3px] text-xs text-[var(--text-sub)]">
                        {item.name + ", "}
                      </span>
                    </Link>
                  ))}
            </div>
          </div>
          <div className="ml-6 flex text-white">
            <FaHeart className="mr-6" />
            <FaEllipsis />
          </div>
        </div>

        <div
          className={`flex flex-grow xl:max-w-[40vw] ${
            openNotifly ? "flex-col-reverse" : "flex-col"
          }`}
        >
          <div className="flex items-center justify-center">
            <ControlRandom />
            <ControlPrev />
            <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border">
              {isPlay ? <ControlPause /> : <ControlPlay />}
            </div>
            <ControlNext />
          </div>
          <TimeMusic />
        </div>

        <div
          className={`${
            openNotifly ? "hidden" : "flex"
          } w-[30%] items-center justify-end text-white`}
        >
          {/* <Button onclick={handleNotify} className="mx-4 !text-lg">
            <FaMicroscope />
          </Button> */}

          <div className="flex items-center">
            <Volume />
          </div>

          {/* nav bar playlist */}
          <div onClick={onPlaylist} className="ml-4 cursor-pointer">
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
}
