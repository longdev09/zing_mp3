import { useSelector } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useFetch, useReadLrc } from "../../../hooks";

function Lyric() {
  const { song } = useSelector((state) => state.musicPlay);
  const { currentTime } = useSelector((state) => state.currentTime);
  const [file, setFile] = useState(null);
  const [newlyric, setLyric] = useState(null);

  const { data: dataLyric } = useFetch(`/lyric/${song?.idSong}`);
  const { lyrics } = useReadLrc(file);

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
          !lyrics[index + 1]),
    );

    setLyric(
      lyrics?.map((item, index) => {
        const isActive = index === currentIndex;
        return {
          ...item,
          active: isActive,
          past: !isActive && item.time < Math.floor(currentTime),
        };
      }),
    );

    // Cuộn đến dòng active
  }, [currentTime, lyrics]);

  return (
    <div className="flex h-full flex-1 flex-col items-center justify-center text-center xl:text-left">
      <ul
        className="flex w-full flex-col overflow-auto"
        style={{ height: "calc(100vh - 25rem)" }}
      >
        {newlyric?.map((item, index) => (
          <LyricItem isActive={item.active} item={item} index={index} />
        ))}
      </ul>
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
      className={`py-5 text-[23px] font-bold md:text-[40px] ${
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
export default Lyric;
