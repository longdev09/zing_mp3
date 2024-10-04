import Home from "../components/pages/Home";

import NewRelease from "../components/pages/NewRelease";
import routesClient from "../config/routes";
import Album from "../components/pages/Album";
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: routesClient.newRelease, component: NewRelease },
  { path: routesClient.albums, component: Album },
];
