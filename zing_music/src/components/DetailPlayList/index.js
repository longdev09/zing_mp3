import { memo } from "react";

// component dung chung cho cac trang detail
function DetailListSong({ imgBg, nameTitle, nameListSong, listSong }) {
  return (
    <div className="w-full">
      <div className="gradient-base-detail-2 relative h-[280px] w-full flex-none overflow-hidden rounded-t-lg !bg-[#ebebeb] px-[var(--pd-content)]">
        <div className="absolute bottom-0 top-0 flex items-center gap-6">
          <div className="h-[230px] w-[230x]">
            <img
              className="shadow-custom-img rounded-lg"
              src="https://i1.sndcdn.com/artworks-tDiGQhaAlXKoARUC-8qM4PA-t500x500.jpg"
            />
          </div>
          <div className="flex flex-col gap-3 font-semibold text-white">
            <span>New release</span>
            <h2 className="text-8xl font-extrabold">Mới Phát Hành </h2>
          </div>
        </div>
      </div>
      <div className="bg-[var(--color-main-page)]">
        <div className="gradient-base-detail relative h-[232px] w-full bg-[#ebebeb] px-[var(--pd-content)]">
          <div className="flex flex-row items-center gap-4 py-5">
            <div className="flex h-14 w-14 cursor-pointer items-center justify-center rounded-full bg-[var(--color-pink-normal-active)] text-2xl">
              <FaPlay />
            </div>
            <div className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-[2px] text-xl text-white">
              <FaPlus />
            </div>
          </div>
        </div>
        <div className="relative top-[-130px] h-full w-full overflow-hidden">
          <ListSong
            arrTitle={["Bài hát", "Phát hành", "Thời gian"]}
            data={data.data.data}
          />
        </div>
      </div>
    </div>
  );
}

export default memo(DetailListSong);
