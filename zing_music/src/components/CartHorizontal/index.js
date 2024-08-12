import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaEllipsis,
  FaPlay,
  IconLoading,
  IconPlaying,
  IconPremium,
} from "../../assets/icon";
import { pause, play } from "../../redux/features/music/musicPlaySlice";
export default function CartHorzontal({
  encodeId,
  title,
  thumbnail,
  artists,
  releaseDate,
  previewInfo,
  handleListRelease,
}) {
  const { song, isPlay } = useSelector((state) => state.musicPlay);
  const dispatch = useDispatch();
  const handlePlause = () => {
    dispatch(pause());
  };
  const handlePlay = () => {
    dispatch(play());
  };

  return (
    <div className="p-2 group cursor-pointer hover:bg-[#feffff1a] rounded-md transition duration-300 ">
      <div className="flex items-center flex-row ">
        <div className="w-[60px] h-[60px] relative ">
          <img className="rounded-md group-hover:opacity-75" src={thumbnail} />
          <div
            className={`${
              song?.idSong == encodeId
                ? "opacity-100"
                : "group-hover:opacity-100"
            } group-hover:opacity-100 transition duration-300  opacity-0 absolute top-[50%] left-0 right-0
                bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center`}
          >
            {song?.idSong == encodeId && song?.loadingSong == false ? (
              isPlay ? (
                <IconPlaying onClick={handlePlause} />
              ) : (
                <FaPlay onClick={handlePlay} className="text-white text-lg" />
              )
            ) : song?.loadingSong ? (
              <IconLoading />
            ) : (
              <FaPlay
                onClick={handleListRelease}
                className="text-white text-lg"
              />
            )}
          </div>
        </div>

        <div className="flex flex-col cursor-pointer ml-3  flex-1">
          <div className="flex items-center">
            <span className="text-sm text-white font-bold hover:text-[var(--text-pink)] mr-3 line-clamp-1 ">
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
                {item.name + ", "}
              </Link>
            ))}
          </div>

          <span className="text-xs text-[var(--text-sub)] mt-[3px]">
            {moment.unix(releaseDate).utc().format("DD.MM.YYYY")}
          </span>
        </div>

        <div className="hidden group-hover:block">
          <FaEllipsis className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}
