import { useSelector } from "react-redux";
import { Header, ListItem } from "../../molecules/playingBar";
import { LoadingListItem } from "../../atoms/Loading";
import { useEffect } from "react";

function PlayingBar() {
  const { playList } = useSelector((state) => state.musicPlay);

  return (
    <div className="fixed right-0 z-50 h-full w-[22rem] rounded-lg bg-[var(--color-main-page)] transition-all duration-300 2xl:relative">
      <div className="relative flex flex-col">
        {/* header */}
        <Header />
        {/* danh sach bai hat cho phat */}
        <div className="relative">
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
