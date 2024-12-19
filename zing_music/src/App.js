import { useQuery } from "@tanstack/react-query";
import { Fragment, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { verifyLogin } from "./apis";
import AudioPlayer from "./components/atoms/AudioPlayer/AudioPlayer";
import Layout from "./components/templates/Layout";
import routesClient from "./config/routes";
import { setLogin, setUser } from "./redux/features/auth/accoutnSlice";
import { privateRoute, publicRoutes } from "./routes";
import { useSelector } from "react-redux";
function App() {
  const dispatch = useDispatch();

  // chờ checkin đăng nhập
  const [loading, setLoading] = useState(true);

  const { data, isLoading } = useQuery({
    queryKey: "verifyLogin",
    queryFn: verifyLogin,
  });

  useEffect(() => {
    if (data) {
      dispatch(setLogin(data.logged));
      dispatch(setUser(data.user));
    }
    setLoading(isLoading); // Cập nhật trạng thái loading dựa trên isLoading từ react-query
  }, [data, isLoading]);

  if (loading) {
    // Hiển thị loading hoặc giữ trang hiện tại trong khi chờ kết quả API
    return <div className="h-[100vh] w-full bg-[var(--color-extra)]"></div>;
  }

  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((item, index) => {
            let LayoutComponent = item.layout === null ? Fragment : Layout;
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <LayoutComponent>
                    <Page />
                  </LayoutComponent>
                }
              />
            );
          })}

          {privateRoute.map((item, index) => {
            let LayoutComponent = item.layout === null ? Fragment : Layout;
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  data?.logged ? (
                    <LayoutComponent>
                      <Page />
                    </LayoutComponent>
                  ) : (
                    <Navigate to={routesClient.login} />
                  )
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>

      <AudioPlayer />
    </>
  );
}

export default App;
