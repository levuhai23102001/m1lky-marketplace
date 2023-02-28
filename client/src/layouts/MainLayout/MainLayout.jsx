import React from "react";
import PropTypes from "prop-types";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./mainLayout.scss";

const MainLayout = ({ children }) => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        <div className="main-container">
          <Sidebar />
          <div className="wrapper-content">{children}</div>
        </div>
      </div>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
