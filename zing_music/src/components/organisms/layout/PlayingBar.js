import { useSelector } from "react-redux";
import { LoadingListItem } from "../../atoms/Loading";
import { Header, ListItem } from "../../molecules/playingBar";

function PlayingBar() {
  const { playList } = useSelector((state) => state.musicPlay);
  const { openPlayingBar } = useSelector((state) => state.actionMusic);

  return (
    <div
      className={` ${openPlayingBar ? "w-[0] md:w-[22rem]" : "w-[22rem] md:w-[0]"} fixed right-0 z-30 mx-2 h-full rounded-lg bg-[var(--color-main-page)] transition-all duration-300 2xl:relative`}
    >
      <div className="relative flex flex-col">
        {/* header */}
        <Header />
        {/* danh sach bai hat cho phat */}
        <div className="">
          {playList ? (
            <ListItem playList={playList.list} />
          ) : (
            <LoadingListItem />
          )}
        </div>
      </div>
    </div>
  );
}
export default PlayingBar;
// md:w-[22rem] md:translate-x-0
