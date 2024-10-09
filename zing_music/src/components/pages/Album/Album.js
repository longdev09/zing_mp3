import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { list } from "../../../apis";
import { LoadingPlayList } from "../../atoms/Loading";
import PlayList from "../../templates/PlayList/PlayList";
const columns = [
  {
    title: "#",
    className: "flex-none text-white w-[10px] flex justify-end",
    type: "TextNumber",
  },
  {
    title: "Bài hát",
    type: "TextImg",
    thumbnail: "thumbnail",
    title_: "title",
    className: "flex-none w-[60%]",
  },

  {
    title: "Albums",
    key: "index",
    className: "flex-auto",
    type: "TextDefault",
    dataIndex: "album.title",
  },
  {
    title: "Thời gian",
    key: "index",
    className: "flex-none",
    type: "TextDurations",
  },
];
function Album() {
  const { idAlbum } = useParams();

  const { data, error, isLoading } = useQuery({
    queryKey: ["list", idAlbum],
    queryFn: list,
  });

  if (isLoading) {
    return <LoadingPlayList />;
  }
  console.log();

  if (error) return <div>Error loading user data</div>;
  return (
    <PlayList
      title={data.title}
      subTitle={"Albums"}
      dataSource={data?.song?.items}
      columns={columns}
      imgBg={data.thumbnail}
    />
  );
}
export default Album;
