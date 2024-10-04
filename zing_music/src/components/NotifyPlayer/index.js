import Header from "./Hearder";
// Import Swiper styles
import { useContext } from "react";
import { useSelector } from "react-redux";
import ContentLyric from "./ContentLyric";

import { MyContext } from "../templates/Layout/Layout";

export default function NotifyPlayer() {
  const { handleNotify, openNotifly } = useContext(MyContext);

  const { song } = useSelector((state) => state.musicPlay);

  return (
    <div
      className={`fixed bottom-0 left-0 z-10 w-full overflow-hidden transition-all duration-500 ${
        openNotifly ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ top: "0px" }} /* Đảm bảo phần tử nằm ở top của màn hình */
    >
      {/* background */}
      <div className="absolute bottom-0 left-0 right-0 top-0">
        {/* overlay */}
        <div className="absolute bottom-0 left-0 top-0 h-full w-full">
          <img
            className="h-full w-full scale-110"
            style={{ filter: "blur(32px)" }}
            src={song ? song?.infoSong?.thumbnailM : ""}
          />
        </div>
        <div className="absolute bottom-0 left-0 top-0 h-full w-full bg-[#291547cc]"></div>
      </div>

      {/* content */}
      <div
        className="relative top-0 flex h-full flex-col"
        style={{ height: "calc(100% - 90px)" }}
      >
        <div className="flex-none">
          <Header onNotifly={handleNotify} />
        </div>
        {/* content */}
        <div className="flex flex-1 items-center justify-center overflow-hidden">
          <ContentLyric />
        </div>
      </div>
    </div>
  );
}
