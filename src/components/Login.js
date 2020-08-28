import React, { useState } from "react";
import "./Login.css";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "../axios";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    axios
      .post("/login", {
        email: email,
        password: password,
      })
      .then((response) => console.log(response))
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="login">
      <div className="login__container">
        <h2 className="login__title">Covid-19 Tracker</h2>
        <Form>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button
            className="login__signInButton"
            variant="primary"
            type="submit"
            onClick={handleSignIn}
          >
            Sign In
          </Button>
        </Form>
        <Link className="login__signUpLink" to="/signUp">
          Don't have account? Sign Up
        </Link>
      </div>
    </div>
  );
}

export default Login;
