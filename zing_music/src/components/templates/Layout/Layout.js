import { createContext, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import { Footer, Header, NavBar, PlayingBar } from "../../organisms/layout";
export const MyContext = createContext();

function Layout({ children }) {
  // get playlist
  const { playList } = useSelector((state) => state.musicPlay);

  //  su dung useContext de  mo notifly
  const [openNotifly, setOpenNotifly] = useState(false);

  const [openPlayList, setOpenPlayList] = useState(true);
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
      <div className="h-[100vh] w-full bg-[var(--color-extra)]">
        {/* header trang web */}
        <Header />
        <div
          className="relative top-[var(--h-header)] flex overflow-hidden"
          style={{
            height: "calc(100vh - calc(var(--h-bottom) + var(--h-header)))",
          }}
        >
          <NavBar />
          <div className="flex h-full w-full flex-1 flex-col overflow-auto">
            {children}
            <Footer />
          </div>

          <PlayingBar />
        </div>

        {/* <MyContext.Provider value={{ handleNotify, openNotifly }}>
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
        </MyContext.Provider> */}
      </div>
    </>
  );
}
export default Layout;
