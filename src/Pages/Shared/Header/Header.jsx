import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import { Button, Container} from "react-bootstrap";
import moment from "moment";
import Marquee from "react-fast-marquee";



const Header = () => {

  return (
    <Container>
      <div className="text-center">
        <img className="mt-4 img-fluid" src={logo} alt="" />
        <p>
          <small>Journalism Without Fear or Favor</small>
        </p>
        <h4>{moment().format("dddd, MMMM D, YYYY")}</h4>
      </div>
      <div className="d-flex bg-success bg-opacity-10 rounded">
        <Button variant="danger fs-3 fw-bold">Latest</Button>
        <Marquee className="fw-bold fs-3" speed={50}>
          I can be a React component, multiple React components, or just some
          text.
        </Marquee>
      </div>

    
    </Container>
  );
};

export default Header;
