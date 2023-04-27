
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import app from '../../firebase/firebase.config';
const auth = getAuth(app);

const Register = () => {
  const [error, setErorr]=useState('');
  const [success, setSuccess]=useState('');
  
  const handleRegister =(event)=>{    
    //1. Prevent page refresh
    event.preventDefault();
    setSuccess('')
    //2. Collecting form Data
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password= form.password.value;    
    console.log(name, email, password)    

    //3. fb authentication
    createUserWithEmailAndPassword(auth, email, password)
    .then (result =>{
      const loggedUser = result.user;
      console.log(loggedUser)
      setSuccess('Registered successfully')
      setErorr('')
      form.reset()
    })
    .catch(error =>{
      console.error(error.message);
      setErorr(error.message)      
    })
  }



    
    return (
        <Container className="mx-auto w-50">
        <h3>Please Register</h3>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />          
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" required />          
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" name="password" placeholder="Password" required/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Accept terms and Conditions" />
        </Form.Group>
        <Button className='w-' variant="primary" type="submit">
          Register
        </Button><br />
        <Form.Text className="text-secondary">            
        Already have an account? <Link to='/login'>Login</Link>
            
          </Form.Text>
        <Form.Text>
            <p className="fw-bold text-danger">{error}</p>
            <p className="fw-bold text-success">{success}</p>
          </Form.Text>
      </Form>
    </Container>
    );
};

export default Register;<h1>This is register</h1>