import React from "react";
import "./Wrapper.css";

function Wrapper(props) {
  return <div className="container-fluid">{props.children}</div>;
}

export default Wrapper;
