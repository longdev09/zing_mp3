import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Header, Lyric } from "../../molecules/nowPlaying";
import { Action, DurationBar } from "../../molecules/controls";
function NowPlaying() {
  const { openNowPlay } = useSelector((state) => state.actionMusic);
  const { song } = useSelector((state) => state.musicPlay);

  const [dominantColor, setDominantColor] = useState([0, 0, 0]); // Màu mặc định là đen
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;

    if (imgElement) {
      const colorThief = new ColorThief();

      const extractColor = () => {
        // Kiểm tra kích thước hình ảnh
        if (
          imgElement.complete &&
          imgElement.naturalWidth > 0 &&
          imgElement.naturalHeight > 0
        ) {
          try {
            const color = colorThief.getColor(imgElement);
            setDominantColor(color);
          } catch (error) {
            console.error("Error extracting color:", error);
          }
        }
      };
      // Nếu hình ảnh đã load xong
      if (imgElement.complete) {
        extractColor();
      } else {
        // Nếu hình ảnh chưa load xong
        imgElement.addEventListener("load", extractColor);
      }
      // Cleanup event listener
      return () => {
        imgElement.removeEventListener("load", extractColor);
      };
    }
  }, [song]);

  return (
    <div
      className={`fixed bottom-0 left-0 z-10 w-full overflow-hidden transition-all duration-500 ${
        openNowPlay ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ top: "0px" }} /* Đảm bảo phần tử nằm ở top của màn hình */
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[var(--color-main-page)]">
        <div
          className="gradient-base-detail relative h-[900px] w-full px-[var(--pd-content)]"
          style={{
            backgroundColor: `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`,
          }}
        ></div>
      </div>
      <div className="relative h-full w-full">
        <div className="flex flex-col">
          <Header />
          <div className="flex py-10">
            {/* img */}
            <div className="hidden h-full w-[41.66667%] flex-col items-end justify-center pr-12 xl:flex">
              <div className="w-[500px] max-w-[80%]">
                <img
                  ref={imgRef}
                  crossOrigin="anonymous"
                  className="shadow-custom-img rounded-lg"
                  src={song?.infoSong?.thumbnailM}
                  alt="Song Thumbnail"
                />
              </div>
            </div>
            <Lyric />
          </div>
          <div className="flex flex-col items-center gap-2 pt-10">
            <div className="font-bold text-white">
              <span>{song?.infoSong.title}</span>
            </div>
            <div className="w-[500px]">
              <DurationBar />
            </div>
            <Action />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NowPlaying;
