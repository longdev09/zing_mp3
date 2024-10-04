import { memo, useState } from "react";
import { Link } from "react-router-dom";
import TextHeading from "../../../components/TextHeading";
import routesClient from "../../../config/routes";
import { CartSongHorizontal } from "../../molecules/cart";

function ListNewSong({ title, data }) {
  const [selected, setSelected] = useState("all");
  const [dataI, setData] = useState(data.all);

  const handleClick = (item) => {
    setSelected(item);
    setData(data[item]);
  };

  return (
    <div className="mt-12">
      <TextHeading text={title} />
      <div className="my-4 flex cursor-pointer flex-row items-center justify-between">
        <div className="flex cursor-pointer flex-row items-center">
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
        <Link to={routesClient.newRelease}>
          <h2 className="flex cursor-pointer items-center text-xs font-bold uppercase text-white hover:text-[var(--color-blue-normal)] md:text-sm">
            Tất Cả
          </h2>
        </Link>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {dataI.slice(0, 12).map((item, index) => (
          <CartSongHorizontal data={dataI} item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

function BtnNav({ text, textName, selected, handleClick }) {
  return (
    <div
      className={`mr-2 rounded-full border border-[var(--color-pink-normal-active)] p-3 py-1 text-xs font-bold text-white md:px-6 md:text-sm ${
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
