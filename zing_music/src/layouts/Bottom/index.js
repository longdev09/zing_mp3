import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  FaBackwardStep,
  FaClone,
  FaEllipsis,
  FaForwardStep,
  FaHeart,
  FaMicroscope,
  FaPause,
  FaPlay,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh,
  FaYoutube,
} from "../../assets/icon";
import Button from "../../components/Button";
import { useConverTime } from "../../hooks";
import {
  nextSong,
  pause,
  play,
  prevSong,
  setRandomSong,
} from "../../redux/features/music/musicPlaySlice";

export default function Bottom() {
  const { playList, listRelease, isPlay, song, randomSong } = useSelector(
    (state) => state.musicPlay
  );
  const { currentTime, songTime } = useSelector((state) => state.currentTime);

  const currentTimeFm = useConverTime(currentTime);
  const songTimeFm = useConverTime(songTime);

  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  const handleNextSong = () => {
    if (playList) {
      dispatch(nextSong(playList.song.items));
    } else {
      dispatch(nextSong(listRelease));
    }
  };

  const handlePrevSong = () => {
    if (playList) {
      dispatch(prevSong(playList.song.items));
    } else {
      dispatch(prevSong(listRelease));
    }
  };

  const handleRamdomSong = () => {
    dispatch(setRandomSong(!randomSong));
  };

  return (
    <div className="fixed z-40 left-0 right-0  bottom-0 bg-[var(--bg-bottom)]">
      <div className="flex items-center h-[--h-bottom] px-5 justify-between">
        <div className="flex items-center w-[500px] ">
          <img
            className="w-[64px] rounded-lg"
            src={
              playList
                ? playList?.song.items.find(
                    (item) => item.encodeId === song.idSong
                  )?.thumbnail
                : listRelease?.find((item) => item.encodeId === song.idSong)
                    ?.thumbnail
            }
          />
          <div className="flex flex-col ml-3">
            <span className="text-sm font-bold text-white line-clamp-1">
              {playList
                ? playList?.song.items.find(
                    (item) => item.encodeId === song.idSong
                  )?.title
                : listRelease?.find((item) => item.encodeId === song.idSong)
                    ?.title}
            </span>

            <div className="mt-1 font-bold text-[--text-sub] text-xs line-clamp-1">
              {playList
                ? playList?.song.items
                    .find((item) => item.encodeId === song.idSong)
                    ?.artists?.map((item, index) => (
                      <Link
                        key={index}
                        className="text-xs text-[var(--text-sub)] mt-[3px] hover:text-[var(--text-pink)] hover:underline"
                      >
                        <span className="text-xs text-[var(--text-sub)] mt-[3px]">
                          {item.name + ", "}
                        </span>
                      </Link>
                    ))
                : listRelease
                    ?.find((item) => item.encodeId === song.idSong)
                    ?.artists?.map((item, index) => (
                      <Link
                        key={index}
                        className="text-xs text-[var(--text-sub)] mt-[3px] hover:text-[var(--text-pink)] hover:underline"
                      >
                        <span className="text-xs text-[var(--text-sub)] mt-[3px]">
                          {item.name + ", "}
                        </span>
                      </Link>
                    ))}
            </div>
          </div>
          <div className="flex text-white ml-6">
            <FaHeart className="mr-6" />
            <FaEllipsis />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Button
              onclick={handleRamdomSong}
              className={`mx-4 !text-xl ${
                randomSong ? "text-[var(--text-purple)]" : ""
              } `}
            >
              <FaShuffle />
            </Button>
            <Button onclick={handlePrevSong} className="mx-4 !text-xl">
              <FaBackwardStep />
            </Button>
            <div className="w-[40px] h-[40px] flex items-center justify-center rounded-full border">
              {isPlay ? (
                <Button onclick={handlePause} className="mx-4 !text-xl">
                  <FaPause />
                </Button>
              ) : (
                <Button onclick={handlePlay} className="mx-4 !text-xl">
                  <FaPlay />
                </Button>
              )}
            </div>

            <Button onclick={handleNextSong} className="mx-4 !text-xl">
              <FaForwardStep />
            </Button>
            <Button className="mx-4 !text-xl">
              <FaRepeat />
            </Button>
          </div>
          <div className="flex items-center mt-2 cursor-pointer">
            <span className="text-[var(--text-sub)] text-sm mr-2">
              {currentTimeFm}
            </span>
            <div className="flex relative w-full h-[5px] bg-[#5a5560] rounded-lg group hover:h-[7px] transition duration-300">
              <input
                value={
                  songTime == 0 ? 0 : Math.floor((currentTime / songTime) * 100)
                }
                type="range"
                name="range"
                min="0"
                max="100"
                className="bg-none w-full"
              />
              {/* <div className="bg-white absolute w-[600px] h-[5px] rounded-lg group-hover:h-[7px] transition duration-300">
                <div className="hidden group-hover:block absolute w-[12px] h-[12px] bg-white rounded-full translate-x-[590px] translate-y-[-3px]"></div>
              </div> */}
            </div>
            <span className="text-[var(--text-sub)] text-sm ml-2">
              {songTimeFm}
            </span>
          </div>
        </div>
        <div className="text-white  items-center  w-[500px] flex justify-end ">
          <Button className="!text-lg mx-2">
            <FaYoutube />
          </Button>
          <Button className="!text-lg mx-4">
            <FaMicroscope />
          </Button>
          <Button className="!text-lg mx-4">
            <FaClone />
          </Button>
          <Button className="!text-lg mx-4">
            <FaVolumeHigh />
          </Button>
        </div>
      </div>
    </div>
  );
}
