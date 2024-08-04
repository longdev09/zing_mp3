import { FaCirclePlay, FaEllipsis } from "../../assets/icon";

export default function CartHorzontal({ title, thumbnail }) {
  return (
    <div className="p-2 group cursor-pointer hover:bg-[#feffff1a] rounded-md transition duration-300">
      <div className="flex items-center flex-row ">
        <div className="w-[60px] h-[60px] relative ">
          <img className="rounded-md group-hover:opacity-75" src={thumbnail} />
          <div className="group-hover:opacity-100 transition duration-300  opacity-0 absolute top-[50%] left-0 right-0  bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center">
            <FaCirclePlay className="text-white text-lg" />
          </div>
        </div>

        <div className="flex flex-col cursor-pointer ml-3  flex-1">
          <span className="text-sm text-white font-bold hover:text-[var(--text-pink)] ">
            {title}
          </span>
          <span className="text-xs text-[var(--text-sub)] mt-[3px]">
            JEON SOMI
          </span>
          <span className="text-xs text-[var(--text-sub)] mt-[3px]">
            Hôm nay
          </span>
        </div>
        <div className="hidden group-hover:block">
          <FaEllipsis className="text-white text-lg" />
        </div>
      </div>
    </div>
  );
}
