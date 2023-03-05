import React from "react";
import "./App.css";
// import "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div>
      <Header />
      <Jumbotron />
      <HomePage />
      <ContactPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
