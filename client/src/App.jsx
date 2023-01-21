import React from "react";
import MainLayout from "./layouts";
import Background from "./layouts/Background";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Background />
      <MainLayout />
    </div>
  );
}

export default App;
