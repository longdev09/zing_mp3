import { FaMagnifyingGlass } from "../../assets/icon";

export default function InputSearch() {
  return (
    <div className="bg-[#353646] px-2 py-3 flex items-center rounded-full text-white">
      <FaMagnifyingGlass className="ml-3 mr-3 text-lg text-[var(--color-pink-normal)]" />
      <input
        className="outline-none bg-[#353646] text-sm "
        placeholder="Tìm kiếm bài hát, nghệ sĩ..."
      />
    </div>
  );
}
