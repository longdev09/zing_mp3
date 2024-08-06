import { useSelector, useDispatch } from "react-redux";
import { FaCirclePlay, FaEllipsis, FaHeart } from "../../../assets/icon";
import { fetchApiGetSong } from "../../../redux/features/music/musicPlaySlice";

export default function Item({ thumbnail, title, idSong }) {
  const song = useSelector((state) => state.musicPlay.song);
  const dispatch = useDispatch();
  const handle = () => {
    if (idSong == song.idSong) {
    } else {
      dispatch(fetchApiGetSong(idSong));
    }
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
          <div className="group-hover:opacity-100 transition duration-300  opacity-0 absolute top-[50%] left-0 right-0  bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center">
            <FaCirclePlay className="text-white text-lg" />
          </div>
        </div>

        <div className="flex flex-col justify-center cursor-pointer ml-3  flex-1">
          <span className="text-sm text-white font-bold hover:text-[var(--text-pink)] line-clamp-1 ">
            {title}
          </span>
          <span className="text-xs text-[var(--text-sub)] mt-[3px]">
            JEON SOMI
          </span>
        </div>
        <div className="hidden group-hover:block">
          <FaHeart className="text-white text-base px-7" />
          <FaEllipsis className="text-white text-base " />
        </div>
      </div>
    </div>
  );
}
