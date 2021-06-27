import "./App.css";

import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import NavDropdown from "react-bootstrap/NavDropdown";
import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

import styled from "styled-components";
import NavbarHeader from "./DashboardMain/navbar/NavbarHeader.js";
import Catalog from "./Catalog/Catalog.js";
import Footer from "./DashboardMain/Footer.js";
import Dashboard from "./DashboardMain/Dashboard.js";
import PageBali from "./DashboardMain/PageBali.js";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>

          <Route path="/catalog">
            <NavbarHeader />
            <Catalog />
          </Route>
          <Route path="/pagebali">
            <PageBali />

          </Route>

          <Route path="*">
            <Redirect to="/dashboard" push={true} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
