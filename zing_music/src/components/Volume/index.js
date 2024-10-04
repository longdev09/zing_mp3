import { useState, useCallback } from "react";

import { FaVolumeHigh, FaVolumeXmark } from "../../assets/icon";
import { useDispatch } from "react-redux";
import { setVolume } from "../../redux/features/music/currentTimeSlice";
import debounce from "lodash.debounce";

export default function Volume() {
  const dispatch = useDispatch();
  const [volume, _setVolume] = useState(50); // Mức âm lượng ban đầu là 0%

  const handleVolumeChange = (newVolume) => {
    if (newVolume < 0) newVolume = 0;
    if (newVolume > 100) newVolume = 100;
    dispatch(setVolume(newVolume));
    _setVolume(newVolume);
  };

  const handleMouseMove = useCallback(
    debounce((e) => {
      const rect = e.target.getBoundingClientRect();
      const newVolume = ((e.clientX - rect.left) / rect.width) * 100;
      handleVolumeChange(newVolume);
    }, 10),
    [],
  );

  const handleMouseDown = (e) => {
    handleMouseMove(e);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "mouseup",
      () => {
        window.removeEventListener("mousemove", handleMouseMove);
      },
      { once: true },
    );
  };

  const handleVolume = () => {
    dispatch(setVolume(0));
    _setVolume(0);
  };

  return (
    <>
      {/* <Button onclick={handleVolume} className="mx-4 !text-lg">
        {volume === 0 ? <FaVolumeXmark /> : <FaVolumeHigh />}
      </Button> */}
      <div
        className="relative h-[5px] w-[70px] cursor-pointer rounded-lg bg-[#5a5560]"
        onMouseDown={handleMouseDown}
      >
        <div
          className="absolute h-full rounded-lg"
          style={{
            background: `linear-gradient(to right, white ${volume}%, #5a5560 ${volume}%)`,
            width: "100%", // Đảm bảo phần tử bao phủ toàn bộ chiều rộng của thanh
          }}
        >
          {/* <div
            className="absolute left-0 right-0 w-[10px] h-[10px] bg-white rounded-full"
            style={{
              transform: `translate(${(volume / 100) * 70}px, -3px)`,
            }}
          ></div> */}
        </div>
      </div>
    </>
  );
}
