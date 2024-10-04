import { FaMagnifyingGlass } from "../../../assets/icon";

function InputSearch() {
  return (
    <div className="flex items-center rounded-full bg-[#353646] px-2 py-3 text-white">
      <FaMagnifyingGlass className="ml-3 mr-3 text-lg text-[var(--color-pink-normal)]" />
      <input
        className="bg-[#353646] text-sm outline-none"
        placeholder="Tìm kiếm bài hát, nghệ sĩ..."
      />
    </div>
  );
}

export default InputSearch;
