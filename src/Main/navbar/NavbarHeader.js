import logo from './travel_logo.png';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import NavbarCollapse from './NavbarCollapse.js'

const NavbarHeader=()=> {
  return (
    <div className="NavbarHeader">
    <Navbar bg="light">
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
        <NavbarCollapse/>
      </Nav>
     </Navbar>
     </div>

  );
}

export default NavbarHeader;
