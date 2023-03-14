import React from "react";
import "./header.css";

function Header() {
  return (
    <div className="myContainer">
      <nav className="navbar navbar-expand-lg bg-body-tertiary myNavbar">
        <div className="container-fluid">
          <a
            className="navbar-brand navBrand"
            href="/my-react-portfolio/#/home"
          >
            Portfolio page
          </a>
          <button
            className="navbar-toggler navbarToggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggler"
            aria-controls="navbarToggler"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarToggler">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active navLink"
                  aria-current="page"
                  href="/my-react-portfolio/#/home"
                >
                  &nbsp;&nbsp;Home&nbsp;&nbsp;
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navLink"
                  href="/my-react-portfolio/#/projects"
                >
                  &nbsp;&nbsp;Projects&nbsp;&nbsp;
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link navLink"
                  href="/my-react-portfolio/#/contact"
                >
                  &nbsp;&nbsp;Contact&nbsp;&nbsp;
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Header;
