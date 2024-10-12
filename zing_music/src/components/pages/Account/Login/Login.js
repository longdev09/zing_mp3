import Logo from "../../../atoms/Logo";
import { LoginForm, LoginQuickly } from "../../../molecules/login";

function Login() {
  return (
    <div className="relative h-[100vh] w-full bg-[var(--color-main-page)]">
      <div className="gradient-base-detail-top absolute h-[100vh] w-full bg-[var(--color-pink-dark)]"></div>
      <div className="relative flex h-full w-full items-center justify-center">
        <div className="gradient-base-detail w-[600px] rounded-xl bg-[var(--color-pink-normal)]">
          <div className="h-full w-full px-3 py-4">
            <div className="flex flex-col gap-10">
              {/* header */}
              <div className="flex flex-col items-center justify-center">
                <Logo />
                <h2 className="text-3xl font-bold text-white">
                  Đăng nhập vào Melodies
                </h2>
              </div>
              {/* LoginForm */}
              <div className="mx-auto w-[300px]">
                <LoginQuickly />
              </div>
              <div className="mx-auto w-[300px]">
                <LoginForm />
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
export default Login;
