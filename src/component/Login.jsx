
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, InputGroup, Alert } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { NavigationBar } from './Navigationbar';
import { login } from '../services/AdminService';

export function Login(){

const navigate =   useNavigate();

    const [ formdata , setFormData ] = useState({email : "", password:""})
  
    const [loginError , setLoginError] = useState( false );

    const handleChange = ( e )=>{
      setFormData({ ...formdata , [e.target.name]: e.target.value})
      console.log("setting state");
    }
    const handleSubmit = async (e)=>{
      e.preventDefault();
      try {
      
       const result =  await login(formdata);
       console.log( result );
       // set token into browser
       localStorage.setItem( "token" , result.token );

       // now redirect user to dashboard
       navigate('/dashboard');
      } catch (error) {
        console.log(error);
        setLoginError( true );
      }
    }
  
   

    return(
      <>
       <NavigationBar></NavigationBar>
     
            <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <h1 className="mb-4 text-center">Login</h1>

            <Form.Group controlId="formUsername" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="enter email"
                  
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
                <InputGroup.Text className="rounded-end">
                  <i className="bi bi-person" />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3">
              <InputGroup>
                <Form.Control
                  type="password"
                  name="password"
                  placeholder="Password"
                  
                  onChange={handleChange}
                  required
                  className="rounded-start"
                />
                <InputGroup.Text className="rounded-end">
                  <i className="bi bi-lock" />
                </InputGroup.Text>
              </InputGroup>
            </Form.Group>

            <Form.Group controlId="formRemember" className="mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <Form.Text>
                <a href="#" className="text-decoration-none text-muted">
                  Forgot password
                </a>
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="button" className="btn w-100" onClick={handleSubmit}>
              Login
            </Button>

            <Form.Text className="register-link mt-3 text-center">
              <p className="mb-0">
                Don't have an account? <Link to="/signup" className="text-decoration-none">Register</Link>
              </p>
            </Form.Text>
          </Form>
          {loginError ? <Alert variant='danger' className='mt-4'>Invalid email or password</Alert>: null}
        </Col>
      </Row>
    </Container>
     </>
    );
}