import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useFetch, useReadLrc } from "../../../hooks";

export default function ContentLyric() {
  const { song } = useSelector((state) => state.musicPlay);
  const { currentTime } = useSelector((state) => state.currentTime);
  const [file, setFile] = useState(null);
  const [newlyric, setLyric] = useState(null);

  const { data: dataLyric } = useFetch(`/lyric/${song?.idSong}`);
  const { lyrics } = useReadLrc(file);

  const itemRef = useRef();

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
          active: isActive,
          past: !isActive && item.time < Math.floor(currentTime),
        };
      })
    );

    // Cuộn đến dòng active
  }, [currentTime, lyrics]);

  return (
    <div className="w-full h-full flex flex-row items-center">
      <div className="flex flex-col justify-center w-[41.66667%] h-full ">
        <div className="w-[500px]">
          <img src={song.infoSong.thumbnailM} alt="Song Thumbnail" />
        </div>
      </div>
      <div className="flex-1 flex-col justify-center items-center h-full">
        <ul
          className="flex flex-col overflow-auto"
          style={{ height: "calc(100vh - 25rem)" }}
        >
          {newlyric?.map((item, index) => (
            <LyricItem isActive={item.active} item={item} index={index} />
            // <li
            //   ref={itemRef}
            //   key={index}
            //   className={`text-[40px] font-bold py-5 ${
            //     item.active
            //       ? "text-yellow-300"
            //       : item.past
            //       ? "text-[#888888]"
            //       : "text-white"
            //   }`}
            // >
            //   {item.text}
            // </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LyricItem({ isActive, index, item }) {
  const itemRef = useRef(null);
  useEffect(() => {
    if (isActive && itemRef.current) {
      itemRef.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [isActive]);
  return (
    <li
      ref={itemRef}
      key={index}
      className={`text-[40px] font-bold py-5 ${
        item.active
          ? "text-yellow-300"
          : item.past
          ? "text-[#888888]"
          : "text-white"
      }`}
    >
      {item.text}
    </li>
  );
}
