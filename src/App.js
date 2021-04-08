import './App.css';

import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import Carousel from 'react-bootstrap/Carousel'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

import styled from 'styled-components'
import NavbarHeader from './Main/navbar/NavbarHeader.js'
import CarouselMain from './Main/CarouselMain.js'
import Catalog from './Catalog/Catalog.js'

const Ft=styled.div`
  background:#b41dc3;
`

const App=()=> {
  return (
    <div className="App">
    <NavbarHeader/>
    <CarouselMain/>
    <Router>
      <Switch>
        <Route path='/catalog'>
          <Catalog/>
        </Route>
      </Switch>
  </Router>

       <Ft>
       Player
       </Ft>

     </div>

  );
}

export default App;
