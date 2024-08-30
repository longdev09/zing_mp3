import { FaForwardStep, FaHeart, FaPlay } from "../../assets/icon";

export default function BottomMobile() {
  return (
    <div className="fixed z-[99] left-0 right-0  bottom-0 bg-[var(--bg-bottom)] overflow-hidden">
      <div className="flex items-center h-[--h-bottom-mobile] px-5 justify-between">
        <div className="flex items-center">
          <img
            className="w-[50px] rounded-lg"
            src="https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/cover/4/a/9/c/4a9c65e2010f9b2142a58715ff3ff5f1.jpg"
          />

          <div className="flex flex-col ml-3">
            <span className="text-white">Nhac hay qua</span>
            <span>Ca Si</span>
          </div>
        </div>

        <div className="flex text-white items-center">
          <div className="mx-3 text-2xl">
            <FaHeart />
          </div>
          <div className="mx-3  text-2xl">
            <FaPlay />
          </div>
          <div className="mx-3  text-2xl">
            <FaForwardStep />
          </div>
        </div>
      </div>
    </div>
  );
}
