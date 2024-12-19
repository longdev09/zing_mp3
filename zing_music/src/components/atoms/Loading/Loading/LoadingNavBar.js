function LoadingNavBar({ show }) {
  console.log(show);
  return (
    <div className={`space-y-4 ${show ? "px-[var(--pd-content)]" : "px-0"} ]`}>
      {[...Array(11)].map((_, index) => (
        <div
          className={`flex items-center space-x-4 ${show ? "" : "justify-center"}`}
          key={index}
        >
          {/* Song Thumbnail Placeholder */}
          <div
            className={`h-12 w-12 animate-pulse rounded-md bg-gray-300`}
          ></div>

          {/* Song Info */}
          <div className={`${show ? "" : "hidden"} flex-1`}>
            {/* Song Title Placeholder */}
            <div className="mb-2 h-4 w-52 animate-pulse rounded bg-gray-300"></div>
            {/* Release Date Placeholder */}
            <div className="h-3 w-40 animate-pulse rounded bg-gray-300"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default LoadingNavBar;
