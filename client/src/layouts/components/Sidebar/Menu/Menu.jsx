import React from "react";
import PropTypes from "prop-types";
import "./menu.scss";

const Menu = ({ title, children }) => {
  return (
    <div className="sidebar-wrapper">
      <div className="sidebar-title">{title}</div>
      <ul className="sidebar-menu">{children}</ul>
    </div>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
