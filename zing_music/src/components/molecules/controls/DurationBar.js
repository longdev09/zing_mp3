import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useConverTime, useHandleMusic } from "../../../hooks";
import { set_PreviewTime } from "../../../redux/features/music/currentTimeSlice";
function DurationBar() {
  // thời lượng bài hát
  const dispatch = useDispatch();
  const refLine = useRef();
  const { duration, currentTime } = useSelector((state) => state.currentTime);
  const [isDragging, setIsDragging] = useState(false);
  const [previewTime, setPreviewTime] = useState(currentTime);



  useEffect(() => {
    const handleMouseMove = (e) => {
      if (isDragging) {
        const rect = refLine.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newTime = Math.max(
          0,
          Math.min((offsetX / rect.width) * duration, duration),
        );
        setPreviewTime(newTime); // Cập nhật thời gian xem trước khi đang kéo
      }
    };

    const handleMouseUp = (e) => {
      if (isDragging) {
        const rect = refLine.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const newTime = Math.max(
          0,
          Math.min((offsetX / rect.width) * duration, duration),
        );
        // Cập nhật thời gian phát nhạc mới khi thả chuột
        dispatch(set_PreviewTime(newTime));
        setIsDragging(false); // Kết thúc kéo
      }
    };

    // gan xu kien va xoa su kien
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
  }, [isDragging, duration]);

  const handleMouseDown = () => {
    setIsDragging(true); // Bắt đầu kéo
  };

  const rect = refLine.current
    ? refLine.current.getBoundingClientRect()
    : { width: 0 };
  const progress = isDragging
    ? (previewTime / duration) * 100
    : (currentTime / duration) * 100;

  return (
    <div
      className="flex w-full cursor-pointer items-center py-1"
      onMouseDown={handleMouseDown}
    >
      <span className="mr-2 text-sm text-[var(--text-sub)]">
        {useConverTime(isDragging ? previewTime : currentTime)}
      </span>
      <div
        className="group relative flex h-3 w-full cursor-pointer items-center"
        ref={refLine}
      >
        <div
          className="absolute h-1 w-full rounded-full group-hover:h-2"
          style={{
            background: `linear-gradient(to right, white 0%, white ${progress}%, #ffffff4d ${progress}%, #ffffff4d 100%)`,
          }}
        ></div>
        <div
          className="absolute h-3 w-3 rounded-full bg-white group-hover:block"
          style={{
            transform: `translateX(${(progress / 100) * rect.width - 2}px)`,
          }}
        ></div>
      </div>
      <span className="ml-2 text-sm text-[var(--text-sub)]">
        {useConverTime(duration)}
      </span>
    </div>
  );
}

export default DurationBar;
