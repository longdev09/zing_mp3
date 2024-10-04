import ItemSong from "../../molecules/ItemSong/ItemSong";

function ListSong({ dataSource, columns }) {
  return (
    <div className="px-[var(--pd-content)]">
      <div className="mb-3 flex items-center gap-4 border-b border-[#283a41] px-2 py-3 text-base font-medium text-white">
        {columns.map((col) => (
          <div key={col.key} className={col.className}>
            <span>{col?.title}</span>
          </div>
        ))}
      </div>
      <div className="ul">
        {/* item */}
        {dataSource &&
          dataSource?.map((item, index) => (
            <ItemSong
              listSong={dataSource}
              key={index}
              columns={columns}
              data={item}
              index={index}
            />
          ))}
      </div>
    </div>
  );
}

export default ListSong;
