import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message.jsx";
import Loader from "../effects/loader.jsx";
import { login } from "../../redux/actions/userAction.jsx";
import FormContainer from "../effects/FromContainer.jsx";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const LoginScreen = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  const location = useLocation();

  const redirect = location.search ? location.search.split("=")[1] : "/";

  const dispatch = useDispatch();
  const userLogin = useSelector((state) => state.user);
  const { loading, error, user } = userLogin;

  useEffect(() => {
    if (user) {
      navigate(redirect);
    }
  }, [navigate, user, redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    dispatch(login(email, password));
  };

  return (
    <>
      <FormContainer>
        <h1 style={{ marginTop: "1.5rem" }}>SIGN IN</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {Loader}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Email Address</Form.Label>
            <Form.Control
              type="email"
              placeholder="enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button type="submit" varient="primary">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            New Customer ?
            <Link to="/register">Register
            </Link>
          </Col>
        </Row>
      </FormContainer>
    </>
  );
};

export default LoginScreen;


// export default LoginScreen;
// // import "./login.css";
// // import React from 'react';
// // import { NavLink } from 'react-router-dom';
// // export default function Login() {
// //     return (
// //         <div className="login">
// //             <span className="loginTitle">Login</span>
// //             <form className="loginForm">
// //                 <label >Email</label>
// //                 <input type="text" className="loginInput" placeholder="Enter your email..."></input>
// //                 <label >Password</label>
// //                 <input type="password" className="loginInput"   placeholder="Enter your password..."></input>
// //                 <button className="loginButton">Login</button>
// //             </form>
// //             <button className="RegisterButton"><NavLink to="/register"style={{textDecoration:"none",color:"inherit"}}>Register</NavLink></button>
// //             <button className="RegisterButton"><NavLink to="/register"style={{textDecoration:"none",color:"inherit"}}>Register</NavLink></button>

// //         </div>
// //     )
// // }