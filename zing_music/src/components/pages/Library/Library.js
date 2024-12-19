import { useQuery } from "@tanstack/react-query";
import { useSelector } from "react-redux";
import { getUser } from "../../../apis";
import { FaPlus } from "../../../assets/icon";
import Button from "../../atoms/Button";
import { useDominantColor } from ".././../../hooks";
import { ModalAddPlayList } from "../../molecules/ModalContent";
import { useState } from "react";
import ListCartPlayList from "../../organisms/ListCartPlayList";
import apiPlaylist from "../../../apis/api.Playlist";
// hồ sơ người
function Library() {
  const { user } = useSelector((state) => state.account);

  const { data } = useQuery({
    queryKey: ["user", user.id],
    queryFn: getUser,
    refetchOnMount: true, // Refetch dữ liệu khi component mount lại
  });

  // lấy thông tin playList công khai
  const { data: dataPlayList } = useQuery({
    queryKey: ["playList"],
    queryFn: () => apiPlaylist.getPlayListUser(),
  });

  const { dominantColor } = useDominantColor(
    "https://tse2.mm.bing.net/th?id=OIP.h1faQamasIyBou06GErD0gHaJd&pid=Api&P=0",
  );

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full">
      <div
        style={{ backgroundColor: `rgb(${dominantColor.join(",")})` }}
        className="gradient-base-detail-2 relative h-[280px] w-full flex-none overflow-hidden rounded-t-lg px-[var(--pd-content)]"
      >
        <div className="absolute bottom-0 top-0 flex items-center gap-6">
          <div className="h-[230px] w-[230px]">
            <img
              //   ref={imgRef}
              className="shadow-custom-img rounded-lg"
              src={
                "https://tse2.mm.bing.net/th?id=OIP.h1faQamasIyBou06GErD0gHaJd&pid=Api&P=0"
              }
              crossOrigin="anonymous" // Cần để lấy được màu từ ảnh từ các nguồn ngoài
            />
          </div>
          <div className="flex flex-col gap-3 font-semibold text-white">
            <span>Thư viện của bạn</span>
            <h2 className="text-8xl font-extrabold">{data?.name}</h2>
          </div>
        </div>
      </div>

      {/* content */}
      <div className="bg-[var(--color-main-page)]">
        <div
          className="gradient-base-detail relative h-[232px] w-full px-[var(--pd-content)]"
          style={{
            backgroundColor: `rgb(${dominantColor[0]}, ${dominantColor[1]}, ${dominantColor[2]})`,
          }}
        >
          {/* Tạo play list  */}
          <div className="flex items-center gap-4 py-7">
            <h2 className="text-xl font-bold text-white">PLAYLIST</h2>
            <Button
              onClick={() => setIsOpen(!isOpen)}
              className={"h-7 w-7 text-base"}
              variant={"roundedBig"}
              label={<FaPlus />}
            />
          </div>
        </div>
        {/* danh sách các playlist */}
        <div className="relative top-[-130px] h-full w-full overflow-hidden px-[var(--pd-content)]">
          {/* danh sách playlist công khai */}
          <ListCartPlayList title={"Playlist Công khai"} data={dataPlayList} />
        </div>
      </div>
      <ModalAddPlayList isOpen={isOpen} closeModal={() => setIsOpen(!isOpen)} />
    </div>
  );
}

export default Library;
