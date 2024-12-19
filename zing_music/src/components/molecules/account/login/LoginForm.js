import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import login from "../../../../apis/login.api";
import {
  setLogin,
  setUser,
} from "../../../../redux/features/auth/accoutnSlice";
import Button from "../../../atoms/Button";
import Input from "../../../atoms/Input";

function LoginForm() {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      dispatch(setLogin(data.logged));
      dispatch(setUser(data.user));
      toast.success("Đăng nhập thành công!");
      navigate("/"); // Điều hướng đến trang chủ
    },
    onError: (error) => {
      // Xử lý khi đăng nhập thất bại
      toast.error("Đăng nhập thất bại. Vui lòng kiểm tra lại thông tin!");
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    mutation.mutate({ email, password });
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
          loading={mutation.isPending}
          type={"submit"}
          label={"Đăng Nhập"}
          className={"bg-[var(--color-pink-normal)] px-4 py-2"}
        />
      </div>
    </form>
  );
}
export default LoginForm;
