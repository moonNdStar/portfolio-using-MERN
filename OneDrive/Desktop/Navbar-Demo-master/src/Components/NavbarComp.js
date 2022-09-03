import React, { Component } from 'react'
import { Navbar, NavDropdown, Container, Nav } from 'react-bootstrap'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Home from './Home';
import Contact from './Faq';
import About from './About';

export default class NavbarComp extends Component {
    render() {
        return (
           
                <div>

                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container fluid>  
                  <Navbar.Brand href="#home">D-Leaf</Navbar.Brand>
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse id="responsive-navbar-nav" className="ml-auto">
                    <Nav className="ms-auto">
                      <Nav.Link as={Link} to={"/home"} exact>
                        Home
                      </Nav.Link>
                      <NavDropdown title="Services" id="collasible-nav-dropdown">
                        <NavDropdown.Item as={Link} to={"/buy"}>Buy</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to={"/sell"}>Sell</NavDropdown.Item>
                      </NavDropdown>
                  +
                      <Nav.Link as={Link} to={"/about"}>
                        About
                      </Nav.Link>
                      <Nav.Link as={Link} to={"/faq"}>
                        FAQ
                      </Nav.Link>
                    </Nav>
                  </Navbar.Collapse>
                </Container>
              </Navbar>
                </div>
                
            
        )
    }
}
