import React from "react";
import "./container.css";

function Container({ children }) {
  return <div id="parent">{children}</div>;
}

export default Container;
