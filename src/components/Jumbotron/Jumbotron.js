import React from "react";
import MyPhoto from "../MyProfilePhoto/MyProfilePhoto";
import "./jumbotron.css";

function Jumbotron() {
  return (
    <div className="jumbotron jumbotron-fluid myJumbotron">
      <div className="container jumbotronText">
        {/* <img src={require(/src/components/Images/photo.png)} /> */}
        {/* <img src="/Images/photo.png" /> */}
        {/* <img src={myPhoto} alt="photo of Pawel" /> */}
        <h1 className="display-8">Hi👋, I'm Pawel </h1>
        <p className="lead">a web developer</p>
        {/* <hr /> */}
      </div>
    </div>
  );
}

export default Jumbotron;
