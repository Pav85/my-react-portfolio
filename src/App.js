import React from "react";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";
import Footer from "./components/Footer/Footer";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import "./components/fonts.css";

function App() {
  //   const navSettings = {
  //     color: "danger",
  //     expand: true,
  //   };

  return (
    <div>
      <Router className="body">
        <Header
        // args={navSettings}
        />
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/home/" element={<HomePage />} />
          <Route exact path="/projects/" element={<ProjectsPage />} />
          <Route exact path="/contact/" element={<ContactPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
