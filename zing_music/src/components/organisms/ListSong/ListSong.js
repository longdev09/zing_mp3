import ItemSong from "../../molecules/ItemSong/ItemSong";

function ListSong({ data }) {
  return (
    <div className="ul">
      {/* item */}
      {data?.map((item, index) => (
        <ItemSong
          idx={index}
          thumbnail={item?.thumbnail}
          title={item?.title}
          artists={item.artists}
          releaseDate={item.releaseDate}
          songTime={item.duration}
        />
      ))}
    </div>
  );
}
export default ListSong;
