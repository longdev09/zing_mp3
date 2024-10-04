import { useState } from "react";
import {
  FaChevronDown,
  FaGear,
  FaUpRightAndDownLeftFromCenter,
} from "../../../assets/icon";

export default function Header({ sttContent, onNotifly }) {
  // Hàm để mở toàn màn hình
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        // Firefox
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        // Chrome, Safari và Opera
        document.documentElement.webkitRequestFullscreen();
      } else if (document.documentElement.msRequestFullscreen) {
        // IE/Edge
        document.documentElement.msRequestFullscreen();
      }
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      } else if (document.mozCancelFullScreen) {
        // Firefox
        document.mozCancelFullScreen();
      } else if (document.webkitExitFullscreen) {
        // Chrome, Safari và Opera
        document.webkitExitFullscreen();
      } else if (document.msExitFullscreen) {
        // IE/Edge
        document.msExitFullscreen();
      }
    }
  };

  return (
    <div className="flex cursor-pointer items-center justify-between px-6 py-6">
      <div className="">
        <img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg" />
        <div></div>
      </div>
      <div className="flex items-center gap-4 overflow-hidden rounded-full bg-[#ffffff1a] p-1">
        <div className={`rounded-full bg-[#ffffff1a] px-12 py-1`}>
          <span className="font-bold text-white">Lời bài hát</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        {/* <Button
          onclick={toggleFullscreen}
          className="flex h-[44px] w-[44px] justify-center rounded-full bg-[#ffffff1a]"
        >
          <FaUpRightAndDownLeftFromCenter className="p-2 text-lg" />
        </Button> */}

        {/* <Button
          className="flex h-[44px] w-[44px] justify-center rounded-full bg-[#ffffff1a]"
          onclick={onNotifly}
        >
          <FaChevronDown className="p-2 text-lg" />
        </Button> */}
      </div>
    </div>
  );
}
