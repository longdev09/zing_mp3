import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useConverTime, useFetch, useReadLrc } from "../../../hooks";
export default function ContentLyric() {
  const { song } = useSelector((state) => state.musicPlay);
  const { currentTime } = useSelector((state) => state.currentTime);
  const [file, setFile] = useState(null);

  const { data: dataLyric, loading: loadingLyric } = useFetch(
    `/lyric/${song?.idSong}`
  );
  const { lyrics } = useReadLrc(file);
  const [newlyric, setLyric] = useState(null);
  useEffect(() => {
    if (dataLyric?.file) {
      setFile(dataLyric.file);
    }
  }, [dataLyric]);
  useEffect(() => {
    const currentIndex = lyrics?.findIndex(
      (item, index) =>
        item.time <= Math.floor(currentTime) &&
        (lyrics[index + 1]?.time > Math.floor(currentTime) ||
          !lyrics[index + 1])
    );

    setLyric(
      lyrics?.map((item, index) => {
        const isActive = index === currentIndex;

        return {
          ...item,
          active: isActive, // Tô vàng cho dòng hiện tại
          past: !isActive && item.time < Math.floor(currentTime), // Tô đen cho các dòng đã qua
        };
      })
    );
  }, [currentTime, lyrics]);

  return (
    <div className=" w-full h-full  flex flex-row items-center gap-10 overflow-hidden">
      <div className="flex flex-col justify-center items-end w-[35%] ">
        <div className="w-[500px]">
          <img src={song.infoSong.thumbnailM} />
        </div>
      </div>
      <div
        className="flex-1 flex-col justify-center items-end overflow-auto "
        style={{ height: "calc(100vh - 25rem)" }}
      >
        <ul className="flex flex-col">
          {newlyric?.map((item, index) => (
            <li
              key={index}
              className={`text-[40px] font-bold py-5 ${
                item.active
                  ? " text-yellow-300"
                  : item.past
                  ? "text-slate-500"
                  : "text-white"
              }`}
            >
              {item.text}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
