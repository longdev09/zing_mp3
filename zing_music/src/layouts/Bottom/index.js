import { useSelector, useDispatch } from "react-redux";
import {
  FaBackwardStep,
  FaCirclePlay,
  FaClone,
  FaEllipsis,
  FaForwardStep,
  FaHeart,
  FaMicroscope,
  FaRepeat,
  FaShuffle,
  FaVolumeHigh,
  FaYoutube,
  FaPlay,
  FaPause,
} from "../../assets/icon";
import Button from "../../components/Button";
import { pause, play } from "../../redux/features/music/musicPlaySlice";

export default function Bottom() {
  const { playList, isPlay, song } = useSelector((state) => state.musicPlay);
  const dispatch = useDispatch();
  const handlePlay = () => {
    dispatch(play());
  };

  const handlePause = () => {
    dispatch(pause());
  };

  return (
    <div className="fixed z-40 left-0 right-0  bottom-0 bg-[var(--bg-bottom)]">
      <div className="flex items-center h-[--h-bottom] px-5 justify-between">
        <div className="flex items-center w-[500px] ">
          <img
            className="w-[64px] rounded-lg"
            src={
              playList?.song.items.find((item) => item.encodeId === song.idSong)
                ?.thumbnail
            }
          />
          <div className="flex flex-col ml-3">
            <span className="text-sm font-bold text-white line-clamp-1">
              {
                playList?.song.items.find(
                  (item) => item.encodeId === song.idSong
                )?.title
              }
            </span>
            <span className="mt-1 font-bold text-[--text-sub] text-xs">
              Chi dan
            </span>
          </div>
          <div className="flex text-white ml-6">
            <FaHeart className="mr-6" />
            <FaEllipsis />
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-center">
            <Button className="mx-4 !text-xl">
              <FaShuffle />
            </Button>
            <Button className="mx-4 !text-xl">
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

            <Button className="mx-4 !text-xl">
              <FaForwardStep />
            </Button>
            <Button className="mx-4 !text-xl">
              <FaRepeat />
            </Button>
          </div>
          <div className="flex items-center mt-2 cursor-pointer">
            <span className="text-[var(--text-sub)] text-sm mr-2">02:29</span>
            <div className="flex relative w-full h-[5px] bg-[#5a5560] rounded-lg group hover:h-[7px] transition duration-300">
              <div className="bg-white absolute w-[600px] h-[5px] rounded-lg group-hover:h-[7px] transition duration-300">
                <div className="hidden group-hover:block absolute w-[12px] h-[12px] bg-white rounded-full translate-x-[590px] translate-y-[-3px]"></div>
              </div>
            </div>
            <span className="text-[var(--text-sub)] text-sm ml-2">02:29</span>
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
