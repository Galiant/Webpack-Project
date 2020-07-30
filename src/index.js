import React from "react";
import { render } from "react-dom";
import "./style.css";

const Greeting = () => <h1>Learning Webpack 4</h1>;

render(<Greeting />, document.getElementById("target"));
