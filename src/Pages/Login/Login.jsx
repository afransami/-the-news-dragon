import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import app from "../../firebase/firebase.config";

const auth =getAuth(app)

const Login = () => {
const handleLogin =(event)=>{
  event.preventDefault();
  const form = event.target;
  const email = form.email.value;
  const password = form.password.value;
  console.log(email, password);
  signInWithEmailAndPassword(auth, email, password)
  
} 

  return (
    <Container className="mx-auto w-50">
      <h3>Please Login</h3>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Login
        </Button>
        <br />
        <Form.Text className="text-secondary">
          Don't have an account? <Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
<h1>this is loging</h1>;
