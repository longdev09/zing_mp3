import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHandleMusic } from "../../../hooks";
import {
  set_PreviewTime,
  setCurrentTime,
  setDuration,
} from "../../../redux/features/music/currentTimeSlice";
import { setLoadingSong } from "../../../redux/features/music/musicPlaySlice";

function AudioPlayer() {
  const audioRef = useRef(null);
  const dispatch = useDispatch();
  const { song, isPlay, volume_ } = useSelector((state) => state.musicPlay);
  const { previewTime } = useSelector((state) => state.currentTime);
  const { handleNextSong } = useHandleMusic();
  // Effect cập nhật trạng thái
  useEffect(() => {
    const audio = audioRef.current;
    if (song?.url && audio) {
      if (audio.src !== song?.url) {
        audio.src = song.url; // Cập nhật URL
        audio.load(); // Tải lại URL mới nếu URL thay đổi
      }

      if (isPlay) {
        audio.play().catch((error) => {
          console.error("Error playing audio:", error);
        });
      } else {
        dispatch(set_PreviewTime(audio.currentTime));
        audio.pause();
      }
    }
  }, [song, isPlay]);

  // Effect cập nhật thời gian
  useEffect(() => {
    const audio = audioRef.current;
    if (song?.url && audio) {
      audio.currentTime = previewTime;
      // Hàm xử lý cập nhật thời gian hiện tại của bài hát
      const handleTimeUpdate = () => {
        dispatch(setCurrentTime(audio.currentTime));
        if (audio.duration == audio.currentTime && audio.duration != 0) {
          handleNextSong();
        }
      };

      // Hàm xử lý lấy tổng thời gian của bài hát
      const handleLoadedMetadata = () => {
        dispatch(setDuration(audio.duration));
      };

      // Thêm sự kiện
      audio.addEventListener("loadedmetadata", handleLoadedMetadata);
      audio.addEventListener("timeupdate", handleTimeUpdate);

      // Xóa sự kiện khi component bị hủy
      return () => {
        audio.removeEventListener("loadedmetadata", handleLoadedMetadata);
        audio.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [song, previewTime]);

  // Effect để cập nhật volume
  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume_ / 100; // Cập nhật âm lượng, đảm bảo giá trị từ 0 đến 1
    }
  }, [volume_]);

  // Xử lý sự kiện khi bài hát bắt đầu tải
  const handleLoading = () => {
    dispatch(setLoadingSong(true));
  };

  // Xử lý sự kiện khi bài hát có thể phát
  const handleCanPlay = () => {
    dispatch(setLoadingSong(false));
  };

  return (
    <audio
      ref={audioRef}
      onCanPlay={handleCanPlay}
      onLoadStart={handleLoading}
    />
  );
}

export default AudioPlayer;
