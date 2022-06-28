import React, { useState, useEffect } from "react";
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
  const [ profilePic, setprofilePic] = useState("");


  let navigate = useNavigate ();
  const location = useLocation();
  // const redirect = location.pathname;

  console.log(location)
  const redirect = (location.pathname+"/redirect") ? location.pathname.split("=")[1] : "/";
  console.log(redirect)

  const dispatch = useDispatch();
  const userRegister = useSelector((state) => state.userRegister);
  const { loading, error, userInfo } = userRegister;

  const [loader, setloader] = useState(false)

  const uploadImage = async e => {
    const files = e.target.files
    const data = new FormData()
    data.append('file', files[0])
    data.append('upload_preset', 'ishop_profiles')
    setloader(true)
    const res = await fetch(
      '	https://api.cloudinary.com/v1_1/dn9hxyxud/image/upload',
      {
        method: 'POST',
        body: data
      }
    )
    const file = await res.json()

    setprofilePic(file.secure_url);
    setloader(false);
  }
  // 

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
      dispatch(register(username, email, password ,profilePic));
    }
  };
console.log(profilePic);
  return (
    <>
      <FormContainer>
        <h1 style={{marginTop:"1.5rem"}}>Register</h1>
        {error && <Message varient="danger">{error}</Message>}
        {loading && <Loader />}
        {message && <Message variant="danger">{message}</Message>}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="name">
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
          <Form.Group controlId="confirmPassword">
            <Form.Label>Choose File For Profile Picture</Form.Label>
            <Form.Control
              type="file"
              name="file"
              placeholder="Upload an image"
              onChange={uploadImage}
            ></Form.Control>
            {loader ? (
              <>
        <h3>Loading...</h3>
        <h6>Kindly wait for Preview...</h6>
        </>
      ) : (
        <img src={profilePic} style={{ width: '300px' }} />
      )}
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