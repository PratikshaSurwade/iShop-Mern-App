import React, { useState, useEffect } from "react";
// import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { ORDER_PAY_RESET } from "../../redux/constants/orderConstant";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message";
import Loader from "../effects/loader";
import { useLocation } from 'react-router-dom';

const OrderScreen = () => {
  // const { orderId } = useParams();
  const location = useLocation();
  const path = (location.pathname.split("/")[3]);
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderDetails);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  // order.itemsPrice = addDecimal(
  //   order.orderItems.reduce((acc, item) => Number(acc) + (Number(item.price)) * (Number(item.qty)), 0)
  // );
  // const id = (order._id);
  // const totalprice = order.totalPrice *100;
  //   console.log(id);
  // console.log(order.paymentResult)

  const [successs, setSuccess] = useState(false);
  const [paid, setPaid] = useState(false);


  // -----------------------------------------------
//important function
  // const handlePayment = async () => {
  //   try {
  //     const verifyUrl = `http://localhost:3000/api/orders/${path}/pay`;
  //     const { data } = await axios.put(verifyUrl);
  //     console.log(data)
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const makePayment = (info) => {
    console.log(info)
    const options = {
      key: "rzp_test_9oRiUh2HfSJzwy",
      amount: info.totalPrice,
      currency: info.currency,
      order_id: info.id,
      handler: async (response) => {
        try {
          const verifyUrl = "http://localhost:3000/api/payment/verify";
          const { data } = await axios.post(verifyUrl, response);
          console.log(data);
          setSuccess(data.success);
          setPaid(true);
          console.log("Payment Verified Succeessfully");
        } catch (error) {
          console.log("Payment Verification Failed")
          console.log(error);
        }
      },
      theme: {
        color: "#3399cc",
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();

  };
  const setpayment = () => {
    const info = (order.paymentResult);
    console.log(info);
    makePayment(info);
  }

  console.log(path);
  const fetchingorder = () => {
    dispatch(payOrder(path));
  }
  console.log(!order,success,successs);

  useEffect(() => {
    if(paid){
      console.log("inside sucess")
      dispatch(payOrder(path));
      dispatch(getOrderDetails(path));
      setPaid(false);
    }
    if (!order || success) {
      dispatch({ type: ORDER_PAY_RESET });
      console.log("inside !order")
      dispatch(getOrderDetails(path));
    }
    
    console.log("success")
    console.log(success);
  }, [success, order, path, successs,paid])

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <>
      {console.log(order)}

      <h2>Order {order._id}</h2>
      <Row>
        <Col md={8}>
          <ListGroup.Item variant="flush">
            <h2>Shipping</h2>
            <p>
              <strong>Name : </strong>
              {userInfo.username}
            </p>
            <p>
              <strong>Email : </strong>
              {userInfo.email}
            </p>
            <p>
              <strong>Address :</strong>
              {order.shippingAddress.address};
              {order.shippingAddress.city}&nbsp;
              {order.shippingAddress.postalcode}&nbsp;
              {order.shippingAddress.country}&nbsp;
            </p>
            {order.isDeliverd ? (
              <Message variant="success">Paid On {order.isDeliverd}</Message>
            ) : (
              <Message variant="danger">Not Deliverd</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Payment Method</h2>
            <p>
              <strong>Method :</strong>
              <strong>{order.paymentMethod}</strong>
            </p>
            {order.isPaid ? (
              <Message variant="success">Paid On {order.paidAt}</Message>
            ) : (
              <Message variant="danger">Not Paid</Message>
            )}
          </ListGroup.Item>
          <ListGroup.Item>
            <h2>Order Items</h2>
            {/* {order.orderItems.length === 0 ? (
              <Message>Your Cart is Empty</Message>
            ) : ( */}
            <ListGroup variant="flush">
              {order.orderItems.map((item, index) => (
                <ListGroup.Item key={index}>
                  <Row>
                    <Col md={1}>
                      <Image src={item.imageUrl} alt={item.name} fluid />
                    </Col>
                    <Col>
                      <Link to={`/api/product/${item.product}`}>{item.name}</Link>
                    </Col>
                    <Col md={4}>
                      {item.qty} X Rs.{item.price} = Rs.{item.price}
                    </Col>
                  </Row>
                  {/* {console.log(item)} */}

                </ListGroup.Item>
              ))}
            </ListGroup>
            {/* )} */}
          </ListGroup.Item>
        </Col>
        <Col md={4}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h2>Order Summary</h2>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Items</Col>
                  <Col>Rs.{order.itemsPrice}</Col>
                </Row>
                <Row>
                  <Col>Shipping</Col>
                  <Col>Rs.{order.shippingPrice}</Col>
                </Row>
                <Row>
                  <Col>Tax</Col>
                  <Col>Rs.{order.taxPrice}</Col>
                </Row>
                <Row>
                  <Col>Total</Col>
                  <Col>Rs.{order.totalPrice}</Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                {error && <Message variant="danger">{error}</Message>}
              </ListGroup.Item>
            </ListGroup>
          </Card>
         {(!order.isPaid)? 
         <button onClick={setpayment} className="buy_btn">
            makePayment
          </button>: 
          <button onClick={setpayment} disabled className="buy_btn">
            makePayment
          </button>}
          <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_JeDaUBJzpYKfJq" async> </script> </form>
          {/* <button onClick={fetchingorder} className="buy_btn">
            confirm order
          </button> */}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
