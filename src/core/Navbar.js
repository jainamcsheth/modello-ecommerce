import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavigationBar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-item-main">
          <Nav.Link href="#JACKETS">JACKETS</Nav.Link>
          <Nav.Link href="#SWEATERS">SWEATERS</Nav.Link>
          <Nav.Link href="#DRESSES">DRESSES</Nav.Link>
          <Nav.Link href="#SKIRTS">SKIRTS</Nav.Link>
          <Nav.Link href="#PANTS">PANTS</Nav.Link>
          <Nav.Link href="#SHORTS">SHORTS</Nav.Link>
          <Nav.Link href="#SHOES">SHOES</Nav.Link>
          <Nav.Link href="#ACCESSORIES">ACCESSORIES</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;