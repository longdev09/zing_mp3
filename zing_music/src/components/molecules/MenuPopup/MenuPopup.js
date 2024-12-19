import { useMutation, useQuery } from "@tanstack/react-query";
import Tippy from "@tippyjs/react/headless";
import React, { useEffect, useState } from "react";
import apiPlaylist from "../../../apis/api.Playlist";
import apiSong from "../../../apis/api.Song";
import { ItemMenu } from "../../../constant";
import toast from "react-hot-toast";
import { HeaderItem, Menu, PopupWrapper } from "../../atoms/MenuItem";

const MenuPopup = ({ children, visible, hide, encodeId }) => {
  const [history, setHistory] = useState([ItemMenu]);
  const [activeLevel, setActiveLevel] = useState(1); // Cấp hiện tại (1 là cấp 1)

  const current = history[history.length - 1];

  // lấy danh sách playList
  const { data: dataPlayList } = useQuery({
    queryKey: ["playList"],
    queryFn: apiPlaylist.getPlayListUser,
  });

  // lấy info bài hát
  const {
    data: dataSong,
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["songInfo", encodeId], // queryKey phải là một mảng
    queryFn: apiSong.getSongInfo,
    enabled: !!encodeId, // Chỉ gọi API nếu encodeId có giá trị
  });

  // thêm song vào playlist

  const mutation = useMutation({
    mutationFn: apiPlaylist.putSongPlayList,
  });

  // Hàm xử lý thêm bài hát vào playlist
  const handleChangMenu = (encodeIdPlayList) => {
    console.log(dataSong);
    toast.promise(
      mutation.mutateAsync({ encodeId: encodeIdPlayList, dataSong }),
      {
        loading: "Đang thêm bài hát vào playlist...",
        success: `Đã thêm bài hát ${dataSong.title} vào playlist thành công!`,
        error: "Thêm bài hát thất bại. Vui lòng thử lại!",
      },
      {
        duration: 8000, // Thời gian hiển thị toast
      },
    );
    hide(); // Đóng Tippy sau khi gọi API
  };

  // Render từng menu item
  const renderItem = () => {
    return current?.map((item, index) => {
      const isParent = !!item.children;
      return (
        <Menu
          item={item}
          key={index}
          onClick={() => {
            if (isParent && dataPlayList) {
              // Khi bấm vào cấp 2
              setHistory((prev) => [...prev, dataPlayList]);
              setActiveLevel(history.length + 1); // Cập nhật cấp hiện tại
            } else {
              handleChangMenu(item.encodeId);
            }
          }}
        />
      );
    });
  };

  useEffect(() => {
    if (history.length > 1 && visible) {
      // Chỉ chạy khi mảng có từ 2 phần tử trở lên và `visible` là true
      setHistory((prev) => {
        const newHistory = [...prev];
        newHistory.pop(); // Xóa phần tử cuối cùng
        return newHistory;
      });
    }
  }, [visible]);

  return (
    <Tippy
      onClickOutside={hide}
      visible={visible}
      placement="auto"
      interactive
      render={(attrs) => (
        <div className="w-[300px] rounded-lg bg-[#282828]" {...attrs}>
          <PopupWrapper data={dataSong}>
            <HeaderItem data={dataSong} />
            {renderItem()}
          </PopupWrapper>
        </div>
      )}
    >
      {children}
    </Tippy>
  );
};

export default MenuPopup;
