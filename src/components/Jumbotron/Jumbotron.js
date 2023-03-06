import React from "react";
import "./jumbotron.css";

// import { Jumbotron } from "reactstrap";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid myJumbotron">
      <div className="container jumbotronText">
        <h1 className="display-8">Hi 👋, I'm Pawel </h1>
        <p className="lead">A web developer</p>
      </div>
    </div>
  );
}

export default Jumbotron;
