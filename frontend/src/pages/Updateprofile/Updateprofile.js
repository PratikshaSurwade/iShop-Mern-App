import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message";
import Loader from "../effects/loader.js";
import { getUserDetails , updateUserProfile } from "../../redux/actions/userAction";
import FormContainer from "../effects/FromContainer";

function Updateprofile() {


  const dispatch = useDispatch();
  const userLoggedin = useSelector((state) => state.user);
  const { userInfo } = userLoggedin;

  const userprofile = useSelector((state) => state.userDetails);
  const { loading, error, user } = userprofile;
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

  useEffect(() => {
    dispatch(getUserDetails(userInfo._id));
  
  }, [])
  
  const [username, setUsername] = useState(userInfo.username);
  const [email, setEmail] = useState(userInfo.email);
  const [password, setPassword] = useState(userInfo.password);
  const [confirmPassword, setConfirmPassword] = useState(userInfo.password);
  const [message, setMessage] = useState(userInfo.password);
  const [ profilePic, setprofilePic] = useState(userInfo.profilePic);
   const submitHandler = ()=> {
    dispatch(updateUserProfile(username, email, password ,profilePic));

   }
  return (
    <div>Updateprofile
        <FormContainer>
        <h1 style={{marginTop:"1.5rem"}}>Profile</h1>
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
            Have an
          </Col>
        </Row>
        
      </FormContainer>
    </div>
  )
}

export default Updateprofile