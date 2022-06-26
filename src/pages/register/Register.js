import React, { useState, useEffect ,useRef} from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message";
import Loader from "../effects/loader.js";
import { register } from "../../redux/actions/userAction";
import FormContainer from "../effects/FromContainer";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./register.css";

const RegisterScreen = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate ();
  const location = useLocation();
  // const redirect = location.pathname;

  console.log(location)
  const redirect = (location.pathname+"/redirect") ? location.pathname.split("=")[1] : "/";
  console.log(redirect)

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const fileInput = useRef(null);
    const selectFile = () => {
        fileInput.current.click();
        
    }

  useEffect(() => {
    if (userInfo) {
      navigate("/login");
    }
  }, [navigate, userInfo,redirect]);

  const submitHandler = (e) => {
    e.preventDefault();
    //dispatch
    if (password !== confirmPassword) {
      setMessage("Password do not macth");
    } else {
      dispatch(register(username, email, password));
    }
  };

  return (
    <>
      <FormContainer>
        <h1>Register</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="email">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="enter Name"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            ></Form.Control>
          </Form.Group>
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
          <Form.Group controlId="confirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Re-enter password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="uploadphoto">
            <Form.Label>uploadphoto</Form.Label>
            <input type="file" style={{ "display": "none" }} ref={fileInput} />
            <button onClick={selectFile} className='btn btn-primary' >
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-cloud-upload m-1" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z" />
                    <path fill-rule="evenodd" d="M7.646 4.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V14.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3z" />
                </svg>
                <span className='ms-2' >Upload</span>
            </button>
          </Form.Group>
          <Button type="submit" varient="primary">
            SING IN
          </Button>
        </Form>
        <Row>
          <Col>
            Have an account !
            <Link to={redirect ? `login?redirect=${redirect}` : "/login"}>
              Login
            </Link>
          </Col>
        </Row>
      </FormContainer>
    
      {/* <button className="LoginButton"><NavLink to="/login"style={{textDecoration:"none",color:"inherit"}}>Login</NavLink></button> */}

    </>
  );
};

export default RegisterScreen;
// import "./register.css";
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// export default function Register() {
//     return (
//         <div className="register">
//             <span className="registerTitle">Register</span>
//             <form className="registerForm">
//                 <label >Username</label>
//                 <input type="text" className="registerInput" placeholder="Enter your Username..."></input>
                
//                 <label >Email</label>
//                 <input type="text" className="registerInput" placeholder="Enter your email..."></input>
//                 <label >Password</label>
//                 <input type="password" className="registerInput"   placeholder="Enter your password..."></input>
//                 <button className="registerButton">Register</button>
//             </form>
//             <button className="LoginButton"><NavLink to="/regiter"style={{textDecoration:"none",color:"inherit"}}>Login</NavLink></button>
//         </div>
//     )
// }