import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavigationBar.css"

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container className="navContainer">
          <Link to="/">
            <Navbar.Brand>
              <img
                src="/images/a.png"
                width="100"
                height="100"
                style={{ borderRadius: 10 }}
                className="d-inline-block align-top"
                alt="Mrewel Koura Logo"
              />
            </Navbar.Brand>
          </Link>

          <Nav className="me-auto navlist">
            <Nav.Link href="/aboutus">
              <li>About Us</li>
            </Nav.Link>
            <Nav.Link href="/contact">
              <li>Features</li>
            </Nav.Link>
            <Nav.Link href="/cart">
              <li>Pricing</li>
            </Nav.Link>
            <Nav.Link href="/addJersey">
              <li>add new jersey</li>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>


      
    </div>
  );
};

export default NavigationBar;
