import config from "../configs";

import Home from "../pages/Home";
import Following from "../pages/Following";
import Discovery from "../pages/Discovery";

const publicRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.following, component: Following },
  { path: config.routes.discovery, component: Discovery },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
