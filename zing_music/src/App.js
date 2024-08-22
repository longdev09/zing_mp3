import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import layout from "./layouts";
import { publicRoutes } from "./routes";
import PlayMusic from "./components/(Player_Music)";
import { useSelector } from "react-redux";
function App() {
  const { isPlay, song } = useSelector((state) => state.musicPlay);

  return (
    <div className="bg-[var(--bg-main)]">
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
      <PlayMusic url={song?.url?.["128"]} />
    </div>
  );
}

export default App;
