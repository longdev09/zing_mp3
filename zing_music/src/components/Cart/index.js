import { memo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  FaEllipsis,
  FaHeart,
  FaPlay,
  IconLoading,
  IconPlaying,
} from "../../assets/icon";
import {
  fetchApiPlayList,
  pause,
  play,
} from "../../redux/features/music/musicPlaySlice";

// play list

function Cart({ thumbnail, nameSong, artists, idList }) {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { playList, isPlay } = useSelector((state) => state.musicPlay);

  const handleGetPlayList = () => {
    setIsLoading(true);
    dispatch(fetchApiPlayList({ idList })).finally(() => {
      setIsLoading(false);
    });
  };

  const handlePlause = () => {
    dispatch(pause());
  };

  const handlePlay = () => {
    dispatch(play());
  };

  return (
    <div className=" px-2 ">
      <div className="w-full overflow-hidden group cursor-pointer rounded-lg">
        <div className=" relative">
          <img
            className={`rounded-lg w-full h-full group-hover:scale-110 ${
              playList?.encodeId == idList
                ? "opacity-75"
                : "group-hover:opacity-75"
            }  transition duration-500`}
            src={thumbnail}
          />
          <div
            className={`absolute top-[50%] left-0 right-0 bottom-auto translate-x-(-50%) translate-y-[-50%] ${
              playList?.encodeId == idList ? "opacity-100" : "opacity-0"
            } group-hover:opacity-100 transition duration-300`}
          >
            <div className="text-white flex flex-row justify-around items-center px-3">
              <FaHeart className="text-2xl" />
              <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border">
                {playList?.encodeId == idList && playList?.encodeId != null ? (
                  isPlay ? (
                    <IconPlaying onClick={handlePlause} />
                  ) : (
                    <FaPlay onClick={handlePlay} className="text-[18px] ml-1" />
                  )
                ) : isLoading ? (
                  <IconLoading />
                ) : (
                  <FaPlay
                    onClick={handleGetPlayList}
                    className="text-[18px]  ml-1"
                  />
                )}
              </div>
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
export default memo(Cart);
