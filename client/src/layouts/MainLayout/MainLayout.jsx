import React from "react";
import Background from "../Background";

import "./mainLayout.scss";

const MainLayout = () => {
  return (
    <>
      <div className="wrapper">
        <Background />
        <h1>NAVBAR</h1>
        <h1>SIDEBAR</h1>
        <h1>CONTENT</h1>
      </div>
    </>
  );
};

export default MainLayout;
