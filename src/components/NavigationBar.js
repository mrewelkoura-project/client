import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" sticky="top">
        <Container>
          <Link to="/">
            <Navbar.Brand>
              <img
                src="/images/a.png"
                width="80"
                height="80"
                style={{ borderRadius: 10 }}
                className="d-inline-block align-top"
                alt="Mrewel Koura Logo"
              />
            </Navbar.Brand>
          </Link>

          <Nav className="me-auto">
            <Link to="/aboutus">
              <li>About Us</li>
            </Link>
            <Link to="/contact">
              <li>Features</li>
            </Link>
            <Link to="/cart">
              <li>Pricing</li>
            </Link>
            <Link to="/addJersey">
              <li>add new jersey</li>
            </Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
