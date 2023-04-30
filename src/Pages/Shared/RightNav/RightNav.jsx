import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaGithub,
  FaGoogle,
  FaInstagramSquare,
  FaTwitter,
} from "react-icons/fa";
import image1 from "../../../assets/qZone1.png";
import image2 from "../../../assets/qZone2.png";
import image3 from "../../../assets/qZone3.png";
import image4 from "../../../assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import './RightNav.css'


const RightNav = () => {
  const {googleSignIn, githubSignIn}= useContext(AuthContext)

  const handleGoogleLogin = ()=>{
    googleSignIn()
    .then (result =>{
      const user = result.user;
      console.log(user);
    })
    .catch (error=> console.error(error))  
  }

  const handleGithubSignIn = ()=>{
    githubSignIn()
    .then (result =>{
      const user = result.user; 
      console.log(user);       
    })
    .catch (error =>{
      console.error(error);
    })
  }
  return (
    <div className="text-start">
      <h4 className="fw-bold mt-3">Login With</h4>
      <Button onClick={handleGoogleLogin} className="mb-2" variant="outline-primary">
        {" "}
        <FaGoogle /> Login with Google
      </Button>
      <Button onClick={handleGithubSignIn} variant="outline-secondary">
        {" "}
        <FaGithub /> Login with Github
      </Button>

      <div className="mt-3">
        <h4 className="fw-bold">Find Us on</h4>
        <ListGroup className="fw-bold">
          <ListGroup.Item>
            {" "}
            <FaFacebookSquare /> Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaTwitter /> twitter
          </ListGroup.Item>
          <ListGroup.Item>
            {" "}
            <FaInstagramSquare /> instagram
          </ListGroup.Item>
        </ListGroup>
      </div>      
      <div className="bg-success bg-opacity-10 py-2 my-4">
        <h4 className="fw-bold mt-3">Q-Zone</h4>
        <div></div>
        <img className="mb-2" src={image1} alt="" />
        <img className="mb-2" src={image2} alt="" />
        <img className="mb-2" src={image3} alt="" />
      </div>
      <div className="text-white text-center pb-5 rounded rigthNav">
              
        <h2 className="pt-5">Create an <br /> Amazing <br /> Newspaper</h2><br />
        <p>Discover thousands of <br /> options, easy to <br /> customize layouts, one-click <br /> to import demo and much more.</p><br />
        <Button variant="danger">Learn More</Button>{' '}
       
      </div>
    </div>
  );
};

export default RightNav;
