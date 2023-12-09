import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Signup(){

      const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setphone] = useState("");
  const [work, setwork] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitForm = () => {
    if (validateForm() && validateEmail()) {
      console.log("Form submitted:", username, email, phone, work, password);
    }
  };

  const validateForm = () => {
    if (password.length < 6) {
      alert("Password must be at least 6 characters long.");
      return false;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return false;
    }

    return true;
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);

    if (!isValid) {
      alert("Email is not valid.");
      return false; // Prevent form submission
    }

    return true; // Allow form submission
  };

    return(
            <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Form className="p-4 shadow-lg bg-white rounded">
            <div className="text-center mb-4">
              <img
                // src={logo}
                alt="Your Logo"
                className="img-fluid"
                style={{ maxHeight: "100px" }}
              />
            </div>
            <h1 className="mb-4 text-center">Sign Up</h1>

            <Form.Group controlId="formUsername" className="mb-3 input-box">
              <Form.Control
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
                className="rounded-start"
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                <i className="bi bi-person" />
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formEmail" className="mb-3 input-box">
              <Form.Control
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="rounded-start"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid email address.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                <i className="bi bi-mail-send" />
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formphone" className="mb-3 input-box">
              <Form.Control
                type="text"
                placeholder="number"
                value={phone}
                onChange={(e) => setphone(e.target.value)}
                required
                className="rounded-start"
              />
              <Form.Control.Feedback type="invalid">
                Please enter a valid phone number.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                <i className="bi bi-mail-send" />
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formPassword" className="mb-3 input-box">
              <Form.Control
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="rounded-start"
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 6 characters long.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                <i className="bi bi-lock-open-alt" />
              </Form.Text>
            </Form.Group>

            <Form.Group
              controlId="formConfirmPassword"
              className="mb-3 input-box"
            >
              <Form.Control
                type="password"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="rounded-start"
              />
              <Form.Control.Feedback type="invalid">
                Passwords do not match.
              </Form.Control.Feedback>
              <Form.Text className="text-muted">
                <i className="bi bi-lock-open-alt" />
              </Form.Text>
            </Form.Group>

            <Button
              variant="primary"
              type="button"
              className="btn w-100"
              onClick={submitForm}
            >
              Sign Up
            </Button>

            <Form.Text className="register-link mt-3 text-center">
              <p className="mb-0">
                Already have an account?{" "}
                < Link
                  to='/login'
                  className="text-decoration-none"
                >
                  Login
                </Link>
              </p>
            </Form.Text>
          </Form>
        </Col>
      </Row>
    </Container>
    );
}