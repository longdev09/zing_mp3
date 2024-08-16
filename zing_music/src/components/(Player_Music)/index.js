import { useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTime,
  setSongTime,
} from "../../redux/features/music/currentTimeSlice";

export default function PlayMusic({ url, isPlay }) {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { currentTime } = useSelector((state) => state.currentTime);

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

      let animationFrameId;

      const updateTime = () => {
        dispatch(setCurrentTime(audio.currentTime));
        animationFrameId = requestAnimationFrame(updateTime);
      };

      if (isPlay) {
        audio.play().catch((error) => {
          console.error("Play error:", error);
        });
        animationFrameId = requestAnimationFrame(updateTime);
      } else {
        audio.pause();
        cancelAnimationFrame(animationFrameId);
      }

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);

      // Dọn dẹp sự kiện và requestAnimationFrame khi component bị hủy
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [url, isPlay]);

  return <audio ref={audioRef} />;
}
