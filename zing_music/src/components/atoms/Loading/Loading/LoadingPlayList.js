function LoadingPlayList() {
  return (
    <div className="w-full">
      <div className="gradient-base-detail-2 relative h-[280px] w-full flex-none rounded-t-lg !bg-[#292929] px-[var(--pd-content)]">
        <div className="absolute bottom-0 top-0 flex flex-row items-center gap-6">
          <div className="h-[230px] w-[230px]">
            <div className="mr-4 h-[230px] w-[230px] animate-pulse rounded-lg bg-gray-300"></div>
          </div>
          <div className="flex w-full flex-col gap-3 font-semibold text-white">
            <div className="h-7 w-[400px] animate-pulse rounded bg-gray-300"></div>
            <div className="h-10 w-[500px] animate-pulse rounded bg-gray-300"></div>
            <div className="h-8 w-[300px] animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
      </div>

      <div className="bg-[var(--color-main-page)]">
        <div className="gradient-base-detail relative h-[232px] w-full bg-[#292929] px-[var(--pd-content)]">
          <div className="flex flex-row items-center gap-4 py-5">
            <div className="h-[100px] w-[100px] animate-pulse rounded bg-gray-300"></div>
            <div className="h-[80px] w-[80px] animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
        <div className="relative top-[-70px] w-full">
          <div className="space-y-4 px-[var(--pd-content)]">
            {[...Array(6)].map((_, index) => (
              <div className="flex items-center space-x-4" key={index}>
                {/* Song Thumbnail Placeholder */}
                <div className="h-12 w-12 animate-pulse rounded-md bg-gray-300"></div>

                {/* Song Info */}
                <div className="flex-1">
                  {/* Song Title Placeholder */}
                  <div className="mb-2 h-4 w-48 animate-pulse rounded bg-gray-300"></div>
                  {/* Release Date Placeholder */}
                  <div className="h-3 w-32 animate-pulse rounded bg-gray-300"></div>
                </div>

                {/* Duration Placeholder */}
                <div className="h-3 w-12 animate-pulse rounded bg-gray-300"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default LoadingPlayList;
