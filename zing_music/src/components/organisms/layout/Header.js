import { memo, useEffect } from "react";
import { Link } from "react-router-dom";
import { User } from "../../molecules/header";
import routesClient from "../../../config/routes";
import InputSearch from "../../atoms/InputSearch";
import { useSelector } from "react-redux";

function Header() {
  const { isLogin } = useSelector((state) => state.account);

  return (
    <div
      className={`fixed left-0 right-0 top-0 z-50 h-[var(--h-header)] bg-[var(--color-extra)] px-[var(--pd-content)] transition-all duration-300`}
    >
      <div className="flex h-full items-center justify-between">
        <div className="mr-3 flex-1">
          <InputSearch />
        </div>
        <div className="flex flex-none items-center gap-4">
          {isLogin ? (
            <User />
          ) : (
            <>
              <Link
                to={routesClient.signup}
                className="font-bold text-white hover:opacity-80"
              >
                Đăng ký
              </Link>
              <Link
                to={routesClient.login}
                className="hidden flex-none items-center rounded-full bg-[var(--color-pink-normal)] px-5 py-[10px] text-sm font-bold text-white hover:opacity-80 md:flex"
              >
                Đăng nhập
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Header);
