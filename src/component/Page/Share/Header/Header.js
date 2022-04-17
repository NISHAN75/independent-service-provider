import React from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../../../img/logo/logo.png";
import './Header.css';
import auth from "../../../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";

const Header = () => {
const [user]=useAuthState(auth);
const handlelogOut=()=>{
  signOut(auth)
}
  return (
        <Navbar sticky="top" bg="light shadow-lg" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/home" className=" d-flex align-items-center font-bold">
              <img src={logo} style={{height:'50px',width:'50px'}} alt="" /> <span className="logo-name fw-bold" style={{color:'#18BA60'}}>Finance</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mx-auto">
                <Nav.Link as={Link}  to="/home"><span className="link-text">Home</span></Nav.Link>
                <Nav.Link as={Link}  to="/services"><span className="link-text">Services</span></Nav.Link>
                <Nav.Link as={Link} to="/about"><span className="link-text">About</span></Nav.Link>
                <Nav.Link as={Link} to="/blogs"><span className="link-text">Blogs</span></Nav.Link>
                {
                 user ? 
                 <Button onClick={handlelogOut}  style={{backgroundColor:"#18BA60",marginLeft:"30px"}}>log out</Button> 
                 :
                  <Nav.Link as={Link} to="/login"><span className="link-text">Login</span></Nav.Link>
                }
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
  );
};

export default Header;
