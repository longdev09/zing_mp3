import { Link } from "react-router-dom";
import users from "../../../assets/Bg/user-default.3ff115bb.png";
import { FaArrowUpRightFromSquare } from "../../../assets/icon";
import routesClient from "../../../config/routes";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useQuery } from "@tanstack/react-query";

function User() {
  const { user } = useSelector((state) => state.account);
  const {data} = useQuery({queryKey: "user", })

  
  const [show, setShow] = useState(false);
  return (
    <div className="relative w-[40px] rounded-full text-white">
      <img
        onClick={() => setShow(!show)}
        src={users}
        className="h-full w-full cursor-pointer rounded-full"
      />
      <div
        className={`${show ? "block" : "hidden"} absolute right-[3px] top-12 z-50 w-[228px] rounded-md bg-[#282828] p-2`}
      >
        <ul className="flex flex-col text-sm font-semibold">
          <li className="w-full p-3 hover:bg-[#ffffff1a]">
            <Link
              to={routesClient.library}
              className="flex items-center justify-between"
            >
              <span>Tài khoản</span>
              <FaArrowUpRightFromSquare />
            </Link>
          </li>
          <li className="w-full p-3 hover:bg-[#ffffff1a]">
            <Link className="flex items-center justify-between">
              <span>Hồ sơ</span>
            </Link>
          </li>
          <li className="w-full p-3 hover:bg-[#ffffff1a]">
            <Link className="flex items-center justify-between">
              <span className="fo">Nâng cấp tài khoản</span>
              <FaArrowUpRightFromSquare />
            </Link>
          </li>
          <li className="w-full border-b border-[#3e3e3e] p-3 hover:bg-[#ffffff1a]">
            <Link>
              <span className="fo">Cài đặt</span>
            </Link>
          </li>
          <li className="w-full p-3 hover:bg-[#ffffff1a]">
            <Link>
              <span className="fo">Đăng xuất</span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default User;
