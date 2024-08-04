import { FaDownload, FaGear } from "../../assets/icon";
import user from "../../assets/Bg/user-default.3ff115bb.png";
import InputSearch from "../../components/InputSearch";
export default function Header() {
  return (
    <div className="h-[var(--h-header)] px-[59px] fixed top-0 z-50 left-[15rem] right-0 bg-[var(--bg-main)]">
      <div className="flex items-center justify-between">
        <div className="flex-1 mr-3">
          <InputSearch />
        </div>
        <div className="flex items-center">
          <div className="text-white bg-[#9b4de0] px-5 py-[10px] rounded-full font-bold text-sm mr-3">
            Nâng cấp tài khoản
          </div>
          <div className="text-[var(--text-pink)] bg-[#2f2739] px-5 py-[10px] rounded-full font-bold text-sm flex items-center  mr-3">
            <span className="mr-2">
              <FaDownload />
            </span>
            <span>Tải bản Windows</span>
          </div>

          <div className="bg-[#2f2739] px-4 py-3 rounded-full text-white">
            <FaGear />
          </div>
          <div className="px-4 py-3 rounded-full text-white  w-[80px]">
            <img src={user} className="w-full h-full rounded-full" />
          </div>
        </div>
      </div>
    </div>
  );
}
