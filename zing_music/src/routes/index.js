import Home from "../pages/Home";
import NewSong from "../pages/NewSong";
import routesClient from "../config/routes";
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: routesClient.newSong, component: NewSong },
];
