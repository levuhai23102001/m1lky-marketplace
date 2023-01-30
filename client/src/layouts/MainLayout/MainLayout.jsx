import React from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import "./mainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Navbar />
        {/* <Sidebar /> */}
      </div>
    </>
  );
};

export default MainLayout;
