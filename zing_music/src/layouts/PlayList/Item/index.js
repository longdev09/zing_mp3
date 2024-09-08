import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaEllipsis,
  FaHeart,
  FaPlay,
  IconLoading,
  IconPlaying,
  IconPremium,
} from "../../../assets/icon";
import {
  fetchApiGetSong,
  pause,
  play,
} from "../../../redux/features/music/musicPlaySlice";
export default function Item({
  thumbnail,
  title,
  idSong,
  artists,
  previewInfo,
}) {
  const { isPlay, song } = useSelector((state) => state.musicPlay);

  const dispatch = useDispatch();
  const handleGetSong = () => {
    if (idSong == song?.idSong) {
    } else {
      dispatch(fetchApiGetSong(idSong));
    }
  };

  const handlePlause = () => {
    dispatch(pause());
  };
  const handlePlay = () => {
    dispatch(play());
  };

  return (
    <div
      className={`p-2 group cursor-pointer  rounded-md transition duration-300 ${
        idSong == song.idSong ? "bg-[#9b4de0]" : "hover:bg-[#feffff1a]"
      }`}
    >
      <div className="flex items-center flex-row ">
        <div className="w-[40px] h-[40px] relative ">
          <img className="rounded-md group-hover:opacity-75" src={thumbnail} />
          <div
            className={` ${
              song?.idSong == idSong ? "opacity-100" : "group-hover:opacity-100"
            } transition duration-300  opacity-0 absolute top-[50%] left-0 right-0  bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center`}
          >
            {song?.idSong == idSong && song?.loadingSong == false ? (
              isPlay ? (
                <IconPlaying onClick={handlePlause} />
              ) : (
                <FaPlay onClick={handlePlay} className="text-white text-lg" />
              )
            ) : song?.loadingSong ? (
              <IconLoading />
            ) : (
              <FaPlay onClick={handleGetSong} className="text-white text-lg" />
            )}
          </div>
        </div>

        <div className="flex flex-col justify-center cursor-pointer ml-3  flex-1">
          <div className="flex items-center">
            <span className="text-sm text-white font-bold hover:text-[var(--text-pink)] line-clamp-1  mr-3 ">
              {title}
            </span>
            {previewInfo ? <IconPremium /> : ""}
          </div>
          <div className="line-clamp-1">
            {artists?.map((item, index) => (
              <Link
                key={index}
                className="text-xs text-[var(--text-sub)] mt-[3px] hover:text-[var(--text-pink)] hover:underline"
              >
                <span className="text-xs text-[var(--text-sub)] mt-[3px]">
                  {item.name + ", "}
                </span>
              </Link>
            ))}
          </div>
        </div>
        <div className="hidden group-hover:block">
          <FaHeart className="text-white text-base px-7" />
          <FaEllipsis className="text-white text-base " />
        </div>
      </div>
    </div>
  );
}
