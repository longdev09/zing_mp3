import { useSelector } from "react-redux";
import { FaPause, FaPlay, FaPlus } from "../../../assets/icon";
import useHandleMusic from "../../../hooks/useHandleMusic";
import Button from "../../atoms/Button";
import ListSong from "../../organisms/ListSong";
import ColorThief from "colorthief";
import { useEffect, useRef, useState } from "react";

function PlayList({ title, subTitle, imgBg, dataSource, columns }) {
  const { isPlay, playList } = useSelector((state) => state.musicPlay);
  const { handleSetPlayList, handlePlause, handlePlay } = useHandleMusic();
  const [dominantColor, setDominantColor] = useState([0, 0, 0]);
  const imgRef = useRef(null);

  useEffect(() => {
    const imgElement = imgRef.current;
    const colorThief = new ColorThief();

    if (imgElement.complete) {
      const color = colorThief.getColor(imgElement);
      setDominantColor(color);
    } else {
      imgElement.addEventListener("load", () => {
        const color = colorThief.getColor(imgElement);
        setDominantColor(color);
      });
    }
  }, []);

  return (
    <div className="w-full">
      <div
        style={{
          backgroundColor: `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`,
        }}
        className="gradient-base-detail-2 relative flex h-auto w-full flex-col items-center gap-4 overflow-hidden rounded-t-lg px-[var(--pd-content)] py-6 sm:h-[280px] sm:flex-row sm:gap-6"
      >
        <div className="h-[180px] w-[180px] sm:h-[230px] sm:w-[230px] lg:h-[250px] lg:w-[250px]">
          <img
            ref={imgRef}
            className="shadow-custom-img h-full w-full rounded-lg object-cover"
            src={imgBg}
            crossOrigin="anonymous"
          />
        </div>
        <div className="flex flex-col gap-3 text-center text-white sm:text-left">
          <span className="text-sm sm:text-base">{subTitle}</span>
          <h2 className="text-xl font-extrabold sm:text-2xl md:text-4xl">
            {title}
          </h2>
        </div>
      </div>
      <div className="bg-[var(--color-main-page)]">
        <div
          className="gradient-base-detail relative flex h-[100px] w-full items-center justify-start gap-4 px-[var(--pd-content)]"
          style={{
            backgroundColor: `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`,
          }}
        >
          {isPlay ? (
            <Button
              onClick={handlePlause}
              label={<FaPause />}
              variant={"roundedBig"}
            />
          ) : playList == null ? (
            <Button
              onClick={() =>
                handleSetPlayList(
                  "new-release",
                  dataSource,
                  dataSource[0].encodeId,
                )
              }
              label={<FaPlay />}
              variant={"roundedBig"}
            />
          ) : (
            <Button
              onClick={handlePlay}
              label={<FaPlay />}
              variant={"roundedBig"}
            />
          )}
          <Button label={<FaPlus />} variant={"roundedNoBg"} />
        </div>
        <div className="relative top-[-10px] h-full w-full overflow-hidden">
          <ListSong dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default PlayList;
