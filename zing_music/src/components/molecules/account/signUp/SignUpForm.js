import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { signUp } from "../../../../apis";
import { FaCheck } from "../../../../assets/icon";
import routesClient from "../../../../config/routes";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";
import InputPassword from "../../../atoms/InputPassword";
function SignUpForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState("");
  const [checkError, setCheckError] = useState(false);
  // Kiểm tra các yêu cầu của mật khẩu
  const hasLetter = /[a-zA-Z]/.test(password);
  const hasNumberOrSpecialChar = /[0-9!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasMinLength = password.length >= 10;

  const mutation = useMutation({ mutationFn: signUp });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (hasLetter && hasNumberOrSpecialChar && hasMinLength) {
      mutation.mutate({ email, password });
    } else {
      setCheckError(true);
    }
  };

  if (mutation.isSuccess) {
    toast.success("Đăng ký tài khoản thành công!");
    navigate(routesClient.login);
  } else {
  }

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        type="email"
        onChange={(value) => setEmail(value.target.value)}
        label={"Email của bạn"}
        placeholder={"Email của bạn ..."}
      />
      <div className="mb-3 flex flex-col gap-2">
        <InputPassword onChange={(value) => setPassword(value.target.value)} />
        <p className="text-sm font-semibold text-white">
          Mật khẩu của bạn phải có ít nhất
        </p>
        <ul className="flex flex-col justify-center gap-2">
          <li className="flex items-center gap-2 font-semibold text-white">
            <div
              className={` ${hasLetter ? "bg-cyan-600" : ""} flex h-[14px] w-[14px] items-center justify-center rounded-full border p-1 text-[8px]`}
            >
              {hasLetter ? <FaCheck /> : ""}
            </div>
            <span
              className={`${checkError == true && hasLetter == false ? "text-red-600" : ""} text-sm`}
            >
              1 chữ cái
            </span>
          </li>
          <li className="flex items-center gap-2 font-semibold text-white">
            <div
              className={` ${hasNumberOrSpecialChar ? "bg-cyan-600" : ""} flex h-[14px] w-[14px] items-center justify-center rounded-full border p-1 text-[8px]`}
            >
              {hasNumberOrSpecialChar ? <FaCheck /> : ""}
            </div>
            <span
              className={`${checkError == true && hasNumberOrSpecialChar == false ? "text-red-600" : ""} text-sm`}
            >
              1 chữ số hoặc ký tự đặc biệt (ví dụ: # ? ! &)
            </span>
          </li>
          <li className="flex items-center gap-2 font-semibold text-white">
            <div
              className={` ${hasMinLength ? "bg-cyan-600" : ""} flex h-[14px] w-[14px] items-center justify-center rounded-full border p-1 text-[8px]`}
            >
              {hasMinLength ? <FaCheck /> : ""}
            </div>
            <span
              className={`${checkError == true && hasMinLength == false ? "text-red-600" : ""} text-sm`}
            >
              10 ký tự
            </span>
          </li>
        </ul>
      </div>

      <div className="flex justify-center">
        <Button
          type={"submit"}
          label={"Đăng ký"}
          className={"bg-[var(--color-pink-normal)] px-4 py-2"}
          loading={mutation.isPending}
        />
      </div>
    </form>
  );
}

export default SignUpForm;
