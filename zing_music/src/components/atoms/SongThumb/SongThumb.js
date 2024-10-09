import { useSelector } from "react-redux";
import { FaPlay, IconPlaying, IconLoading } from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
function SongThumb({
  idSong,
  src,
  alt,
  width = "100%",
  height = "auto",
  handle,
}) {
  const { song, isPlay, loadingSong } = useSelector((state) => state.musicPlay);
  const { handlePlause, handlePlay } = useHandleMusic();

  return (
    <div className="relative">
      <figure>
        <img
          className="rounded-lg"
          src={src}
          alt={alt}
          width={width}
          height={height}
        />
      </figure>

      {/* loading trang thai bai hat */}
      <div
        className={`${
          song?.idSong == idSong ? "opacity-100" : "group-hover:opacity-100"
        } translate-x-(-50%) absolute bottom-auto left-0 right-0 top-[50%] flex translate-y-[-50%] justify-center opacity-0 transition duration-300 group-hover:opacity-100`}
      >
        {song?.idSong == idSong ? (
          loadingSong ? (
            <IconLoading />
          ) : isPlay ? (
            <IconPlaying onClick={handlePlause} />
          ) : (
            <FaPlay onClick={handlePlay} className="text-lg text-white" />
          )
        ) : (
          <FaPlay onClick={handle} className="text-lg text-white" />
        )}
      </div>
    </div>
  );
}

export default SongThumb;
