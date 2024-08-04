import { useState } from "react";
import CartHorzontal from "../../../components/CartHorizontal";

export default function ListNewSong({ title, data }) {
  const [selected, setSelected] = useState("all");
  const [dataI, setData] = useState(data.all);
  const handleClick = (item) => {
    setSelected(item);
    setData(data[item]);
  };
  console.log("dataI", dataI);
  return (
    <div className="mt-12 ">
      <h2 className="text-white font-extrabold text-xl px-2">
        {"Mới Phát Hành"}
      </h2>
      <div className="flex flex-row mt-3 cursor-pointer items-center justify-between px-2">
        <div className="flex flex-row mt-3 cursor-pointer items-center">
          <div
            className={`text-white font-bold text-sm px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "all" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("all")}
          >
            <span>Tất cả</span>
          </div>
          <div
            className={`text-white font-bold text-sm px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "vPop" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("vPop")}
          >
            <span>Việt Nam</span>
          </div>
          <div
            className={`text-white font-bold text-sm px-6 py-1 rounded-full mr-2 border border-[#65439c] ${
              selected === "others" ? "bg-[var(--text-purple)]" : "bg-[#170f23]"
            }`}
            onClick={() => handleClick("others")}
          >
            <span>Quốc Tế</span>
          </div>
        </div>
        <h2 className="text-[var(--text-sub)] uppercase text-sm cursor-pointer hover:text-[var(--text-pink)] font-bold">
          Tất Cả
        </h2>
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {dataI.slice(0, 12).map((item, index) => (
          <CartHorzontal
            key={index}
            title={item.title}
            thumbnail={item.thumbnail}
          />
        ))}
      </div>
    </div>
  );
}
