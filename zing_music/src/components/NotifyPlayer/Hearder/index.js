import { useState } from "react";
import {
  FaChevronDown,
  FaGear,
  FaUpRightAndDownLeftFromCenter,
} from "../../../assets/icon";
import Button from "../../Button";

export default function Header({ sttContent }) {
  const [conent, setContent] = useState("1");
  const handleSetContent = (item) => {
    sttContent(item);
    setContent(item);
  };
  return (
    <div className="flex px-6 py-6 items-center justify-between cursor-pointer">
      <div>
        <img src="https://zjs.zmdcdn.me/zmp3-desktop/dev/119956/static/media/icon_zing_mp3_60.f6b51045.svg" />
        <div></div>
      </div>
      <div className="bg-[#ffffff1a] rounded-full overflow-hidden p-1 flex items-center gap-4">
        <div
          onClick={() => handleSetContent("1")}
          className={`px-12 py-1 rounded-full ${
            conent == "1" ? "bg-[#ffffff1a] " : ""
          }`}
        >
          <span className="text-white font-bold">Danh sách phát</span>
        </div>
        <div
          onClick={() => handleSetContent("2")}
          className={`px-12 py-1 rounded-full ${
            conent == "2" ? "bg-[#ffffff1a] " : ""
          }`}
        >
          <span className="text-white font-bold">Lời bài hát</span>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <Button className="rounded-full bg-[#ffffff1a] w-[44px] h-[44px] flex  justify-center">
          <FaUpRightAndDownLeftFromCenter className="p-2 text-lg" />
        </Button>
        <Button className="rounded-full bg-[#ffffff1a] w-[44px] h-[44px] flex  justify-center">
          <FaGear className="p-2 text-lg" />
        </Button>
        <Button className="rounded-full bg-[#ffffff1a] w-[44px] h-[44px] flex  justify-center">
          <FaGear className="p-2 text-lg" />
        </Button>
      </div>
    </div>
  );
}
