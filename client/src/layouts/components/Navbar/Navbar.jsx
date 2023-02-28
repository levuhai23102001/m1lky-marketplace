import React from "react";
import { NavLink } from "react-router-dom";
import Search from "../Search";
import avatar from "../../../assets/images/avatar/anya.jpg";
import { FaCloud, FaBell } from "react-icons/fa";

import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="m1lky-navbar navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <span data-text="M 1 L K Y" className="navbar-brand__name">
              M 1 L K Y
            </span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-menu__item">
              <NavLink to="/" className="navbar-menu__item__link">
                Apps
              </NavLink>
            </div>
            <div className="navbar-menu__item">
              <NavLink to="docs" className="navbar-menu__item__link">
                Docs
              </NavLink>
            </div>
            <div className="navbar-menu__item">
              <NavLink to="/discovery" className="navbar-menu__item__link">
                Discovery
              </NavLink>
            </div>
            <div className="navbar-menu__item">
              <NavLink to="/marketplace" className="navbar-menu__item__link">
                Marketplace
              </NavLink>
            </div>
          </div>
          <Search />
          <div className="navbar-user">
            <div className="notification">
              <span className="notification-number">3</span>
              <FaBell />
            </div>
            <div className="cloud">
              <FaCloud />
            </div>
            <div className="profile">
              <img className="profile-img" src={avatar} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
