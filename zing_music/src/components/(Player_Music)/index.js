import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTime,
  setSongTime,
} from "../../redux/features/music/currentTimeSlice";

export default function PlayMusic({ url }) {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { currentTime, volume, songTime } = useSelector(
    (state) => state.currentTime
  );

  const { isPlay } = useSelector((state) => state.musicPlay);
  const [timeht, setTimeHt] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      if (audio.src !== url) {
        audio.src = url;
        audio.load(); // Tải lại URL mới nếu URL thay đổi
      }

      const handleLoadedMetadata = () => {
        dispatch(setSongTime(audio.duration));
      };

      audio.currentTime = currentTime;
      audio.volume = volume / 100; // Giữ lại 2 chữ số thập phân

      let animationFrameId;

      const updateTime = () => {
        setTimeHt(audio.currentTime);
        animationFrameId = requestAnimationFrame(updateTime);
      };

      if (isPlay) {
        audio.play().catch((error) => {
          console.error("Play error:", error);
        });
        animationFrameId = requestAnimationFrame(updateTime);
      }
      if (!isPlay) {
        audio.pause();
        dispatch(setCurrentTime(timeht));
        cancelAnimationFrame(animationFrameId);
      }

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      // Dọn dẹp sự kiện và requestAnimationFrame khi component bị hủy
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [url, isPlay, volume, currentTime, songTime]);

  return <audio ref={audioRef} />;
}
