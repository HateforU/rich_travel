import logo from "./travel_logo.png";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import NavbarCollapse from "./NavbarCollapse.js";

import styled from "styled-components";

const StyledNavbar = styled(Navbar)`
  /* position: fixed;
  top: 0;
  width: 100%;
  z-index: 1; */
`;

const NavbarHeader = () => {
  return (
    <StyledNavbar bg="light">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Brand href="#home">Travel</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Nav className="ml-auto">
        <NavbarCollapse />
      </Nav>
    </StyledNavbar>
  );
};

export default NavbarHeader;
