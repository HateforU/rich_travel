import logo from './travel_logo.png';
import picture1 from './luxary1.jpg';
import picture2 from './luxary3.jpg';
import picture3 from './luxary5.jpg';
import './App.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'

const App=()=> {
  return (
    <div className="App">

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
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="#home">Главная</Nav.Link>
              <Nav.Link href="#link">Каталог</Nav.Link>
              <Nav.Link href="#link">Бронирование</Nav.Link>
              <Nav.Link href="#link">Отзывы</Nav.Link>
              <NavDropdown title="Контакты" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Twitter</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Instagram </NavDropdown.Item>
                <NavDropdown.Item  href="#action/3.3">Facebook</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
         </Navbar>

         <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={picture1}
              alt="First slide"

            />
           <Carousel.Caption>
            <h3></h3>
            <p>Мы знаем о каком отдыхе Вы мечтаете.</p>
           </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img
              className="d-block w-100 "
              src={picture2}
              alt="First slide"
            />
           <Carousel.Caption>
            <h3></h3>
            <p>Мы знаем как потратить Ваши деньги.</p>
           </Carousel.Caption>
         </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 "
            src={picture3}
            alt="First slide"
          />
         <Carousel.Caption>
          <h3></h3>
          <p>Доверьте свои деньги и отдых проффесионалам.Ждем тебя.</p>
         </Carousel.Caption>
        </Carousel.Item>
       </Carousel>



     </div>
  );
}

export default App;
