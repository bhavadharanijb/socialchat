import React from "react";
import ReactDOM from "react-dom";
import Home from "./Home";
import Post from "./posts";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Home />
    <Post />
    <App />
  </React.StrictMode>,
  rootElement
);
