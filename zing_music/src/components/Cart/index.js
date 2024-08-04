import { FaCirclePlay, FaEllipsis, FaHeart } from "../../assets/icon";
import { useFetch } from "../../hooks";
import { useDispatch } from "react-redux";
import { fetchApiPlayList } from "../../redux/features/music/musicPlaySlice";
export default function Cart({ thumbnail, nameSong, artists, idList }) {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(fetchApiPlayList(idList));
  };

  return (
    <div className=" px-2 ">
      <div className="w-full overflow-hidden group cursor-pointer rounded-lg">
        <div className=" relative">
          <img
            className="rounded-lg w-full h-full group-hover:scale-110 group-hover:opacity-75 transition duration-500"
            src={thumbnail}
          />
          <div className="absolute top-[50%] left-0 right-0 bottom-auto translate-x-(-50%)  translate-y-[-50%] opacity-0 group-hover:opacity-100 transition duration-300">
            <div className="text-white flex flex-row justify-around items-center px-3">
              <FaHeart className="text-2xl" />
              <FaCirclePlay onClick={handlePlay} className="text-5xl " />
              <FaEllipsis className="text-2xl" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white mt-2 text-[15px] cursor-pointer">
        <h2 className="line-clamp-1  font-bold hover:text-[var(--text-pink)]">
          {nameSong}
        </h2>
        <h3 className="line-clamp-1 text-sm text-[var(--text-sub)] ">
          Quang Hùng MasterD
        </h3>
      </div>
    </div>
  );
}
