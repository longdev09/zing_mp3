import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { list } from "../../../apis";
import {
  FaEllipsis,
  FaHeart,
  FaPlay,
  IconLoading,
  IconPlaying,
} from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
import { Link } from "react-router-dom";
import routesClient from "../../../config/routes";

// play list

function CartSong({ item }) {
  const { handleSetPlayList, handlePlay, handlePlause } = useHandleMusic();
  const { playList, loadingSong, isPlay } = useSelector(
    (state) => state.musicPlay,
  );

  const { data, error, isLoading } = useQuery({
    queryKey: ["list", item?.encodeId],
    queryFn: list,
  });
  console.log(data);

  return (
    <div className="px-2">
      <div className="group w-full cursor-pointer overflow-hidden rounded-lg">
        <Link to={routesClient.albums.replace(":idAlbum", item.encodeId)}>
          <div className="relative">
            <img
              className={`h-full w-full rounded-lg group-hover:scale-110 ${
                playList?.idList == item.encodeId
                  ? "opacity-75"
                  : "group-hover:opacity-75"
              } transition duration-500`}
              src={item.thumbnail}
            />
            <div
              className={`translate-x-(-50%) absolute bottom-auto left-0 right-0 top-[50%] translate-y-[-50%] ${
                playList?.idList == item.encodeId ? "opacity-100" : "opacity-0"
              } transition duration-300 group-hover:opacity-100`}
            >
              <div className="flex flex-row items-center justify-around px-3 text-white">
                <FaHeart className="text-2xl" />
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full border">
                  {playList?.idList == item.encodeId ? (
                    loadingSong ? (
                      <IconLoading />
                    ) : isPlay ? (
                      <IconPlaying onClick={handlePlause} />
                    ) : (
                      <FaPlay
                        onClick={handlePlay}
                        className="text-lg text-white"
                      />
                    )
                  ) : (
                    <FaPlay
                      onClick={() =>
                        handleSetPlayList(
                          item.encodeId,
                          data?.song?.items,
                          data?.song?.items[0].encodeId,
                        )
                      }
                      className="text-lg text-white"
                    />
                  )}
                </div>
                <FaEllipsis className="text-2xl" />
              </div>
            </div>
          </div>
        </Link>
      </div>
      {/* <div className="mt-2 cursor-pointer text-[15px] text-white">
        <h2 className="line-clamp-1 font-bold hover:text-[var(--text-pink)]">
          {nameSong}
        </h2>
        <h3 className="line-clamp-1 text-sm text-[var(--text-sub)]">
          Quang Hùng MasterD
        </h3>
      </div> */}
    </div>
  );
}

export default CartSong;
