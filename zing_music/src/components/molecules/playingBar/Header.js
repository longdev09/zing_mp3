import { memo } from "react";
import { FaStopwatch } from "../../../assets/icon";
import Button from "../../atoms/Button";
function Header() {
  return (
    <div className="relative px-2 py-4">
      <div className="flex items-center justify-between px-4">
        <div className="font-semibold text-white">
          <span>Danh sách chờ</span>
        </div>
        <div className="text-2xl">
          <Button label={<FaStopwatch />} />
        </div>
      </div>
    </div>
  );
}
export default memo(Header);
