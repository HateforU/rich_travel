
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';


const NavbarCollapse=()=> {
  return (
    <div className="NavbarCollapse">
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link href="#link">Каталог</Nav.Link>
              <Nav.Link href="#link">Бронирование</Nav.Link>
              <Nav.Link href="#link">Отзывы</Nav.Link>
              <NavDropdown title="Контакты" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Instagram </NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.3">Facebook</NavDropdown.Item>
              </NavDropdown>
          </Navbar.Collapse>
     </div>

  );
}

export default NavbarCollapse;
