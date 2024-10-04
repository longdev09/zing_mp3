import { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setCurrentTime,
  setCurrentTimeLyric,
  setSongTime,
} from "../../redux/features/music/currentTimeSlice";
import { setLoadingSong } from "../../redux/features/music/musicPlaySlice";

export default function PlayMusic({ url }) {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { currentTime, volume, songTime } = useSelector(
    (state) => state.currentTime,
  );

  const { isPlay } = useSelector((state) => state.musicPlay);
  const [timeht, setTimeHt] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio && url) {
      if (audio.src !== url) {
        console.log("sssssssssssssssssssssss ss");
        audio.src = url;
        audio.load(); // Tải lại URL mới nếu URL thay đổi
      }

      // Bắt đầu tải nhạc (set trạng thái loading = true)
      const handleLoadStart = () => {
        dispatch(setLoadingSong(true));
      };

      const handleLoadedMetadata = () => {
        dispatch(setLoadingSong(false));
        dispatch(setSongTime(audio.duration));
      };

      audio.currentTime = currentTime;
      audio.volume = volume / 100; // Giữ lại 2 chữ số thập phân

      let animationFrameId;

      const updateTime = () => {
        setTimeHt(audio.currentTime);
        dispatch(setCurrentTimeLyric(audio.currentTime)); // dung de su ly cai lyric
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
      audio.addEventListener("loadstart", handleLoadStart);
      // Dọn dẹp sự kiện và requestAnimationFrame khi component bị hủy
      return () => {
        audio.removeEventListener("loadstart", handleLoadStart);
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);

        cancelAnimationFrame(animationFrameId);
      };
    }
  }, [url, isPlay, volume, currentTime, songTime]);

  return <audio ref={audioRef} />;
}
