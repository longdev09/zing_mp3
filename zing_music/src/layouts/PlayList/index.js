import { FaEllipsis, FaStopwatch } from "../../assets/icon";
import Button from "../../components/Button";
import Item from "./Item";
import { useSelector } from "react-redux";

export default function PlayList() {
  const { playList } = useSelector((state) => state.musicPlay);

  return (
    <div
      style={{ height: "calc(100vh - 90px)" }}
      className="bg-[var(--bg-main)] w-[22rem] h-[] relative top-0  right-0 z-30 border-l border-[#ffffff1a] "
    >
      <div className="flex flex-col h-full">
        <div className="flex py-4 px-2">
          <div className="flex w-[234px] flex-initial bg-[#2f2739] rounded-full">
            <Button className=" py-2 px-3 text-xs font-bold ">
              Danh sách phát
            </Button>
            <Button className=" py-1 px-2 text-xs font-bold rounded-full">
              Nghe gần đây
            </Button>
          </div>
          <div className="flex ml-2">
            <Button className="bg-[#2f2739] px-3 py-2 rounded-full text-white">
              <FaStopwatch />
            </Button>
            <Button className="bg-[#2f2739] px-3 py-2 rounded-full text-white ml-2">
              <FaEllipsis />
            </Button>
          </div>
        </div>
        {/* play list */}
        <div className="px-2 overflow-auto ">
          {playList?.song?.items.map((item, index) => (
            <Item
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              idSong={item?.encodeId}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
