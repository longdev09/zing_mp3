import { Fragment } from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { publicRoutes } from "./routes";
import layout from "./components/templates/Layout";
import AudioPlayer from "./components/atoms/AudioPlayer/AudioPlayer";
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

      <AudioPlayer url={song?.url} />
    </>
  );
}

export default App;
