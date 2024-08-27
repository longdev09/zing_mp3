import { memo } from "react";
import Button from "../../components/Button";
import { LogoFull, LogoMedium } from "../../components/Logo";
import { MenuSideBar1, MenuSideBar2 } from "../../constant";

function SideBar() {
  return (
    <div className="hidden md:block w-[4rem] lg:w-[15rem] bg-[#231b2e] relative top-0 bottom-0 left-0 z-[30] transition-all duration-300">
      <div className="flex flex-col">
        <div></div>
        <div className=" h-[70px] flex items-center justify-center lg:justify-normal">
          {/* Show LogoFull on screens larger than 1024px */}
          <div className="hidden lg:block px-7">
            <LogoFull />
          </div>
          {/* Show LogoMedium on screens smaller than 1024px */}
          <div className="block lg:hidden">
            <LogoMedium />
          </div>
        </div>
        <ul className="flex flex-col text-[#e4e3e5] mb-6 ">
          {MenuSideBar1.map((item, index) => (
            <li
              className="px-5 py-3 group-hover cursor-pointer font-semibold"
              key={index}
            >
              <a className="flex items-center  ">
                <span>{item.icon}</span>
                <span className="ml-3 hover:text-white hidden lg:block  transition duration-300">
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
                <span className="ml-3 hover:text-white  hidden lg:block  ">
                  {item.name}
                </span>
              </a>
            </li>
          ))}
        </ul>

        <div className="mx-5 my-2  hidden lg:block">
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
