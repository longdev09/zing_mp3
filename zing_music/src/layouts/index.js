import { createContext, useCallback, useContext, useState } from "react";
import NotifyPlayer from "../components/NotifyPlayer";
import Bottom from "./Bottom";
import Header from "./Header";
import PlayList from "./PlayList";
import SideBar from "./Sidebar";
import BottomMobile from "./Bottom_Mobile";
import { useSelector } from "react-redux";
export const MyContext = createContext();
export default function Layout({ children }) {
  // get playlist
  const { playList } = useSelector((state) => state.musicPlay);

  //  su dung useContext de  mo notifly
  const [openNotifly, setOpenNotifly] = useState(false);

  const [openPlayList, setOpenPlayList] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  // mo notify
  const handleNotify = () => {
    setOpenNotifly(!openNotifly);
  };

  const handlePlayList = useCallback(() => {
    setOpenPlayList(!openPlayList);
  }, [openPlayList]);

  const handleOpenSideBar = useCallback(() => {
    setOpenSideBar(!openSideBar);
  }, [openSideBar]);

  return (
    <>
      <Header openPlayList={openPlayList} onOpenSideBar={handleOpenSideBar} />
      <div className="flex relative overflow-hidden h-full ">
        <SideBar openSideBar={openSideBar} onCloseSideBar={handleOpenSideBar} />
        <div
          className="pt-[var(--h-header)] pb-20 px-[var(--pd-content)] flex-1 overflow-auto w-full "
          style={{ height: "calc(100vh - 1rem)" }}
        >
          {children}
        </div>

        <PlayList openPlayList={openPlayList} />
      </div>

      {/* play song */}
      <MyContext.Provider value={{ handleNotify, openNotifly }}>
        <div className="fixed bottom-0 z-[99] w-full">
          <NotifyPlayer />

          <div
            className={`relative  transition-all duration-700 z-[99] ${
              playList != null ? "translate-y-0" : "translate-y-[100px]  "
            } `}
          >
            <div className="hidden lg:block">
              <Bottom onPlaylist={handlePlayList} />
            </div>
            <div className="block lg:hidden">
              <BottomMobile onPlaylist={handlePlayList} />
            </div>
          </div>
        </div>
      </MyContext.Provider>
    </>
  );
}
