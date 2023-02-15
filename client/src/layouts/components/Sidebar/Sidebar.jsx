import React from "react";
import Menu, { MenuItem } from "./Menu";
import config from "../../../configs";
import "./sidebar.scss";
const Sidebar = () => {
  return (
    <>
      <div className="m1lky-sidebar sidebar">
        <Menu>
          <MenuItem title="Home" to={config.routes.home} />
          <MenuItem title="Following" to={config.routes.following} />
          <MenuItem title="Discovery" to={config.routes.discovery} />
          <MenuItem title="Settings" to={config.routes.settings} />
        </Menu>
      </div>
    </>
  );
};

export default Sidebar;
