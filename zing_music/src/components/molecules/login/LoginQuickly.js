import { LogoGg } from "../../../assets/icon";
import Button from "../../atoms/Button";

function LoginQuickly() {
  return (
    <div className="flex w-full flex-col gap-4">
      <div className="flex items-center justify-center gap-3 rounded-3xl border border-[#818181] px-4 py-3 hover:border-[#fff]">
        <div className="flex w-[30px] justify-end">
          <LogoGg />
        </div>
        <div className="m-auto">
          <Button label={"Tiếp tục bằng Google"} />
        </div>
      </div>
      <div className="flex items-center justify-center gap-3 rounded-3xl border border-[#818181] px-4 py-3 hover:border-[#fff]">
        <div className="flex w-[30px] justify-end">
          <LogoGg />
        </div>
        <div className="m-auto">
          <Button label={"Tiếp tục bằng FaceBook"} />
        </div>
      </div>
    </div>
  );
}
export default LoginQuickly;
