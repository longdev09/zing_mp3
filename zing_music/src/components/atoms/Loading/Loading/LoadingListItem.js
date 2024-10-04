function LoadingListItem() {
  return (
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
        </div>
      ))}
    </div>
  );
}

export default LoadingListItem;
