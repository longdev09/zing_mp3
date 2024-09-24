import PropTypes from "prop-types";

import { Link } from "react-router-dom";
function ItemSong({ idx, thumbnail, title, artists, releaseDate, songTime }) {
  return (
    <div className="hover-bg-pink-dark group my-3 flex cursor-pointer flex-row items-center gap-4 rounded-lg px-4 py-1 duration-300">
      <div className="flex-none text-base font-bold text-white">
        <span>{idx}</span>
      </div>
      <div
        className="flex flex-none items-center gap-2"
        style={{ width: "calc(70% - 100px)" }}
      >
        <div className="h-[40px] w-[40px]">
          <img src={thumbnail} />
        </div>

        <div className="flex flex-col">
          <Link className="hover-pink-normal mb-1 text-base font-bold text-white">
            <span>{title}</span>
          </Link>
          <div className="flex flex-row">
            <Link className="hover-pink-normal text-sm text-[var(--text-sub)] hover:underline">
              <span>{artists}</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex-auto text-base text-[var(--text-sub)] group-hover:text-white">
        <span>{releaseDate}</span>
      </div>
      <div className="flex-none text-base text-[var(--text-sub)] group-hover:text-white">
        <span>{songTime}</span>
      </div>
    </div>
  );
}

ItemSong.prototype = {
  idx: PropTypes.bool,
  thumbnail: PropTypes.string,
  title: PropTypes.string,
  artists: PropTypes.array,
  releaseDate: PropTypes.number,
  songTime: PropTypes.number,
};

export default ItemSong;
