import React from "react";
import { render } from "react-dom";
import "./style.css";

const Contact = () => {
  return (
    <div>
      <h1>Contact us</h1>
      <div id="image"></div>
    </div>
  );
};

render(<Contact />, document.getElementById("target"));
