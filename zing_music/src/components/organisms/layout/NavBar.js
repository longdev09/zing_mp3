import { useQuery } from "@tanstack/react-query";
import { memo, useState } from "react";
import apiPlaylist from "../../../apis/api.Playlist";
import { FaLayerGroup, FaPlus } from "../../../assets/icon";
import Button from "../../atoms/Button";
import { LoadingNavBar } from "../../atoms/Loading";
import ItemSongNavBar from "../../molecules/navBar";

function NavBar() {
  // đóng mở nav bar
  const [show, setShow] = useState(false);
  const handShow = () => {
    setShow(!show);
  };

  // lấy danh sách playlist

  // lấy thông tin playList công khai
  const { data: dataPlayList, isLoading } = useQuery({
    queryKey: ["playList"],
    queryFn: apiPlaylist.getPlayListUser,
  });

  return (
    <div
      className={`${show ? "px-3 md:w-[var(--w-nav-bar)]" : "md:w-[4rem]"} fixed mx-2 h-full w-0 rounded-lg bg-[var(--color-main-page)] md:relative`}
    >
      <div className="hidden md:block">
        {/* header */}
        <div
          className={`${show ? "" : "!justify-center"} relative flex items-center justify-center px-3 py-4 md:justify-between`}
        >
          <div
            onClick={handShow}
            className="flex cursor-pointer items-center gap-2 text-[#b3b3b3] transition-all hover:text-white"
          >
            <span className="text-2xl">
              <FaLayerGroup />
            </span>
            <span
              className={`${show ? "" : "!hidden"} hidden text-lg font-semibold md:block`}
            >
              Thư viện
            </span>
          </div>
          <div className={` ${show ? "" : "!hidden"} hidden md:block`}>
            <Button
              label={<FaPlus />}
              className={"rounded-full px-2 py-1 hover:bg-zinc-700"}
            />
          </div>
        </div>
        <div
          className={`${show ? "" : "!hidden"} hidden items-center justify-between px-3 py-4 md:flex`}
        >
          <Button
            className={"rounded-xl bg-[#1f1f1f] p-2 !text-sm"}
            label={"Danh sách phát"}
          />
          <Button
            className={"rounded-xl bg-[#1f1f1f] p-2 !text-sm"}
            label={"Thư viện của tôi"}
          />
        </div>

        {/* danh sách các play list */}

        {isLoading || dataPlayList == null ? (
          <LoadingNavBar show={show} />
        ) : (
          <div
            className="overflow-auto"
            style={{
              height: `calc(100vh - (calc(var(--h-bottom) + 132px + 63px ))`,
            }}
          >
            <div className="flex flex-col justify-center">
              {dataPlayList &&
                dataPlayList.map((item, index) => (
                  <ItemSongNavBar key={index} item={item} show={show} />
                ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default memo(NavBar);
