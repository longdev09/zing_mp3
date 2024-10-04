import { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PlayMusic from "./components/(Player_Music)";
import { publicRoutes } from "./routes";
import layout from "./components/templates/Layout";
function App() {
  const { song } = useSelector((state) => state.musicPlay);
  return (
    <>
      <BrowserRouter>
        <Routes>
          {publicRoutes.map((item, index) => {
            let Layout = item.layout === null ? Fragment : layout;
            const Page = item.component;
            return (
              <Route
                key={index}
                path={item.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </BrowserRouter>

      <PlayMusic url={song?.url} />
    </>
  );
}

export default App;
