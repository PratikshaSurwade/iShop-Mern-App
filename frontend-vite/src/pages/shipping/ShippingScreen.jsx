import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import FromContainer from "../effects/FromContainer";
import { useNavigate } from "react-router-dom";


const ShippingScreen = () => {

  const cart = useSelector((state) => state.cart);
  let navigate = useNavigate();
  // const { shippingAddress } = cart;
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [postalcode, setPostalcode] = useState("");
  const [country, setCountry] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      cart.shippingAddress = { address, city, postalcode, country };
    } catch (err) { console.log(err) }
    navigate("/placeorder");
  };

  return (
    <>
      {/* <CheckoutStep step1 step2 /> */}
      <FromContainer>
        <h2 style={{ marginTop: "3rem" }}>Shipping Details </h2>

        <Form onSubmit={submitHandler}>
          <Form.Group controlId="address">
            <Form.Label style={{ marginTop: "1rem" }}>Address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Address"
              // value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="city">
            <Form.Label>City</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter City"
              // value={city}
              onChange={(e) => setCity(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="postalcode">
            <Form.Label>PostalCode</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter postalcode"
              // value={postalcode}
              onChange={(e) => setPostalcode(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="country">
            <Form.Label>Country</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Country"
              // value={country}
              onChange={(e) => setCountry(e.target.value)}
              required
            ></Form.Control>
          </Form.Group>
          <Button type="submit" variant="primary">
            Continue
          </Button>
        </Form>
      </FromContainer>
    </>
  );
};

export default ShippingScreen;
