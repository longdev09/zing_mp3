import { useState } from "react";
import { FaEye, FaEyeSlash } from "../../../assets/icon";
import Button from "../Button";

function InputPassword({ onChange, value }) {
  const [type, setType] = useState(true);
  const handleSetType = () => {
    setType(!type);
  };
  return (
    <div className="relative mt-4 flex flex-col">
      <label className="mb-2 text-sm font-medium text-white">Mật khẩu</label>
      <input
        type={type ? "password" : "text"}
        placeholder={"Mật khẩu của bạn"}
        value={value}
        onChange={onChange}
        className="rounded-md border border-gray-300 px-3 py-2 font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[var(--color-pink-normal)]"
      />
      <Button
        type={"button"}
        onClick={handleSetType}
        label={type ? <FaEyeSlash /> : <FaEye />}
        className={"absolute right-[21px] top-[38px] !text-black"}
      />
    </div>
  );
}
export default InputPassword;
