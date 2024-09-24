import { FaDownload, FaGear, FaList } from "../../assets/icon";
import user from "../../assets/Bg/user-default.3ff115bb.png";
import InputSearch from "../../components/InputSearch";
import { memo } from "react";
function Header({ openPlayList, onOpenSideBar }) {
  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 h-[var(--h-header)] bg-[var(--color-extra)] px-[var(--pd-content)] transition-all duration-300`}
    >
      <div className="flex items-center justify-between">
        <div
          onClick={onOpenSideBar}
          className="mr-3 flex-none cursor-pointer md:hidden"
        >
          <FaList className="text-xl text-gray-100" />
        </div>
        <div className="mr-3 flex-1">
          <InputSearch />
        </div>
        <div className="flex flex-none items-center">
          <div className="mr-3 hidden rounded-full border border-[var(--color-pink-normal)] px-5 py-[10px] text-sm font-bold text-[var(--color-pink-normal)] md:block">
            Nâng cấp tài khoản
          </div>
          <div className="mr-3 hidden flex-none items-center rounded-full bg-[var(--color-pink-normal)] px-5 py-[10px] text-sm font-bold text-white md:flex">
            <span className="mr-2">
              <FaDownload />
            </span>
            <span>Tải bản Windows</span>
          </div>
          <div className="w-[80px] rounded-full px-4 py-3 text-white">
            <img src={user} className="h-full w-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(Header);
