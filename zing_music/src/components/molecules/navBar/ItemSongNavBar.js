import SongThumb from "../../atoms/SongThumb";

function ItemSongNavBar({ item, show }) {
  console.log(show);
  return (
    <div
      className={`hover-bg-pink-dark ${
        "22222" === item.encodeId ? "bg-[var(--color-pink-normal)]" : ""
      } group flex-1 cursor-pointer rounded-md p-2 transition duration-300`}
    >
      <div className="flex flex-row items-center">
        <div className="relative h-[50px] w-[50px]">
          <figure>
            <img className="rounded-lg" src={item.urlImg} />
          </figure>
        </div>
        <div
          className={` ${show ? "flex" : "hidden"} ml-3 flex flex-1 cursor-pointer flex-col`}
        >
          <div className="flex items-center">
            <span className="hover-pink-normal mr-3 line-clamp-1 text-sm font-bold text-white">
              {item.title}
            </span>
          </div>

          <span className="mt-[3px] text-xs text-[var(--text-sub)]">
            Bach long
          </span>
        </div>
      </div>
    </div>
  );
}

export default ItemSongNavBar;
