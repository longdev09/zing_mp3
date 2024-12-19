import { createContext, useCallback, useState } from "react";
import { useSelector } from "react-redux";

import {
  Footer,
  Header,
  NavBar,
  PlayingBar,
  Controls,
  NowPlaying,
} from "../../organisms/layout";
export const MyContext = createContext();

function Layout({ children }) {
  return (
    <>
      <div className="h-[100vh] w-full bg-[var(--color-extra)]">
        <Header />
        <div
          className="relative top-[var(--h-header)] flex h-full overflow-hidden"
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
        <div className="fixed bottom-0 z-[70] flex w-full items-center bg-slate-50">
          <Controls />
          <NowPlaying />
        </div>
      </div>
    </>
  );
}
export default Layout;
