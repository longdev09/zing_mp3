import { memo, useState } from "react";
import CartHorzontal from "../../../components/CartHorizontal";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchApiGetSong,
  setListRelease,
} from "../../../redux/features/music/musicPlaySlice";
import TextHeading from "../../../components/TextHeading";
import { Link } from "react-router-dom";
import routesClient from "../../../config/routes";

function ListNewSong({ title, data }) {
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
    <div className="mt-12 ">
      <TextHeading text={title} />
      <div className="flex flex-row my-4  cursor-pointer items-center justify-between ">
        <div className="flex flex-row cursor-pointer items-center">
          <BtnNav
            text={"Tất cả"}
            textName={"all"}
            selected={selected}
            handleClick={handleClick}
          />

          <BtnNav
            text={"Việt Nam"}
            textName={"vPop"}
            selected={selected}
            handleClick={handleClick}
          />
          <BtnNav
            text={"Quốc tế"}
            textName={"others"}
            selected={selected}
            handleClick={handleClick}
          />
        </div>
        <Link to={routesClient.newSong}>
          <h2 className="flex items-center text-white uppercase text-xs md:text-sm cursor-pointer hover:text-[var(--color-blue-normal)] font-bold">
            Tất Cả
          </h2>
        </Link>
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

function BtnNav({ text, textName, selected, handleClick }) {
  return (
    <div
      className={`text-white font-bold text-xs p-3 md:text-sm md:px-6 py-1 rounded-full mr-2 border border-[var(--color-pink-normal-active)] ${
        selected === `${textName}`
          ? "bg-[var(--color-pink-normal)]"
          : "bg-[var(--color-pink-darker)]"
      }`}
      onClick={() => handleClick(textName)}
    >
      <span>{text}</span>
    </div>
  );
}

export default memo(ListNewSong);
