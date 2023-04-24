import React from "react";
import logo from "../../../assets/logo.png";
import personLogo from "../../../assets/person-circle.svg";
import { Button, Container, Image, Nav, Navbar } from "react-bootstrap";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { FaUserAlt, FaUserCircle } from "react-icons/fa";

const Header = () => {
  return (
    <Container>
      <div className="text-center">
        <img className="mt-4" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
      <div className="d-flex bg-secondary bg-opacity-10">
        <Button variant="danger fs-3 fw-bold">Latest</Button>
        <Marquee className="fw-bold fs-3" speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

      <Navbar className="mt-3" collapseOnSelect expand="lg" bg="white" variant="white">
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold fs-5">
              <Nav.Link href="#features">Home</Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex align-items-center">
                <Link className="fs-2 text-black" >
              <FaUserCircle/>               
              </Link>             
              <Nav.Link eventKey={2} href="#memes">
                <Button variant="secondary" className="bg-dark text-white fw-bold">Login</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
