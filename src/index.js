import React from "react";
import { render } from "react-dom";
import "./style.css";

const Greeting = () => {
  return (
    <div>
      <h1>Learning Webpack 4</h1>
      <div id="image"></div>
    </div>
  );
};

render(<Greeting />, document.getElementById("root"));
