import React from "react";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./navbar.scss";

const Navbar = () => {
  return (
    <>
      <div className="m1lky-navbar navbar">
        <div className="navbar-wrapper">
          <div className="navbar-brand">
            <img src="" alt="" className="navbar-brand__logo" />
            <span className="navbar-brand__name">M 1 L K Y</span>
          </div>
          <div className="navbar-menu">
            <div className="navbar-menu__item">Apps</div>
            <div className="navbar-menu__item">Docs</div>
            <div className="navbar-menu__item">Discovery</div>
            <div className="navbar-menu__item">Marketplace</div>
          </div>
          <Search />
        </div>
      </div>
    </>
  );
};

export default Navbar;
