import { createContext, useCallback, useContext, useState } from "react";
import NotifyPlayer from "../components/NotifyPlayer";
import Bottom from "./Bottom";
import Header from "./Header";
import PlayList from "./PlayList";
import SideBar from "./Sidebar";
import BottomMobile from "./Bottom_Mobile";
import { useSelector } from "react-redux";
import Footer from "./Footer";
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
      <div className="h-[100vh] w-full overflow-hidden bg-[var(--color-extra)]">
        <Header openPlayList={openPlayList} onOpenSideBar={handleOpenSideBar} />
        <div
          className="relative top-[var(--h-header)] flex overflow-hidden"
          style={{
            height: "calc(100% - calc(var(--h-bottom) + var(--h-header)))",
          }}
        >
          {/* side bar */}
          <div className="fixed mx-2 h-full w-0 overflow-hidden rounded-lg bg-[var(--color-main-page)] transition-all duration-300 md:relative md:w-[4rem] lg:w-[var(--h-sider-bar)]">
            <SideBar
              openSideBar={openSideBar}
              onCloseSideBar={handleOpenSideBar}
            />
          </div>
          <div className="flex h-full w-full flex-1 flex-col overflow-auto">
            {children}
            <Footer />
          </div>

          <div
            className={`fixed right-0 z-50 h-full w-0 rounded-lg bg-[var(--color-main-page)] transition-all duration-300 2xl:relative ${
              openPlayList ? "w-[22rem]" : "w-0"
            }`}
          >
            <PlayList />
          </div>
          {/* play list */}
        </div>

        <MyContext.Provider value={{ handleNotify, openNotifly }}>
          <div className="fixed bottom-0 z-[99] w-full">
            <NotifyPlayer />
            <div className={`relative z-[99] transition-all duration-700`}>
              <div className="hidden lg:block">
                <Bottom onPlaylist={handlePlayList} />
              </div>
              <div className="block lg:hidden">
                <BottomMobile onPlaylist={handlePlayList} />
              </div>
            </div>
          </div>
        </MyContext.Provider>
      </div>
    </>
  );
}
