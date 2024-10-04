import { memo, useState } from "react";
import { FaLayerGroup, FaPlus } from "../../../assets/icon";
import Button from "../../atoms/Button";

function NavBar() {
  const [show, setShow] = useState(false);
  const handShow = () => {
    setShow(!show);
  };
  return (
    <div
      className={`${show ? "md:w-[4rem] lg:w-80 xl:w-[var(--w-nav-bar)]" : "md:w-[4rem]"} fixed mx-2 h-full w-0 rounded-lg bg-[var(--color-main-page)] transition-all duration-300 md:relative`}
    >
      <div className="hidden md:block">
        {/* header */}
        <div
          className={`${show ? "" : "!justify-center"} flex items-center justify-center px-3 py-4 lg:justify-between`}
        >
          <div
            onClick={handShow}
            className="flex cursor-pointer items-center gap-2 text-[#b3b3b3] transition-all duration-300 hover:text-white"
          >
            <span className="text-2xl">
              <FaLayerGroup />
            </span>
            <span
              className={`${show ? "" : "!hidden"} hidden text-lg font-semibold lg:block`}
            >
              Thư viện
            </span>
          </div>
          <div className={` ${show ? "" : "!hidden"} hidden lg:block`}>
            <Button
              label={<FaPlus />}
              className={"rounded-full px-2 py-1 hover:bg-zinc-700"}
            />
          </div>
        </div>
        <div
          className={`${show ? "" : "!hidden"} hidden items-center justify-between px-3 py-4 lg:flex`}
        >
          <Button
            className={"rounded-xl bg-[#1f1f1f] p-2 !text-sm"}
            label={"Danh sách phát"}
          />
          <Button
            className={"rounded-xl bg-[#1f1f1f] p-2 !text-sm"}
            label={"Thư viện của tôi"}
          />
        </div>

        {/* list danh sach */}
        <div></div>
      </div>
    </div>
  );
}

export default memo(NavBar);
