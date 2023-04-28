import React, { useContext } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";

const Navigation = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
     logOut()
    .then ((result) => {})
    .catch ((error) => console.error(error.message));
          
  };
  return (
    <Container>
      <Navbar
        className="mt-3"
        collapseOnSelect
        expand="lg"
        bg="white"
        variant="white"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto fw-bold fs-5 text-black">
              <Link
                className="text-decoration-none text-black"
                to="/category/0"
              >
                Home
              </Link>
              <Link
                className="mx-4 text-decoration-none text-black"
                to="/about"
              >
                About
              </Link>
              <Link className="text-decoration-none text-black" to="/career">
                Career
              </Link>
            </Nav>
            <Nav className="d-flex align-items-center">
              {user && (
                <FaUserCircle className="fs-1 text-primary text-decoration-none" />
              )}

              {user && <p className="text-success fw-bold mx-2"> <span>Welcome</span> <br /> {user ? user.email : user.name}</p>}
              {user ? (
                <Button
                  onClick={handleLogOut}
                  variant="secondary"
                  className="bg-dark text-white fw-bold"
                >
                  Logout
                </Button>
              ) : (
                <Link to="/login">
                  <Button
                    variant="secondary"
                    className="bg-dark text-white fw-bold"
                  >
                    Login
                  </Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Navigation;
