
function HeaderListSong({ arrTitle }) {
  return (
    <div className="flex items-center gap-4 border-b border-[#283a41] px-4 py-3 text-base font-medium text-white">
      <div className="flex-none">
        <span>#</span>
      </div>
      <div className="flex-none" style={{ width: "calc(70% - 100px)" }}>
        <span>{arrTitle[0]}</span>
      </div>
      <div className="flex-auto">
        <span>{arrTitle[1]}</span>
      </div>
      <div className="flex-none">
        <span>{arrTitle[2]}</span>
      </div>
    </div>
  );
}

export default HeaderListSong;
