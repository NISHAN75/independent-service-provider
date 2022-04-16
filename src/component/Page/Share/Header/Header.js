import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../img/logo/logo.png";
import './Header.css';

const Header = () => {
  return (
        <Navbar sticky="top" bg="light shadow-lg" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/home" className=" d-flex align-items-center font-bold">
              <img src={logo} style={{height:'50px',width:'50px'}} alt="" /> <span className="logo-name fw-bold" style={{color:'#18BA60'}}>Finance</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link} to="/home"><span className="link-text">Home</span></Nav.Link>
                <Nav.Link as={Link} to="/services"><span className="link-text">Services</span></Nav.Link>
                <Nav.Link as={Link} to="/about"><span className="link-text">About</span></Nav.Link>
                <Nav.Link as={Link} to="/blogs"><span className="link-text">Blogs</span></Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default Header;
