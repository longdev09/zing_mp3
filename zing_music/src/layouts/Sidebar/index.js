import { Link } from "react-router-dom";
import Logo from "../../components/Logo";
import { MenuSideBar1, MenuSideBar2 } from "../../constant";
import Button from "../../components/Button";
import { memo } from "react";

function SideBar() {
  return (
    <div className="w-[15rem] bg-[#231b2e] relative top-0 left-0 z-30 ">
      <div className="flex flex-col">
        <div className="px-7 h-[70px] flex items-center">
          <Logo />
        </div>
        <ul className="flex flex-col text-[#e4e3e5] mb-6 ">
          {MenuSideBar1.map((item, index) => (
            <li
              className="px-5 py-3 group-hover cursor-pointer font-semibold"
              key={index}
            >
              <a className="flex items-center  ">
                <span>{item.icon}</span>
                <span className="ml-3 hover:text-white   transition duration-300">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>
        <div class="relative">
          <div class="absolute inset-x-6 top-0 border-t border[#ffffff1a]"></div>
        </div>
        <ul className="flex flex-col text-[#e4e3e5] mt-6 ">
          {MenuSideBar2.map((item, index) => (
            <li
              className="px-5 py-3 group-hover cursor-pointer font-semibold"
              key={index}
            >
              <a className="flex items-center  ">
                <span>{item.icon}</span>
                <span className="ml-3 hover:text-white   transition duration-300">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-5 my-2">
          <div className="bg-[var(--text-purple)] p-3 rounded-lg text-center text-xs text-white font-bold leading-5 flex items-center flex-col">
            <span className="">
              Đăng nhập để khám phá playlist dành riêng cho bạn
            </span>
            <Button className="mt-2 uppercase border px-6 py-2 rounded-full">
              Đăng nhập
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(SideBar);
