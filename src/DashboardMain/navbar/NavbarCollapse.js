import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

import styled from 'styled-components';

const StyledMail=styled.div`
color:rgb(0, 0, 0);

`

const StyledNavDropdown=styled.div`
text-align:center;

`


const NavbarCollapse = () => {
  return (
    <div className="NavbarCollapse">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav.Link href="/dashboard">Home</Nav.Link>
        <Nav.Link href="/catalog">Catalog</Nav.Link>
        <Nav.Link href="#link">Booking</Nav.Link>
        <NavDropdown title="Contact" id="basic-nav-dropdown">
          <StyledNavDropdown>
            <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Instagram </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Facebook</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.4">
                <a href="mailto:gajdukz@mail.ru">
                  <StyledMail>
                  Mail
                  </StyledMail>
                </a>
            </NavDropdown.Item>
          </StyledNavDropdown>
        </NavDropdown>
      <Nav.Link href="#link">Rewiews</Nav.Link>
      </Navbar.Collapse>
    </div>
  );
};

export default NavbarCollapse;
