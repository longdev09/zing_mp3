import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaBars,
  FaClone,
  FaEllipsis,
  FaHeart,
  FaMicroscope,
} from "../../assets/icon";
import Button from "../../components/Button";

import {
  ControlNext,
  ControlPause,
  ControlPlay,
  ControlPrev,
} from "../../components/Control";
import TimeMusic from "../../components/TimeMusic";
import Volume from "../../components/Volume";
import { MyContext } from "..";
import { useContext } from "react";
import ControlRandom from "../../components/Control/ControlRandom";
import Test from "../../components/Test";
export default function Bottom({ onPlaylist }) {
  const { handleNotify, openNotifly } = useContext(MyContext);

  const { playList, listRelease, isPlay, song } = useSelector(
    (state) => state.musicPlay
  );
  console.log(song);
  return (
    <div
      className={`fixed z-[99] w-full bottom-0 select-none ${
        openNotifly ? "bg-[transparent]" : "bg-[var(--bg-bottom)]"
      } `}
    >
      <div
        className={`flex items-center h-[--h-bottom] px-5 ${
          openNotifly ? "justify-center" : "justify-between"
        }`}
      >
        <div
          className={`${openNotifly ? "hidden" : "flex"}  items-center w-[30%]`}
        >
          <img
            className="w-[64px] rounded-lg"
            src={
              playList &&
              playList?.itemSong?.find((item) => item.encodeId === song.idSong)
                ?.thumbnail
            }
          />
          <div className="flex flex-col ml-3">
            <span className="text-sm font-bold text-white line-clamp-1">
              {playList &&
                playList?.itemSong?.find(
                  (item) => item.encodeId === song.idSong
                )?.title}
            </span>

            <div className="mt-1 font-bold text-[--text-sub] text-xs line-clamp-1">
              {playList &&
                playList?.itemSong
                  ?.find((item) => item.encodeId === song.idSong)
                  ?.artists?.map((item, index) => (
                    <Link
                      key={index}
                      className="text-xs text-[var(--text-sub)] mt-[3px] hover:text-[var(--text-pink)] hover:underline"
                    >
                      <span className="text-xs text-[var(--text-sub)] mt-[3px]">
                        {item.name + ", "}
                      </span>
                    </Link>
                  ))}
            </div>
          </div>
          <div className="flex text-white ml-6">
            <FaHeart className="mr-6 " />
            <FaEllipsis />
          </div>
        </div>

        <div
          className={`flex-grow xl:max-w-[40vw] flex ${
            openNotifly ? "flex-col-reverse" : "flex-col"
          }`}
        >
          <div className="flex items-center justify-center ">
            <ControlRandom />
            <ControlPrev />
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border">
              {isPlay ? <ControlPause /> : <ControlPlay />}
            </div>
            <ControlNext />
          </div>
          <TimeMusic />
        </div>

        <div
          className={`${
            openNotifly ? "hidden" : "flex"
          } w-[30%] text-white  items-center  justify-end`}
        >
          <Button onclick={handleNotify} className="!text-lg mx-4">
            <FaMicroscope />
          </Button>
          <Button className="!text-lg mx-4">
            <FaClone />
          </Button>
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
