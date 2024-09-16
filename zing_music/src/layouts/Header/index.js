import { FaDownload, FaGear, FaList } from "../../assets/icon";
import user from "../../assets/Bg/user-default.3ff115bb.png";
import InputSearch from "../../components/InputSearch";
import { memo } from "react";
function Header({ openPlayList, onOpenSideBar }) {
  return (
    <div
      className={` ${
        openPlayList ? "2xl:right-[22rem]" : "2xl:right-0 "
      }  px-[var(--pd-content)] h-[var(--h-header)] fixed top-0 z-50 md:left-[4rem] lg:left-[var(--h-sider-bar)] left-0 right-0  transition-all duration-300 `}
    >
      <div className="flex items-center justify-between">
        <div
          onClick={onOpenSideBar}
          className="mr-3 md:hidden flex-none cursor-pointer "
        >
          <FaList className="text-xl text-gray-100" />
        </div>
        <div className="flex-1 mr-3 ">
          <InputSearch />
        </div>
        <div className="flex items-center flex-none">
          <div className="hidden md:block text-[var(--color-pink-normal)]  px-5 py-[10px] rounded-full font-bold text-sm mr-3 border  border-[var(--color-pink-normal)]">
            Nâng cấp tài khoản
          </div>
          <div className="hidden md:flex text-white bg-[var(--color-pink-normal)] px-5 py-[10px] rounded-full font-bold text-sm  items-center  mr-3 flex-none">
            <span className="mr-2">
              <FaDownload />
            </span>
            <span>Tải bản Windows</span>
          </div>
          <div className="px-4 py-3 rounded-full text-white  w-[80px]">
            <img src={user} className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Header);
