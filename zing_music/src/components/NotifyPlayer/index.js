import Header from "./Hearder";
// Import Swiper styles
import { useState } from "react";
import { useSelector } from "react-redux";
import ContentLyric from "./ContentLyric";
import ContentPlayList from "./ContentPlayList";
export default function NotifyPlayer({ open }) {
  const [conten, setContent] = useState("1");
  const { playList, listRelease } = useSelector((state) => state.musicPlay);

  const list = playList?.song?.items || listRelease;
  // Tính toán giá trị initialSlide

  const handleContent = (data) => {
    setContent(data);
  };

  return (
    <div
      className={`${
        open ? "h-full" : "h-0"
      } fixed w-full bottom-0  duration-700 z-50 transition-all overflow-hidden`}
    >
      <div className="absolute top-0 left-0 bottom-0 h-full w-full">
        <img
          className="scale-110 w-full h-full"
          style={{ filter: "blur(32px)" }}
          src="https://photo-resize-zmp3.zmdcdn.me/w360_r1x1_jpeg/avatars/7/9/9/b/799b387d346a819ece784725f7d81aa3.jpg"
        />
      </div>

      <div className="absolute top-0 left-0 bottom-0 w-full h-full bg-[#291547cc] "></div>

      <div className="flex flex-col w-full h-full absolute top-0 overflow-hidden">
        <div className="flex-none">
          <Header sttContent={handleContent} />
        </div>
        {/* content */}
        <div className="flex-1">
          {conten == "1" ? <ContentPlayList list={list} /> : <ContentLyric />}
        </div>
      </div>
    </div>
  );
}
