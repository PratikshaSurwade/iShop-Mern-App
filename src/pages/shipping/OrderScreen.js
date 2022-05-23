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
  const { orderId } = useParams();
  const [sdkReady, setSdkReady] = useState(false);
  const dispatch = useDispatch();

  const orderDetails = useSelector((state) => state.orderCreate);
  const { order, loading, error } = orderDetails;

  const orderPay = useSelector((state) => state.orderPay);
  const { loading: loadingPay, success: successpay } = orderPay;
  // if (!loading) {
  //   Calculate prices
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  order.itemsPrice = addDecimal(
    order.orderItems.reduce((acc, item) => Number(acc) + (Number(item.price)) * (Number(item.qty)), 0)
  );
  // }

  const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult);
    dispatch(payOrder(orderId, paymentResult));
  };

  useEffect(() => {
    const addPaypalScript = async () => {
      const { data: clientId } = await axios.get("/api/config/paypal");
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = `https://www.paypal.com/sdk/js?client-id=${clientId}`;
      script.async = true;
      script.onload = () => {
        setSdkReady(true);
      };
      document.body.appendChild(script);
    };
    if (!order || successpay) {
      dispatch({ type: ORDER_PAY_RESET });
      dispatch(getOrderDetails(orderId));
    } else if (!order.isPaid) {
      if (!window.paypal) {
        addPaypalScript();
      } else {
        setSdkReady(true);
      }
    }
  }, [dispatch, orderId, order, successpay]);
  // -----------------------------------------------
  const initPayment = (order) => {
		const options = {
			key: "rzp_test_9oRiUh2HfSJzwy",
			amount: order.totalPrice*100,
			// currency: order.currency,
			// name: order.name,
			// description: "Test Transaction",
			// image: order.img,
			// order_id: order._id,
			handler: async (response) => {
				try {
					const verifyUrl = "http://localhost:7000/api/payment/verify";
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
				} catch (error) {
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};
    console.log(options)
		const rzp1 = new window.Razorpay(options);
		rzp1.open();
    console.log("payment succeessful")
	};      console.log( order.totalPrice)

  const handlePayment = async () => {
		// try {
		// 	const orderUrl = "http://localhost:7000/api/payment/orders";
    //   console.log( order.totalPrice)
		// 	const { data } = await axios.post(orderUrl, { amount:  order.totalPrice });
			console.log(order);
			initPayment(order);
		// } catch (error) {
		// 	console.log(error);
		// }
	};

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
              {/* {order.user.name} */}
            </p>
            <p>
              <strong>Email : </strong>
              {/* {order.user.email} */}
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
          <button onClick={handlePayment} className="buy_btn">
          buy now
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
