import Logo from "../../../atoms/Logo";
import { LoginQuickly } from "../../../molecules/account/login";
import { SignUpForm } from "../../../molecules/account/signUp";
import { Toaster } from "react-hot-toast";
function SignUp() {
  return (
    <div className="relative h-[100vh] w-full bg-[var(--color-main-page)]">
      <Toaster />
      <div className="gradient-base-detail-top absolute h-[100vh] w-full bg-[var(--color-pink-dark)]"></div>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="gradient-base-detail w-[600px] rounded-xl bg-[var(--color-pink-normal)]">
          <div className="h-full w-full px-3 py-4">
            <div className="flex flex-col gap-6">
              {/* header */}
              <div className="flex flex-col items-center justify-center">
                <Logo />
                <h2 className="text-3xl font-bold text-white">
                  Đăng ký để bắt đầu nghe
                </h2>
              </div>
              <div className="mx-auto w-[300px]">
                <SignUpForm />
              </div>
              <div className="mx-auto w-[300px]">
                <LoginQuickly />
              </div>

              {/* link tao tai khoan */}
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SignUp;
