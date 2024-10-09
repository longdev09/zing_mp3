import { useRef, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaVolumeHigh, FaVolumeXmark } from "../../../assets/icon";
import Button from "../../atoms/Button";
import { setVolume } from "../../../redux/features/music/musicPlaySlice";

function Volume() {
  const dispatch = useDispatch();
  const { volume_ } = useSelector((state) => state.musicPlay);

  const refLine = useRef();
  const [isDragging, setIsDragging] = useState(false);
  const [progress, setProgress] = useState(volume_);
  const [rectWidth, setRectWidth] = useState(0);

  useEffect(() => {
    if (refLine.current) {
      setRectWidth(refLine.current.getBoundingClientRect().width);
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        updateProgress(e);
      }
    };

    const handleMouseUp = () => {
      if (isDragging) {
        setIsDragging(false);
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
    } else {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    updateProgress(e); // Cập nhật giá trị âm lượng ngay khi nhấp chuột
  };

  const updateProgress = (e) => {
    const rect = refLine.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newProgress = Math.max(
      0,
      Math.min((offsetX / rect.width) * 100, 100),
    );
    setProgress(newProgress); // Cập nhật giá trị thanh âm lượng

    // Dispatch giá trị âm lượng mới tới Redux store
    dispatch(setVolume(newProgress));
  };

  return (
    <div className="flex items-center gap-2">
      {volume_ == 0 ? (
        <Button
          label={<FaVolumeXmark />}
          variant={"btnAction"}
          className={"!text-base"}
        />
      ) : (
        <Button
          label={<FaVolumeHigh />}
          variant={"btnAction"}
          className={"!text-base"}
        />
      )}

      <div
        className="group relative flex h-3 w-[70px] cursor-pointer items-center"
        ref={refLine}
        onMouseDown={handleMouseDown} // Xử lý sự kiện nhấp và kéo trên thanh âm lượng
      >
        <div
          className="absolute h-1 w-full rounded-full group-hover:h-2"
          style={{
            background: `linear-gradient(to right, white 0%, white ${progress}%, #ffffff4d ${progress}%, #ffffff4d 100%)`,
          }}
        ></div>
        <div
          className="absolute hidden h-3 w-3 rounded-full bg-white group-hover:block"
          style={{
            transform: `translateX(${(progress / 100) * rectWidth - 2}px)`,
          }}
        ></div>
      </div>
    </div>
  );
}

export default Volume;
