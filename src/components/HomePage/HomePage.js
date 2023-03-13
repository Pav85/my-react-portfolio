import React from "react";
import Jumbotron from "../Jumbotron/Jumbotron";
import MyPhoto from "../MyProfilePhoto/MyProfilePhoto";

function HomePage() {
  return (
    <div>
      <MyPhoto />
      <Jumbotron />
    </div>
  );
}

export default HomePage;
