
import numeral from "numeral";
import React from "react";
import {
  FaCirclePlay,
  FaHeart,
  FaMusic
} from "../../../assets/icon";

function HeaderItem({ data }) {
  return (
    <>
      <div className="flex gap-2 p-4">
        <div className="h-[40px] w-[40px]">
          <img className="h-full w-full rounded-lg" src={data?.thumbnail} />
        </div>
        <div className="text-sm font-medium text-white">
          <span className="line-clamp-1">{data?.title}</span>
          <div className="mt-1 flex items-center gap-2 text-xs">
            <span className="flex items-center gap-1">
              <FaHeart />
              {numeral(data?.like).format("0.0a")}
            </span>
            <span className="flex items-center gap-1">
              <FaCirclePlay />
              {numeral(data?.listen).format("0.0a")}
            </span>
          </div>
        </div>
      </div>
      <div className="p-2">
        <div className="flex flex-col items-center rounded-lg bg-[#ffffff1a] p-1 text-sm text-white opacity-80 duration-300 hover:opacity-100">
          <span className="mb-1">
            <FaMusic />
          </span>
          <span>Lời bài hát </span>
        </div>
      </div>
    </>
  );
}
export default HeaderItem;
