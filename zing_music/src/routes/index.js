import Home from "../components/pages/Home";

import NewRelease from "../components/pages/NewRelease";
import routesClient from "../config/routes";
import Album from "../components/pages/Album";
import { Login, SignUp } from "../components/pages/Account";
import Library from "../components/pages/Library";
export const publicRoutes = [
  {
    path: "/",
    component: Home,
  },
  { path: routesClient.newRelease, component: NewRelease },
  { path: routesClient.albums, component: Album },
  { path: routesClient.login, component: Login, layout: null },
  { path: routesClient.signup, component: SignUp, layout: null },
];

export const privateRoute = [
  { path: routesClient.library, component: Library },
];
