import Header from "./Hearder";
// Import Swiper styles
import { useState, useContext } from "react";
import { useSelector } from "react-redux";
import ContentLyric from "./ContentLyric";
import ContentPlayList from "./ContentPlayList";

import { MyContext } from "../../layouts";

export default function NotifyPlayer() {
  const { handleNotify, openNotifly } = useContext(MyContext);

  const { song } = useSelector((state) => state.musicPlay);

  return (
    <div
      className={`fixed w-full z-10 left-0 bottom-0 overflow-hidden transition-all duration-500 ${
        openNotifly ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ top: "0px" }} /* Đảm bảo phần tử nằm ở top của màn hình */
    >
      {/* background */}
      <div className="absolute top-0 left-0 right-0 bottom-0">
        {/* overlay */}
        <div className="absolute top-0 left-0 bottom-0 h-full w-full">
          <img
            className="scale-110 w-full h-full"
            style={{ filter: "blur(32px)" }}
            src={song ? song?.infoSong?.thumbnailM : ""}
          />
        </div>
        <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-[#291547cc]"></div>
      </div>

      {/* content */}
      <div
        className="flex flex-col  h-full relative top-0"
        style={{ height: "calc(100% - 90px)" }}
      >
        <div className="flex-none">
          <Header onNotifly={handleNotify} />
        </div>
        {/* content */}
        <div className="flex-1  flex justify-center items-center overflow-hidden">
          <ContentLyric />
        </div>
      </div>
    </div>
  );
}
