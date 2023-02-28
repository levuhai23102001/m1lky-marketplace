import React from "react";
import Menu, { MenuItem } from "./Menu";
import config from "../../../configs";

import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="m1lky-sidebar sidebar">
        <Menu title="Apps">
          <MenuItem title="All Apps" to={config.routes.home} />
          <MenuItem title="Updates" to={config.routes.following} />
        </Menu>
        <Menu title="Categories">
          <MenuItem title="Photography" to={config.routes.home} />
          <MenuItem title="Graphic Design" to={config.routes.following} />
          <MenuItem title="Reels" to={config.routes.discovery} />
          <MenuItem title="Illustrations" to={config.routes.settings} />
          <MenuItem title="UI/UX" to={config.routes.settings} />
          <MenuItem title="3D/AR" to={config.routes.settings} />
        </Menu>
        <Menu title="Resource Links">
          <MenuItem title="Stock" to={config.routes.home} />
          <MenuItem title="Tutorials" to={config.routes.following} />
          <MenuItem title="Portfolio" to={config.routes.discovery} />
          <MenuItem title="Social Media" to={config.routes.settings} />
        </Menu>
        <Menu title="Resource Links">
          <MenuItem title="Stock" to={config.routes.home} />
          <MenuItem title="Tutorials" to={config.routes.following} />
          <MenuItem title="Portfolio" to={config.routes.discovery} />
          <MenuItem title="Social Media" to={config.routes.settings} />
        </Menu>
        <Menu title="Resource Links">
          <MenuItem title="Stock" to={config.routes.home} />
          <MenuItem title="Tutorials" to={config.routes.following} />
          <MenuItem title="Portfolio" to={config.routes.discovery} />
          <MenuItem title="Social Media" to={config.routes.settings} />
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
