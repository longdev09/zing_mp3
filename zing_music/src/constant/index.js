import {
  FaForwardStep,
  FaHeart,
  FaPlus,
  FaUser,
  IconDiscover,
  IconRadio,
  IconRankMusic,
  IconStar,
  IconTopic,
  IconZingchart,
} from "../assets/icon";
import routesClient from "../config/routes";

export const MenuSideBar1 = [
  {
    icon: <IconDiscover />,
    name: "Khám Phá",
    to: routesClient.home,
  },
  {
    icon: <IconZingchart />,
    name: "#zingchart",
    to: routesClient.zingChart,
  },
  {
    icon: <IconRadio />,
    name: "Radio",
    to: routesClient.albums,
  },
];

export const MenuSideBar2 = [
  {
    icon: <IconRankMusic />,
    name: "BXH Nhạc Mới",
  },
  {
    icon: <IconTopic />,
    name: "Chủ Đề & Thể Loại",
  },
  {
    icon: <IconStar />,
    name: "Top 100",
  },
];

export const ItemMenu = [
  {
    icon: <FaHeart />,
    title: "Thêm vào yêu thích",
  },

  {
    icon: <FaUser />,
    title: "Xem tác giả",
  },
  {
    icon: <FaPlus />,
    title: "Thêm vào danh sách phát",
    children: true,
  },
  {
    icon: <FaForwardStep />,
    title: "Phát tiếp theo",
    children: true,
  },
];

export const Banner = [
  {
    id: 1,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849001/Zingmp3/Background/7_gznxu2.jpg",
  },
  {
    id: 2,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849001/Zingmp3/Background/6_ywdmgu.jpg",
  },
  {
    id: 3,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849001/Zingmp3/Background/3_nsbfnl.jpg",
  },
  {
    id: 4,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849000/Zingmp3/Background/8_1_hrn5yh.jpg",
  },
  {
    id: 5,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849000/Zingmp3/Background/0_cxgerl.jpg",
  },
  {
    id: 6,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849000/Zingmp3/Background/1_h4xfgq.jpg",
  },
  {
    id: 7,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849001/Zingmp3/Background/5_bluvds.jpg",
  },
  {
    id: 8,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849000/Zingmp3/Background/2_ckrc8q.jpg",
  },
  {
    id: 9,
    img: "https://res.cloudinary.com/dfs2bnvhq/image/upload/v1733849000/Zingmp3/Background/4_ra1xoa.jpg",
  },
];
