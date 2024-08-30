import { useCallback, useState } from "react";
import NotifyPlayer from "../components/NotifyPlayer";
import Bottom from "./Bottom";
import Header from "./Header";
import PlayList from "./PlayList";
import SideBar from "./Sidebar";
import BottomMobile from "./Bottom_Mobile";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);

  const [openPlayList, setOpenPlayList] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);

  const handleNotify = () => {
    setOpen(!open);
  };

  const handlePlayList = useCallback(() => {
    setOpenPlayList(!openPlayList);
  }, [openPlayList]);

  const handleOpenSideBar = useCallback(() => {
    setOpenSideBar(!openSideBar);
  }, [openSideBar]);

  return (
    <div className="overflow-hidden">
      <Header openPlayList={openPlayList} onOpenSideBar={handleOpenSideBar} />
      <div className="flex relative overflow-hidden ">
        <SideBar openSideBar={openSideBar} onCloseSideBar={handleOpenSideBar} />
        <div
          className="pt-20 pb-20 px-4 md:px-[59px] flex-1 overflow-auto w-full "
          style={{ height: "calc(100vh - 1rem)" }}
        >
          {children}
        </div>

        <PlayList openPlayList={openPlayList} />
      </div>

      {/* play song */}
      <div className="fixed bottom-0 z-[99] w-full">
        <NotifyPlayer open={open} />
        {/* control */}
        <div>
          <div className="hidden md:block">
            <Bottom
              handleNotify={handleNotify}
              onPlaylist={handlePlayList}
              openNoti={open}
            />
          </div>
          <div className="block md:hidden">
            <BottomMobile />
          </div>
        </div>
      </div>
    </div>
  );
}
