import './App.css';

import nov from './news.png';

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
import Footer from './Main/Footer.js'

const Ft=styled.div`

  font-size:30px;
  height:665px;
  text-align:left;
  color: #d6b216;

`
const Dd=styled.div`
padding-top:30px;
padding-left:30px;
`


const App=()=> {
  return (
    <div className="App">
       <Router>
         <Switch>
           <Route path="/dashboard">
           <NavbarHeader/>
           <CarouselMain/>

           <Ft>
              <Dd>
              <img src={nov} width="40" height="40" className="d-inline-block align-top" alt="logo"/>
                News
                <p>
                _________________________________________
                </p>
              </Dd>
          </Ft>

          <Footer/>
           </Route>

           <Route path="/catalog">
             <NavbarHeader/>
             <Catalog/>
           </Route>

           <Route path="*">
            <Redirect to="/dashboard" push={true}/>
           </Route>
         </Switch>
         </Router>

     </div>

  );
}

export default App;
