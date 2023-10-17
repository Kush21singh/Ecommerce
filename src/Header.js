import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Header.css'; // Import a CSS file for custom styles

const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto custom-nav"> {/* Apply custom styles using a class */}
              <Nav.Link className="custom-link" href="#home">Home</Nav.Link>
              <Nav.Link className="custom-link" href="#store">Store</Nav.Link>
              <Nav.Link className="custom-link" href="#about">About</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link className="custom-cart-link" href="#cart">Cart 0</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="header-heading">
        <h1>The Generics</h1>
      </div>
    </div>
  );
};

export default Header;
