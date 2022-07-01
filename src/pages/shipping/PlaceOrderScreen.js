import React, { useEffect, useState } from "react";
import { Button, Row, Col, ListGroup, Image, Card ,Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

import axios from "axios";
import Message from "../effects/Message";

import baseUrl from "../path/Baseurl";


const PlaceOrderScreen = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const location = useLocation();
	// const redirect = location.pathname;
  

	const redirect = ("/login?redirect=/placeorder");
	// const redirect = (location.pathname+"/redirect") ? location.pathname.split("=")[1] : "/";

	const [ btn , setBtn ] = useState(false);

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	// const [paymentResult, setPaymentResult] = useState({});
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;

	const [ successs ,setsucesss] =  useState(false);
	const [ waiting , setWaiting ] = useState(false);

	//fun for decimal
	const addDecimal = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};

	cart.itemsPrice = addDecimal(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
	cart.taxPrice = addDecimal(Number((0.15 * Number(cart.itemsPrice)).toFixed(2)));

	cart.totalPrice = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(2);

	const totalAmmount = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(0);

	const makePayment = async (paymentResult) => {
		
		if(waiting){
			dispatch(
				createOrder({
					orderItems: cart.cartItems,
					shippingAddress: cart.shippingAddress,
					paymentMethod: cart.paymentMethod,
					paymentResult: paymentResult,
					itemsPrice: cart.itemsPrice,
					shippingPrice: cart.shippingPrice,
					taxPrice: cart.taxPrice,
					totalPrice: cart.totalPrice,
				}));

		}
	}

	// const continueForPayment = () => {
	// 	setsucesss(true);
	// }

	const placeOrderHandler = async () => {
		try {
			const orderUrl = `https://mern-ishop-backend.herokuapp.com/api/payment/orders`;
			const { data } = await axios.post(orderUrl, { amount: (totalAmmount) });
			// initPayment(data.data);
			setWaiting(true);
			makePayment(data.data);
			setBtn(true);

		} catch (error) {
			console.log(error);
		}};

	useEffect(() => {

		if (!userInfo) {
			navigate(redirect);
		}
		  
		if (success) {
			navigate(`/api/orders/${order._id}`);
		}
		//eslint-disable-next-line
	}, [navigate, success, userInfo,successs,redirect]);
	return (
		<Container>
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2 style={{marginTop:"2.5rem"}}>Shipping</h2>
							<p>
								<strong>Address :</strong>
								{cart.shippingAddress.address}&nbsp;
								{cart.shippingAddress.city}&nbsp;
								{cart.shippingAddress.postalcode}&nbsp;
								{cart.shippingAddress.country}&nbsp;
							</p>
						</ListGroup.Item>
						
						<ListGroup.Item>
							<h2>Order Items</h2>
							{cart.cartItems.length === 0 ? (
								<Message>Your Cart is Empty</Message>
							) : (
								<ListGroup variant="flush">
									{cart.cartItems.map((item, index) => (
										<ListGroup.Item key={index}>
											<Row>
												<Col md={1}>
												<img style={{width:"2rem",height:"2rem"}} src={item.imageUrl} alt={item.name} fluid />
												</Col>
												<Col>
													<Link to={`/api/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												<Col md={4}>
													{item.qty} X {item.price} = ₹{Number(item.price)*Number(item.qty)}
												</Col>
											</Row>
										</ListGroup.Item>
									))}
								</ListGroup>
							)}
						</ListGroup.Item>
					</ListGroup>
				</Col>
				<Col md={4}>
					<Card>
						<ListGroup variant="flush">
							<ListGroup.Item>
								<h2 style={{marginTop:"1rem"}}>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>₹{cart.itemsPrice}</Col>
								</Row>
								<Row>
									<Col>Shipping</Col>
									<Col>₹{cart.shippingPrice}</Col>
								</Row>
								<Row>
									<Col>Tax</Col>
									<Col>₹{cart.taxPrice}</Col>
								</Row>
								<Row>
									<Col>Total</Col>
									<Col>₹{cart.totalPrice}</Col>
								</Row>
							</ListGroup.Item>
							<ListGroup.Item>
								{error && <Message variant="danger">{error}</Message>}
							</ListGroup.Item>
						{/* <Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={makePayment}
							>
								Make payment
							</Button> */}
						
								<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={placeOrderHandler}
							>
								{btn ? <>Continue For Payment</> : <>Place Order</> }
							</Button>
							{/* {btn? (
								<>
								<Button
								type="button"
								className="btn-block"
								disabled
								onClick={placeOrderHandler}
							>
								Place Order
							</Button>
							<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={continueForPayment}
							>
								Continue for Payment
							</Button>
							</>
							) : (
								<>
							<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={placeOrderHandler}
							>
								Place Order
							</Button>
							<Button
							type="button"
							className="btn-block"
							disabled
							onClick={continueForPayment}
						>
							Continue for Payment
						</Button></>)} */}
							
							{/* {console.log(successs)}
							 {!successs?<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={makePayment}
							>
								Make payment
							</Button>:<Button
								type="button"
								className="btn-block"
								disabled
								onClick={makePayment}
							>
								Make payment
							</Button>}
							
								{!successs?<Button
								type="button"
								className="btn-block"
								disabled
								onClick={placeOrderHandler}
							>
								Place Order
							</Button>:<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={placeOrderHandler}
							>
								Place Order
							</Button>
							}  */}

						</ListGroup>
					</Card>
				</Col>
			</Row>
		</Container>
	);
};

export default PlaceOrderScreen;
