import { useDispatch, useSelector } from "react-redux";
import { FaPlay, IconPlaying } from "../../../assets/icon";

export default function ItemSong({
  thumbnailM,
  title,
  artists,
  handleSetItemSong,
  idSong,
}) {
  // Lấy state của bài hát hiện tại từ Redux store
  const { song } = useSelector((state) => state.musicPlay);

  return (
    <div className={`flex flex-col group cursor-pointer`}>
      {/* Vùng hiển thị hình ảnh bài hát */}
      <div
        className={`relative w-full ${
          song.idSong === idSong ? "ring-4 ring-white" : ""
        }`}
      >
        <img
          className={`group-hover:opacity-75`}
          src={thumbnailM}
          alt={title}
        />
        <div
          className={`opacity-0 absolute top-[50%] left-0 right-0 bottom-auto translate-x-(-50%) translate-y-[-50%] group-hover:opacity-100 transition duration-300`}
        >
          {/* Nút Play hiển thị khi hover */}
          <div className="text-white flex flex-row justify-around items-center px-3">
            <div className="w-[80px] h-[80px] flex items-center justify-center rounded-full border cursor-pointer">
              <FaPlay onClick={handleSetItemSong} className="ml-1 text-5xl" />
            </div>
          </div>
        </div>
        {/* Biểu tượng Playing nếu bài hát đang phát */}
        {song.idSong === idSong ? (
          <div className="absolute top-[80%] left-6">
            <IconPlaying className="w-8" />
          </div>
        ) : null}
      </div>
      {/* Vùng hiển thị thông tin bài hát */}
      <div className="flex flex-col items-center mt-3 opacity-0 group-hover:opacity-100">
        <h3 className="text-white text-2xl font-bold text-center">{title}</h3>
        <div className="text-center mt-1">
          {artists?.map((item, index) => (
            <div key={index} className="text-xs text-white">
              {item.name + ", "}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
