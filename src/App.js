import React from "react";
import "./App.css";
// import "./components/HomePage/HomePage";
import HomePage from "./components/HomePage/HomePage";
import ContactPage from "./components/ContactPage/ContactPage";
import Header from "./components/Header/Header";
import ProjectsPage from "./components/ProjectsPage/ProjectsPage";

function App() {
  return (
    <div>
      <Header />
      <HomePage />
      <ContactPage />
      <ProjectsPage />
    </div>
  );
}

export default App;
