import { FaEllipsis, FaStopwatch } from "../../assets/icon";

import Item from "./Item";
import { useSelector } from "react-redux";

export default function PlayList({ openPlayList }) {
  const { playList } = useSelector((state) => state.musicPlay);
  return (
    <div className="flex h-full flex-col">
      <div className="flex px-2 py-4">
        <div className="flex w-[234px] flex-initial rounded-full bg-[#2f2739]">
          {/* <Button className="px-3 py-2 text-xs font-bold">
            Danh sách phát
          </Button>
          <Button className="rounded-full px-2 py-1 text-xs font-bold">
            Nghe gần đây
          </Button>
        </div>
        <div className="ml-2 flex">
          <Button className="rounded-full bg-[#2f2739] px-3 py-2 text-white">
            <FaStopwatch />
          </Button>
          <Button className="ml-2 rounded-full bg-[#2f2739] px-3 py-2 text-white">
            <FaEllipsis />
          </Button> */}
        </div>
      </div>
      {/* play list */}
      <div className="overflow-auto px-2">
        {playList &&
          playList?.itemSong?.map((item, index) => (
            <Item
              key={index}
              thumbnail={item.thumbnail}
              title={item.title}
              idSong={item?.encodeId}
              artists={item.artists}
              previewInfo={item.previewInfo}
            />
          ))}
      </div>
    </div>
  );
}
