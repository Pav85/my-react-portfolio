import React from "react";
import "./App.css";
// import "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    // <div>
    //   <Header />
    //   <Jumbotron />
    //   <HomePage />
    //   <ContactPage />
    //   <ProjectsPage />
    // </div>
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
