import { useCallback, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { nextSong } from "../../redux/features/music/musicPlaySlice";
import { setCurrentTime } from "../../redux/features/music/currentTimeSlice";
import { useConverTime } from "../../hooks";

export default function Test() {
  const [line, setLine] = useState(0); // Giá trị của thanh trượt
  const rectRef = useRef(null); // Tham chiếu tới phần tử để lấy kích thước
  const [rect, setRect] = useState({ left: 0, width: 0 }); // Lưu giá trị kích thước của phần tử
  const [startTime, setStartTime] = useState(null); // Thời gian bắt đầu phát nhạc
  const [isDragging, setIsDragging] = useState(false); // Trạng thái kéo thanh trượt

  const dispatch = useDispatch();
  const { songTime } = useSelector((state) => state.currentTime); // Lấy thời gian bài hát
  const { isPlay, playList } = useSelector((state) => state.musicPlay);

  useEffect(() => {
    if (!isPlay || isDragging) return;

    setStartTime(Date.now());
    const timerInterval = setInterval(() => {
      setLine((prevLine) => {
        const currentTime = Date.now();
        const elapsedTime = (currentTime - startTime) / 1000; // Thời gian đã trôi qua tính bằng giây
        const newLine = (elapsedTime / songTime) * 100; // Tính phần trăm thời gian
        if (newLine >= 100) {
          dispatch(nextSong(playList)); // Chuyển sang bài tiếp theo khi hết bài
          clearInterval(timerInterval); // Dừng bộ đếm khi hết bài
          return 100;
        }
        return newLine;
      });
    }, 100); // Cập nhật mỗi 100ms

    return () => clearInterval(timerInterval); // Cleanup khi component unmount hoặc dừng phát nhạc
  }, [isPlay, songTime, startTime, playList, isDragging]);

  // Cập nhật kích thước của thanh trượt khi render hoặc resize

  // lay chieu rong de tinh theo song tim tuong ung
  const updateRect = useCallback(() => {
    if (rectRef.current) {
      const { left, width } = rectRef.current.getBoundingClientRect();
      setRect({ left, width }); // Lưu kích thước thanh trượt vào state
    }
  }, []);

  useEffect(() => {
    updateRect(); // Cập nhật khi render lần đầu

    window.addEventListener("resize", updateRect); // Cập nhật khi resize
    return () => {
      window.removeEventListener("resize", updateRect); // Cleanup khi component unmount
    };
  }, [updateRect]);

  /// **************
  const handleMouseUp = (e) => {
    setIsDragging(false);
    dispatch(setCurrentTime(line / 100) * songTime);
  };

  const handleMouseMove = useCallback(
    (e) => {
      const { left, width } = rect;
      let newLine = ((e.clientX - left) / width) * 100;
      if (e.clientX < left) newLine = 0;
      if (e.clientX > left + width) newLine = 100;
      setLine(newLine);
    },
    [rect]
  );

  const handleMouseDown = (e) => {
    setIsDragging(true);
    handleMouseMove(e);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener(
      "mouseup",
      () => {
        window.removeEventListener("mousemove", handleMouseMove);
      },
      { once: true }
    );
  };

  return (
    <div
      className="mt-3 flex items-center"
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
    >
      <span className="text-[var(--text-sub)] text-sm mr-2">
        {useConverTime((line / 100) * songTime)}
      </span>
      <div
        className="w-full h-3 relative cursor-pointer flex items-center group"
        ref={rectRef}
      >
        <div
          className="absolute w-full h-1 group-hover:h-2 rounded-full"
          style={{
            background: `linear-gradient(to right, white 0%, white ${line}%, #ffffff4d ${line}%, #ffffff4d 100%)`,
          }}
        ></div>
        <div
          className="w-3 h-3 absolute bg-white rounded-full hidden group-hover:block"
          style={{
            transform: `translateX(${(line / 100) * rect.width - 2}px)`,
          }}
        ></div>
      </div>

      <span className="text-[var(--text-sub)] text-sm ml-2">
        {useConverTime(songTime)} {/* Hiển thị tổng thời gian bài hát */}
      </span>
    </div>
  );
}
