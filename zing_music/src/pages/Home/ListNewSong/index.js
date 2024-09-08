import { useState } from "react";
import CartHorzontal from "../../../components/CartHorizontal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApiGetSong,
  setListRelease,
} from "../../../redux/features/music/musicPlaySlice";

export default function ListNewSong({ title, data }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState("all");
  const [dataI, setData] = useState(data.all);

  const handleClick = (item) => {
    setSelected(item);
    setData(data[item]);
  };
  const handleGetListRelease = async (idSong) => {
    dispatch(setListRelease(dataI));
    dispatch(fetchApiGetSong(idSong));
  };

  return (
    <div className="mt-12">
      <h2 className="text-white font-extrabold text-xl px-2">{title}</h2>
      <div className="flex flex-row mt-3 mb-3 cursor-pointer items-center justify-between px-2">
        <div className="flex flex-row cursor-pointer items-center">
          <div
            className={`text-white font-bold text-xs p-3 md:text-sm md:px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "all" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("all")}
          >
            <span>Tất cả</span>
          </div>
          <div
            className={`text-white font-bold text-xs p-3 md:text-sm md:px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "vPop" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("vPop")}
          >
            <span>Việt Nam</span>
          </div>
          <div
            className={`text-white font-bold text-xs p-3 md:text-sm md:px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "others" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("others")}
          >
            <span>Quốc Tế</span>
          </div>
        </div>
        <h2 className="flex items-center text-[var(--text-sub)] uppercase text-xs md:text-sm cursor-pointer hover:text-[var(--text-pink)] font-bold">
          Tất Cả
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-4 ">
        {dataI.slice(0, 12).map((item, index) => (
          <CartHorzontal
            key={index}
            encodeId={item.encodeId}
            title={item.title}
            thumbnail={item.thumbnail}
            artists={item.artists}
            releaseDate={item.releaseDate}
            previewInfo={item.previewInfo}
            handleListRelease={() => handleGetListRelease(item.encodeId)}
          />
        ))}
      </div>
    </div>
  );
}
