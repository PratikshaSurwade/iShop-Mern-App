import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Row, Col, ListGroup, Image, Card, Container } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { getOrderDetails, payOrder } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import Message from "../effects/Message";
import Loader from "../effects/loader";
import baseUrl from "../path/Baseurl";
import loadRazorpay from "../path/loadRazorpay";

const OrderScreen = () => {
	const { orderId } = useParams();
	const dispatch = useDispatch();

	const orderDetails = useSelector((state) => state.orderDetails);
	const { order, loading, error } = orderDetails;

	const orderPay = useSelector((state) => state.orderPay);
	const { loadingPay, success } = orderPay;

	const userLogin = useSelector((state) => state.user);
	const { user, loadingUser } = userLogin;

	const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const addDecimal = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};

	const itemsPrice = addDecimal(
		cartItems.reduce(
			(acc, item) => Number(acc) + Number(item.price) * Number(item.qty),
			0
		)
	);

	const [successs, setSuccess] = useState(false);
	const [paid, setPaid] = useState(false);

	const makePayment = async (info) => {
		const isLoaded = await loadRazorpay();
		if (!isLoaded) {
			alert("Razorpay SDK failed to load. Are you online?");
			return;
		}

		const options = {
			key: "rzp_test_9oRiUh2HfSJzwy",
			amount: info.totalPrice,
			currency: info.currency,
			order_id: info.id,
			handler: async (response) => {
				try {
					const verifyUrl = `${baseUrl}/api/payment/verify`;
					const { data } = await axios.post(verifyUrl, response);
					console.log(data);
					setSuccess(data.success);
					if (data.success) {
						setPaid(true);
						dispatch(getOrderDetails(orderId));
						// You could also trigger a re-fetch of the order details after payment
					}
					console.log("Payment Verified Successfully");
				} catch (error) {
					console.log("Payment Verification Failed");
					console.log(error);
				}
			},
			theme: {
				color: "#3399cc",
			},
		};

		const rzp = new window.Razorpay(options);
		rzp.open();
	};
	const setpayment = () => {
		const info = order.paymentResult;
		// console.log(info);
		makePayment(info);
	};

	useEffect(() => {
		dispatch(payOrder(orderId));
		dispatch(getOrderDetails(orderId));
	}, [orderId, paid]);

	return loading ? (
		<Loader style={{ marginTop: "3rem" }} />
	) : error ? (
		<Message variant="danger">{error}</Message>
	) : (
		<>
			<Container>
				<h2 style={{ marginTop: "3rem" }}>Order {order._id}</h2>
				{order ? (
					<Row>
						<Col md={8}>
							<ListGroup.Item variant="flush">
								<h2>Shipping</h2>
								<p>
									<strong>Name:</strong> {user?.username || "N/A"}
								</p>
								<p>
									<strong>Email:</strong> {user?.email || "N/A"}
								</p>

								<p>
									<strong>Address :</strong>
									{order.shippingAddress.address}&nbsp;
									{order.shippingAddress.city}&nbsp;
									{order.shippingAddress.postalcode}&nbsp;
									{order.shippingAddress.country}&nbsp;
								</p>
								{order.isDeliverd ? (
									<Message variant="success">
										Paid On {order.isDeliverd}
									</Message>
								) : (
									<Message variant="danger">Not Deliverd</Message>
								)}
							</ListGroup.Item>
							<ListGroup.Item>
								<h2>Payment Details</h2>

								{order.isPaid ? (
									<Message variant="success">Paid On {order.paidAt}</Message>
								) : (
									<Message variant="danger">Not Paid</Message>
								)}
							</ListGroup.Item>
							<ListGroup.Item>
								<h2>Order Items</h2>

								<ListGroup variant="flush">
									{order.orderItems.length === 0 ? (
										<Message>Your Cart is Empty</Message>
									) : (
										order.orderItems.map((item, index) => (
											<ListGroup.Item key={index}>
												<Row>
													<Col md={1}>
														<img
															style={{ width: "2rem", height: "2rem" }}
															src={item.imageUrl}
															alt={item.name}
															fluid="true"
														/>
													</Col>
													<Col>
														<Link to={`/api/product/${item.product}`}>
															{item.name}
														</Link>
													</Col>
													<Col md={4}>
														{item.qty} X ₹{item.price} = ₹{item.price * item.qty}
													</Col>
												</Row>
											</ListGroup.Item>
										))
									)}
								</ListGroup>
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
											<Col>₹{itemsPrice}</Col>
										</Row>
										<Row>
											<Col>Shipping</Col>
											<Col>₹{order.shippingPrice}</Col>
										</Row>
										<Row>
											<Col>Tax</Col>
											<Col>₹{order.taxPrice}</Col>
										</Row>
										<Row>
											<Col>Total</Col>
											<Col>₹{order.totalPrice}</Col>
										</Row>
									</ListGroup.Item>
									<ListGroup.Item>
										{error && <Message variant="danger">{error}</Message>}
									</ListGroup.Item>
								</ListGroup>
							</Card>
							{!order.isPaid ? (
								<Button onClick={setpayment} className="buy_btn">
									Make Payment
								</Button>
							) : (
								<Button onClick={setpayment} disabled className="buy_btn">
									Make Payment
								</Button>
							)}
						</Col>
					</Row>
				) : (
					<h1>Loading..........</h1>
				)}
			</Container>
		</>
	);
};

export default OrderScreen;
