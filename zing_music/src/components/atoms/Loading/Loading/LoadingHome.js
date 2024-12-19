function LoadingHome() {
  return (
    <div className="w-full">
      {/* Banner */}
      <div className="relative h-[280px] w-full overflow-hidden bg-[#121212] px-5 pt-3">
        <div className="relative h-full w-full animate-pulse rounded-md bg-gray-300"></div>
      </div>

      {/* Responsive Section */}
      <div className="flex h-auto w-full flex-wrap gap-6 bg-[#121212] px-5 pt-10">
        <div className="h-[220px] flex-auto animate-pulse rounded-md bg-gray-300"></div>
        <div className="hidden h-[220px] flex-auto animate-pulse rounded-md bg-gray-300 md:block"></div>
        <div className="hidden h-[220px] flex-auto animate-pulse rounded-md bg-gray-300 lg:block"></div>
      </div>

      {/* Multiple Sections */}
      <div className="flex flex-col gap-10 bg-[#121212] px-5 pt-10">
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex flex-col gap-3">
            {/* Section Title */}
            <div className="h-[30px] w-[70%] animate-pulse rounded-md bg-gray-300 sm:w-[50%] md:w-[40%]"></div>

            {/* Content */}
            <div className="flex flex-wrap gap-7">
              {[...Array(4)].map((_, itemIndex) => (
                <div
                  key={itemIndex}
                  className={`flex h-[290px] flex-col gap-3 ${
                    itemIndex === 0
                      ? "flex-auto"
                      : itemIndex === 1
                        ? "hidden md:flex md:flex-auto"
                        : "hidden lg:flex lg:flex-auto"
                  }`}
                >
                  <div className="h-[250px] w-full animate-pulse rounded-md bg-gray-300"></div>
                  <div className="flex flex-col gap-2">
                    <div className="h-[20px] w-[50%] animate-pulse rounded-sm bg-gray-300"></div>
                    <div className="h-[20px] w-[30%] animate-pulse rounded-sm bg-gray-300"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default LoadingHome;
