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
import ShowArtists from "../../atoms/ShowArtists";

// play list

function CartSong({ item }) {
  const { handleSetPlayList, handlePlay, handlePlause } = useHandleMusic();

  // lấy playlist
  const { playList, loadingSong, isPlay } = useSelector(
    (state) => state.musicPlay,
  );
  //  lay danh sach bai hat
  const { data, error, isLoading } = useQuery({
    queryKey: ["list", item?.encodeId],
    queryFn: list,
  });

  if (error) {
    console.log("Lỗi Server");
  }

  //  cart song
  return (
    <div className="px-2">
      <div className="group w-full cursor-pointer overflow-hidden rounded-lg">
        <div className="relative">
          <Link to={routesClient.albums.replace(":idAlbum", item.encodeId)}>
            <img
              className={`h-full w-full rounded-lg group-hover:scale-110 ${
                playList?.idList == item.encodeId
                  ? "opacity-75"
                  : "group-hover:opacity-75"
              } transition duration-500`}
              src={item.thumbnail}
            />
          </Link>

          <div
            className={`translate-x-(-50%) absolute bottom-auto left-0 right-0 top-[50%] translate-y-[-50%] ${
              playList?.idList == item.encodeId ? "opacity-100" : "opacity-0"
            } transition duration-300 group-hover:opacity-100`}
          >
            <div className="flex flex-row items-center justify-around px-3 text-white">
              <div className="shadow-custom-img flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[var(--color-blue-normal)]">
                {playList?.idList == item.encodeId ? (
                  loadingSong ? (
                    <IconLoading />
                  ) : isPlay ? (
                    <IconPlaying onClick={handlePlause} />
                  ) : (
                    <FaPlay
                      onClick={handlePlay}
                      className="text-xl text-white"
                    />
                  )
                ) : (
                  <FaPlay
                    onClick={() =>
                      handleSetPlayList(
                        item.encodeId, // nhan vao danh bai hat
                        data?.song?.items, // nhan vao bai hat dau tien
                        data?.song?.items[0].encodeId,
                      )
                    }
                    className="text-xl text-white"
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-2 cursor-pointer text-[15px] text-white">
        <h2 className="line-clamp-1 font-bold hover:text-[var(--text-pink)]">
          {item.title}
        </h2>
        <ShowArtists artists={item.artists} />
      </div>
    </div>
  );
}

export default CartSong;
