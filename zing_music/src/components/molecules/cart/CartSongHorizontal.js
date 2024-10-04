import moment from "moment";
import { useSelector } from "react-redux";
import { IconPremium } from "../../../assets/icon";
import { useHandleMusic } from "../../../hooks";
import ShowArtists from "../../atoms/ShowArtists";
import SongThumb from "../../atoms/SongThumb";

function CartSongHorizontal({ data, item }) {
  const { song } = useSelector((state) => state.musicPlay);
  const { handleSetPlayList } = useHandleMusic();

  return (
    <div
      className={`hover-bg-pink-dark ${song?.idSong == item.encodeId ? "bg-[var(--color-pink-normal)]" : ""} group flex-1 cursor-pointer rounded-md bg-[var(--bg-wrap)] p-2 transition duration-300`}
    >
      <div className="flex flex-row items-center">
        <div className="relative h-[60px] w-[60px]">
          <SongThumb
            src={item.thumbnail}
            idSong={item.encodeId}
            handle={() => handleSetPlayList("new-release", data, item.encodeId)}
          />
        </div>

        <div className="ml-3 flex flex-1 cursor-pointer flex-col">
          <div className="flex items-center">
            <span className="hover-pink-normal mr-3 line-clamp-1 text-sm font-bold text-white">
              {item.title}
            </span>
            {item.previewInfo ? <IconPremium /> : ""}
          </div>

          <ShowArtists artists={item.artists} />

          <span className="mt-[3px] text-xs text-[var(--text-sub)]">
            {moment.unix(item.releaseDate).utc().format("DD.MM.YYYY")}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CartSongHorizontal;