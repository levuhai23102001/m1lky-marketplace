import React from "react";
import videoBg from "./videoBg1.mp4";
import "./background.scss";

const Background = () => {
  return (
    <div className="video-bg">
      <video src={videoBg} autoPlay loop={true} muted={true}></video>
    </div>
  );
};

export default Background;
