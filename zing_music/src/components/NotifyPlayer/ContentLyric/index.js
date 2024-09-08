import { useEffect, useState, useRef } from "react";
import { useSelector } from "react-redux";
import { useFetch, useReadLrc } from "../../../hooks";

export default function ContentLyric() {
  const { song } = useSelector((state) => state.musicPlay);
  const { currentTimeLyric } = useSelector((state) => state.currentTime);
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
        item.time <= Math.floor(currentTimeLyric) &&
        (lyrics[index + 1]?.time > Math.floor(currentTimeLyric) ||
          !lyrics[index + 1])
    );

    setLyric(
      lyrics?.map((item, index) => {
        const isActive = index === currentIndex;
        return {
          ...item,
          active: isActive,
          past: !isActive && item.time < Math.floor(currentTimeLyric),
        };
      })
    );

    // Cuộn đến dòng active
  }, [currentTimeLyric, lyrics]);

  return (
    <div className="w-full h-full flex flex-row items-center">
      <div className="hidden xl:flex  flex-col justify-center items-end w-[41.66667%] h-full pr-12">
        <div className="w-[500px] max-w-[80%] ">
          <img src={song?.infoSong?.thumbnailM} alt="Song Thumbnail" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center items-center h-full text-center xl:text-left">
        <ul
          className="flex flex-col overflow-auto w-full "
          style={{ height: "calc(100vh - 25rem)" }}
        >
          {newlyric?.map((item, index) => (
            <LyricItem isActive={item.active} item={item} index={index} />
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
      className={`text-[23px] md:text-[40px] font-bold py-5 ${
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
