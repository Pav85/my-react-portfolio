import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import "./header.css";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="myContainer">
      <Navbar {...args} className="myNavbar">
        <NavbarBrand href="/" className="navBrand">
          Portfolio page
        </NavbarBrand>
        <NavbarToggler onClick={toggle} className="navbarToggler" />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/my-react-portfolio/#/" className="navLink">
                Home
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                href="/my-react-portfolio/#/projects"
                className="navLink"
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/my-react-portfolio/#/contact" className="navLink">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
