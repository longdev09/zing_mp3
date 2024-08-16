import { useState } from "react";
import NotifyPlayer from "../components/NotifyPlayer";
import Bottom from "./Bottom";
import Header from "./Header";
import PlayList from "./PlayList";
import SideBar from "./Sidebar";

export default function Layout({ children }) {
  const [open, setOpen] = useState(false);
  const handleNotify = () => {
    setOpen(!open);
  };
  return (
    <div className="overflow-hidden">
      <Header />
      <div className="flex relative overflow-hidden ">
        <SideBar />

        <div
          className="pt-20 pb-20 px-[59px] flex-1 overflow-auto w-full "
          style={{ height: "calc(100vh - 1rem)" }}
        >
          {children}
        </div>

        <PlayList />
      </div>
      <Bottom handleNotify={handleNotify} />
      <NotifyPlayer open={open} />
    </div>
  );
}
