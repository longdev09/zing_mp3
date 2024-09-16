import {
  IconLibrary,
  IconDiscover,
  IconZingchart,
  IconRadio,
  IconRankMusic,
  IconTopic,
  IconStar,
} from "../assets/icon";
import routesClient from "../config/routes";

export const MenuSideBar1 = [
  {
    icon: <IconLibrary />,
    name: "Thư Viện",
    to: routesClient.myMusic,
  },
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
