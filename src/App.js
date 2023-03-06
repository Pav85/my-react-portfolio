import React from "react";
import "./App.css";
// import "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Jumbotron from "./components/Jumbotron/Jumbotron";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Route, Switch } from "react-router-dom";
// import Example from "./components/Header/Header";

function App() {
  return (
    <Router>
      <div className="container-fluid body">
        <Header />
        {/* <Jumbotron /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contacts" element={<ContactPage />} />
        </Routes>
        {/* <Jumbotron /> */}
      </div>
    </Router>
  );
}

export default App;
