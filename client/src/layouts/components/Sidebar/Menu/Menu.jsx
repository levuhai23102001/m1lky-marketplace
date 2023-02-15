import React from "react";
import PropTypes from "prop-types";

const Menu = ({ children }) => {
  return (
    <>
      <ul className="sidebar-menu">{children}</ul>
    </>
  );
};

Menu.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Menu;
