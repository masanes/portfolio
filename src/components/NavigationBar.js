import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: #222; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: red;
    &:hover { color: white; }
    font-family: 'Press Start 2P', cursive;
    font-size: .9em;
  }
  .navbar-brand {
    font-size: 1.2em;
    font-family: 'Press Start 2P', cursive;
    color: yellow;     // color: #9FFFCB; original font color turqouise 
    &:hover { color: white; }
    margin-left: 4.5rem;
  }
  .form-center {
    position: absolute;
    left: 25%;
    right: 25%;
  }
`;
export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/">Aaron Masanes</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
   
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/portfolio">Portfolio</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/resume">Resume</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/contact">Contact</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)