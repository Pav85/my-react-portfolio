import React from "react";
// import "./App.css";
// import "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container-fluid body">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
