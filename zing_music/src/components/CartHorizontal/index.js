import moment from "moment";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaEllipsis,
  FaPlay,
  IconLoading,
  IconPlaying,
  IconPremium,
} from "../../assets/icon";
import { useHandleMusic, useShowName } from "../../hooks";
import { memo } from "react";
function CartHorzontal({
  encodeId,
  title,
  thumbnail,
  artists,
  releaseDate,
  previewInfo,
  handleListRelease,
}) {
  const { song } = useSelector((state) => state.musicPlay);
  const { formattedNames } = useShowName(artists && artists);

  return (
    <div
      className={`flex-1 p-2 group cursor-pointer hover-bg-pink-dark bg-[var(--bg-wrap)] rounded-md transition duration-300
        
        ${song?.idSong == encodeId ? "bg-[var(--color-pink-normal)]" : ""}
        `}
    >
      <div className="flex items-center flex-row ">
        <aa />
        <div className="w-[60px] h-[60px] relative ">
          <img className="rounded-md group-hover:opacity-75" src={thumbnail} />

          <RenderIcon
            encodeId={encodeId}
            handleListRelease={handleListRelease}
          />
        </div>

        <div className="flex flex-col cursor-pointer ml-3  flex-1">
          <div className="flex items-center">
            <span className="text-sm text-white font-bold mr-3 line-clamp-1 hover-pink-normal ">
              {title}
            </span>
            {previewInfo ? <IconPremium /> : ""}
          </div>

          <div className="line-clamp-1">
            {formattedNames?.map((item, index) => (
              <Link
                key={index}
                className="text-xs text-[var(--text-sub)] mt-[3px] hover-pink-normal hover:underline"
              >
                {item}
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

function RenderIcon({ encodeId, handleListRelease }) {
  const { song, isPlay, loadingSong } = useSelector((state) => state.musicPlay);
  const { handlePlause, handlePlay } = useHandleMusic();
  return (
    <div
      className={`${
        song?.idSong == encodeId ? "opacity-100" : "group-hover:opacity-100"
      } group-hover:opacity-100 transition duration-300  opacity-0 absolute top-[50%] left-0 right-0
      bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center`}
    >
      {song?.idSong == encodeId &&
      loadingSong == false &&
      song?.loadingSong == false ? (
        isPlay ? (
          <IconPlaying onClick={handlePlause} />
        ) : (
          <FaPlay onClick={handlePlay} className="text-white text-lg" />
        )
      ) : song?.idSong == encodeId && loadingSong ? (
        <IconLoading />
      ) : (
        <FaPlay onClick={handleListRelease} className="text-white text-lg" />
      )}
    </div>
  );
}

export default memo(CartHorzontal);
