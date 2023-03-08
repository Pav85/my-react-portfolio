import React from "react";
import MyPhoto from "../MyProfilePhoto/MyProfilePhoto";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid myJumbotron">
      <div className="container jumbotronText">
        <h1 className="display-8">Hi👋, I'm Pawel </h1>
        <hr className="ruleStyle" />
        <p className="lead">a web developer</p>
      </div>
    </div>
  );
}

export default Jumbotron;
