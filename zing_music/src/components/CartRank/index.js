import { FaCirclePlay } from "../../assets/icon";
import moment from "moment";
export default function CartRank({
  thumbnail,
  title,
  artistsNames,
  i,
  timestamp,
}) {
  return (
    <div className=" p-3 bg-[#2f2739] rounded-lg">
      <div className="flex">
        <div className="w-[120px] relative ">
          <img className="rounded-md group-hover:opacity-75" src={thumbnail} />
          <div className="group-hover:opacity-100 transition duration-300  opacity-0 absolute top-[50%] left-0 right-0  bottom-auto translate-x-(-50%) translate-y-[-50%] flex justify-center">
            <FaCirclePlay className="text-white text-lg" />
          </div>
        </div>
        <div className="ml-3 flex-1 flex flex-col justify-between">
          <div className="flex flex-col">
            <span className="text-base text-white font-bold hover:text-[var(--text-pink)] ">
              {title}
            </span>
            <span className="text-xs text-[var(--text-sub)] mt-[3px]">
              {artistsNames}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-black text-4xl text-white custom-text-stroke">
              # {i + 1}
            </span>
            <span className="text-[var(--text-sub)]">
              {moment.unix(timestamp).utc().format("DD.MM.YYYY")}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
