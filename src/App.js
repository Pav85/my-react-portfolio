import React from "react";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";

function App() {
  return (
    <div>
      <Router basename="/">
        <div className="body">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          {/* <HomePage /> */}
        </div>
      </Router>
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
