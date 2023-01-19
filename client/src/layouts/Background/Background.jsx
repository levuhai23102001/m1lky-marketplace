import React from "react";
import Blob from "./Blob";
import { Canvas } from "@react-three/fiber";

import "./background.scss";

const Background = () => {
  return (
    <div className="bg-container">
      <Canvas camera={{ position: [0, 0, 8] }}>
        <Blob />
      </Canvas>
    </div>
  );
};

export default Background;
