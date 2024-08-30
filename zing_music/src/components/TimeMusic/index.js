import { useDispatch, useSelector } from "react-redux";
import { useConverTime } from "../../hooks";
import { useEffect, useState } from "react";
import { setCurrentTime } from "../../redux/features/music/currentTimeSlice";
import { nextSong } from "../../redux/features/music/musicPlaySlice";
export default function TimeMusic() {
  const { currentTime, songTime } = useSelector((state) => state.currentTime);
  const { isPlay, song, playList, listRelease } = useSelector(
    (state) => state.musicPlay
  );
  const dispatch = useDispatch();
  const [time, setTime] = useState(0);

  useEffect(() => {
    // Reset time khi chuyển bài hát
    setTime(0);
  }, [song]);

  useEffect(() => {
    if (!isPlay) return;

    const timerInterval = setInterval(() => {
      setTime((prevTime) => {
        const newTime = prevTime + 0.1;
        if (newTime >= songTime) {
          if (playList) {
            dispatch(nextSong(playList));
          } else {
            dispatch(nextSong(listRelease));
          }
          clearInterval(timerInterval); // Dừng bộ đếm nếu thời gian vượt quá thời gian bài hát
          return songTime; // Đảm bảo thời gian không vượt quá songTime
        }

        return newTime;
      });
    }, 100);

    // Cleanup khi component unmount hoặc khi dừng phát nhạc
    return () => clearInterval(timerInterval);
  }, [isPlay, songTime]);

  const handleSeek = (e) => {
    const newTime = (e.target.value / 100) * songTime;
    setTime(newTime);
  };

  const handleSeekEnd = () => {
    dispatch(setCurrentTime(time));
  };

  return (
    <div className="flex items-center py-1 cursor-pointer">
      <span className="text-[var(--text-sub)] text-sm mr-2">
        {useConverTime(time)}
      </span>
      <input
        value={songTime === 0 ? 0 : Math.floor((time / songTime) * 100)}
        type="range"
        name="range"
        min="0"
        max="100"
        className="!bg-yellow-300 w-full"
        onChange={handleSeek} // Bắt sự kiện khi người dùng kéo thanh trượt
        onMouseUp={handleSeekEnd} // Gửi cập nhật khi người dùng thả chuột
        onTouchEnd={handleSeekEnd} // Gửi cập nhật khi người dùng thả tay (trên thiết bị cảm ứng)
      />
      <span className="text-[var(--text-sub)] text-sm ml-2">
        {useConverTime(songTime)}
      </span>
    </div>
  );
}
