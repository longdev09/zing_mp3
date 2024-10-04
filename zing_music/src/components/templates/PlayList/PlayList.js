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
  const [dominantColor, setDominantColor] = useState([0, 0, 0]); // Màu mặc định là đen
  const imgRef = useRef(null);

  // xu ly lay mau theo anh de lam cai bg
  useEffect(() => {
    const imgElement = imgRef.current;
    const colorThief = new ColorThief();

    if (imgElement.complete) {
      // Nếu hình ảnh đã load xong
      const color = colorThief.getColor(imgElement);
      setDominantColor(color);
    } else {
      // Nếu hình ảnh chưa load xong
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
        className="gradient-base-detail-2 relative h-[280px] w-full flex-none overflow-hidden rounded-t-lg px-[var(--pd-content)]"
      >
        <div className="absolute bottom-0 top-0 flex items-center gap-6">
          <div className="h-[230px] w-[230px]">
            <img
              ref={imgRef}
              className="shadow-custom-img rounded-lg"
              src={imgBg}
              crossOrigin="anonymous" // Cần để lấy được màu từ ảnh từ các nguồn ngoài
            />
          </div>
          <div className="flex flex-col gap-3 font-semibold text-white">
            <span>{subTitle}</span>
            <h2 className="text-8xl font-extrabold">{title}</h2>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-main-page)]">
        <div
          className="gradient-base-detail relative h-[232px] w-full px-[var(--pd-content)]"
          style={{
            backgroundColor: `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`,
          }}
        >
          <div className="flex flex-row items-center gap-4 py-5">
            {/* lay danh sach */}
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
        </div>
        <div className="relative top-[-130px] h-full w-full overflow-hidden">
          <ListSong dataSource={dataSource} columns={columns} />
        </div>
      </div>
    </div>
  );
}

export default PlayList;
