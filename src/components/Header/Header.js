// import React from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-light bg-light">
//       {/* <a className="navbar-brand" href="#">
//         Navbar
//       </a> */}
//       <button
//         className="navbar-toggler"
//         type="button"
//         datatoggle="collapse"
//         datatarget="#navbarNavAltMarkup"
//         ariacontrols="navbarNavAltMarkup"
//         ariaexpanded="false"
//         arialabel="Toggle navigation"
//       >
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
//         <div className="navbar-nav">
//           <a className="nav-link" href="#">
//             {/* Home <span className="sr-only">(current)</span> */}
//             <NavLink
//               to="/"
//               end
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Home
//             </NavLink>
//           </a>
//           <a className="nav-link" href="#">
//             <NavLink
//               to="projects"
//               end
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Projects
//             </NavLink>
//           </a>
//           <a className="nav-link" href="#">
//             <NavLink
//               to="contacts"
//               end
//               className={({ isActive }) =>
//                 isActive ? "nav-link active" : "nav-link"
//               }
//             >
//               Contact
//             </NavLink>
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Header;

import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
  // NavbarText,
} from "reactstrap";
import "./header.css";

function Header(args) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar {...args} className="myNavbar">
        <NavbarBrand href="/" className="navBrand">
          My portfolio page
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="me-auto" navbar>
            <NavItem>
              <NavLink href="/projects/">Projects</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/contact/">Contact</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">
                GitHub
              </NavLink>
            </NavItem> */}
            {/* <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Option 1</DropdownItem>
                <DropdownItem>Option 2</DropdownItem>
                <DropdownItem divider />
                <DropdownItem>Reset</DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown> */}
          </Nav>
          {/* <NavbarText>Simple Text</NavbarText> */}
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;

// export default Example;
