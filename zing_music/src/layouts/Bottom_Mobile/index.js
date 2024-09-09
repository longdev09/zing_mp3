import { useContext } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { MyContext } from "..";
import { FaBars } from "../../assets/icon";
import {
  ControlNext,
  ControlPause,
  ControlPlay,
  ControlPrev,
} from "../../components/Control";
export default function BottomMobile({ onPlaylist }) {
  const { song, isPlay } = useSelector((state) => state.musicPlay);
  const { handleNotify, openNotifly } = useContext(MyContext);
  return (
    <div className="fixed z-[99] left-0 right-0  bottom-0 bg-[var(--bg-bottom)] overflow-hidden h-[90px] w-full flex items-center cursor-pointer">
      <div className="flex items-center h-[--h-bottom-mobile] px-5 justify-between w-full">
        <div className="flex items-center">
          <img
            className="w-[50px] rounded-lg"
            src={song?.infoSong?.thumbnail}
          />
          <div className="flex flex-col ml-3">
            <span className="text-sm font-bold text-white line-clamp-1">
              {song?.infoSong?.title}
            </span>
            <div className="mt-1 font-bold text-[--text-sub] text-xs line-clamp-1">
              {song?.infoSong?.artists?.map((item, index) => (
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
        </div>

        <div className="flex text-white items-center">
          <div className="text-2xl">
            <ControlPrev />
          </div>
          <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border">
            {isPlay ? <ControlPause /> : <ControlPlay />}
          </div>
          <div className="text-2xl">
            <ControlNext />
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
