import { useDispatch, useSelector } from "react-redux";
import { FaPlay, IconPlaying } from "../../../assets/icon";

export default function ItemSong({
  thumbnailM,
  title,
  artists,
  handleSetItemSong,
  idSong,
}) {
  const { song } = useSelector((state) => state.musicPlay);

  return (
    <div className={`flex flex-col group cursor-pointer overflow-hidden `}>
      <div className={`relative `}>
        <img className={`group-hover:opacity-75`} src={thumbnailM} />
        <div
          className={`opacity-0 absolute top-[50%] left-0 right-0 bottom-auto translate-x-(-50%) translate-y-[-50%] group-hover:opacity-100 transition duration-300`}
        >
          <div className="text-white flex flex-row justify-around items-center px-3  ">
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full border cursor-pointer ">
              <FaPlay onClick={handleSetItemSong} className="ml-1 text-5xl" />
            </div>
          </div>
        </div>
        {song.idSong == idSong ? (
          <div className="absolute top-[80%] left-6">
            <IconPlaying className="w-8" />
          </div>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col items-center mt-3 opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
        <div className="text-center mt-1">
          {artists?.map((item, index) => (
            <div key={index} className="text-xs  text-white">
              {item.name + ", "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
