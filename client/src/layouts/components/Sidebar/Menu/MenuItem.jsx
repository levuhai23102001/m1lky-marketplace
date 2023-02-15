import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const MenuItem = ({ to, title }) => {
  return (
    <>
      <li className="sidebar-menu__item">
        <NavLink to={to} className="menu-item__link">
          <span className="menu-item__title">{title}</span>
        </NavLink>
      </li>
    </>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  //   icon: PropTypes.node.isRequired,
  //   activeIcon: PropTypes.node.isRequired,
};

export default MenuItem;
