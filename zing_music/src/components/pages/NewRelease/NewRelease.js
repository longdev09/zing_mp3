import { useQuery } from "@tanstack/react-query";
import { memo } from "react";
import { newRelease } from "../../../apis";
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
    title: "Phát hành",
    key: "index",
    className: "flex-auto",
    type: "TextReleaseDate",
  },
  {
    title: "Thời gian",
    key: "index",
    className: "flex-none",
    type: "TextDurations",
  },
];

function NewRelease() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["newRelease"],
    queryFn: newRelease,
  });

  if (isLoading) {
    return <LoadingPlayList />;
  }

  if (error) return <div>Error loading user data</div>;

  return (
    <PlayList
      title={"Mới phát hành"}
      subTitle={"Nhạc mới cập nhật hằng ngày"}
      dataSource={data.data.data}
      columns={columns}
      imgBg={
        "https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/a/6/9/7/a69773e91ea657355544dc5c4aa42e6b.jpg"
      }
    />
  );
}

export default memo(NewRelease);
