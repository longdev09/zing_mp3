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
        dispatch(setCurrentTime(0));
      }

      const handleLoadedMetadata = () => {
        dispatch(setSongTime(audio.duration));
      };

      /// su kien lay time bai hat
      audio.currentTime = currentTime;
      const updateTime = () => {
        dispatch(setCurrentTime(audio.currentTime));
      };

      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", updateTime);

      if (isPlay) {
        audio.play().catch((error) => {
          console.error("Play error:", error);
        });
      } else {
        audio.pause();
      }
      // Dọn dẹp sự kiện khi component bị hủy
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", updateTime);
      };
    }
  }, [url, isPlay]);

  return <audio ref={audioRef} />;
}
