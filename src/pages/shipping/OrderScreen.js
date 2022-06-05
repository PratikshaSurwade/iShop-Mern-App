import React, { useState, useEffect } from "react";
import { PayPalButton } from "react-paypal-button-v2";
import axios from "axios";
import { ORDER_PAY_RESET } from "../../redux/constants/orderConstant";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message";
import Loader from "../effects/loader";

const OrderScreen = () => {
  // const { orderId } = useParams();
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderCreate);
  const { order, loading, error } = orderDetails;

  const orderDetails1 = useSelector((state) => state.orderDetails);
  const { order:order1, loading:loadingDets, error:errorDets } = orderDetails1;
console.log(order1)
  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successpay } = orderPay;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  order.itemsPrice = addDecimal(
    order.orderItems.reduce((acc, item) => Number(acc) + (Number(item.price)) * (Number(item.qty)), 0)
  );
const id = (order._id);
  console.log(id);
  // -----------------------------------------------
  const initPayment = (data) => {
		const options = {
			key: "rzp_test_9oRiUh2HfSJzwy",
			amount: data.amount,
			currency: data.currency,
			order_id: data.id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:3000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
          console.log(data)
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
    console.log(data.orderId)
	};
  console.log(order.paymentResult);
  const setpayment = (id,data) => {
    // dispatch(payOrder(id,data));
  }
  const handlePayment = async () => {
    try {
      const verifyUrl = `http://localhost:3000/api/orders/${order._id}/pay`;
      const { data } = await axios.put(verifyUrl);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
	};
  console.log(order._id);
  const fetchingorder =  () => {
    console.log(id)
    dispatch(payOrder(id));
  }
  useEffect(() => {
    console.log("successpay")
    console.log(successpay)
    if (successpay) {
      console.log("successpay true inside")
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(id));
      console.log("order reset")
    }
    else{      
      console.log("order reset failed")
  }
  }, [successpay,order,id])
  
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
            {console.log(order.isPaid)}
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
                  {console.log(item)}

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
          <button onClick={fetchingorder} className="buy_btn">
					see details
				</button>

          <button onClick={handlePayment} className="buy_btn">
          confirm order
				</button>
        <button onClick={setpayment} className="buy_btn">
          place order now
				</button>
          {/* {!order.isPaid && (
            <ListGroup.Item>
              {loadingPay && <Loader />}
              {!sdkReady ? (
                <Loader />
              ) : (
                <PayPalButton
                  amount={order.totalPrice}
                  onSuccess={successPaymentHandler}
                />
              )}
            </ListGroup.Item>
          )} */}
        </Col>
      </Row>
    </>
  );
};

export default OrderScreen;
