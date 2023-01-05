import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import logo from'../Image/logo/logo.svg';

const Header = () => {
    return (
        <Navbar bg="light" variant="light">
            <Container>
                <Navbar.Brand href="#home">
                  <img className='w-25' src={logo} />
                </Navbar.Brand>
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