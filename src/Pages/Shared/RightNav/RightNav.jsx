import React from "react";
import { Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { FaFacebookSquare, FaGithub, FaGoogle, FaInstagramSquare, FaTwitter } from "react-icons/fa";

const RightNav = () => {
  return (
    <div className="text-start">
      <h4 className="fw-bold mt-3">Login With</h4>
      <Button className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>

      <div className="mt-3">
        <h4 className="fw-bold">Find Us on</h4>
      <ListGroup className="fw-bold">
      <ListGroup.Item> <FaFacebookSquare/>  Facebook</ListGroup.Item>
      <ListGroup.Item> <FaTwitter/> twitter</ListGroup.Item>            
      <ListGroup.Item> <FaInstagramSquare/> instagram</ListGroup.Item>      
    </ListGroup>
      </div>
    </div>
  );
};

export default RightNav;
