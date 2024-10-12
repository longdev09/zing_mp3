import { useState } from "react";
import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import { useMutation } from "@tanstack/react-query";
import { login } from "../../../apis";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const mutation = useMutation({ mutationFn: login });

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <Input
        type="email"
        onChange={(value) => setEmail(value.target.value)}
        label={"Email hoặc tên người dùng"}
      />
      <Input
        onChange={(value) => setPassword(value.target.value)}
        label={"Mật khẩu"}
        type="password"
      />
      <div className="flex justify-center">
        <Button
          type={"submit"}
          label={"Đăng Nhập"}
          className={"bg-[var(--color-pink-normal)] px-4 py-2"}
        />
      </div>
    </form>
  );
}
export default LoginForm;
