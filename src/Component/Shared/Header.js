import React from 'react';
import { Container, Navbar, Nav} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar bg="dark" variant="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="mx-end fw-bold">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#service">Service</Nav.Link>
            <Nav.Link href="#design">Design</Nav.Link>
            <Nav.Link href="#shop">Shop</Nav.Link>
            <Nav.Link href="#aboutus">About Us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
};

export default Header;