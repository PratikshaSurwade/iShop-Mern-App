import React, { useEffect, useState } from "react";
import { Button, Row, Col, ListGroup, Image, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { createOrder } from "../../redux/actions/orderAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Message from "../effects/Message";

const PlaceOrderScreen = () => {
	const cart = useSelector((state) => state.cart);
	const dispatch = useDispatch();
	let navigate = useNavigate();

	const orderCreate = useSelector((state) => state.orderCreate);
	const { order, success, error } = orderCreate;

	const [paymentResult, setPaymentResult] = useState({})
	const [paid, setPaid] = useState(false); 
	const [ successs ,setSuccess] =  useState(false);

	//fun for decimal
	const addDecimal = (num) => {
		return (Math.round(num * 100) / 100).toFixed(2);
	};
	cart.itemsPrice = addDecimal(
		cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
	);

	cart.shippingPrice = addDecimal(cart.cartItems > 500 ? 0 : 50);
	cart.taxPrice = addDecimal(Number((0.15 * Number(cart.itemsPrice)).toFixed(2)));
	console.log(successs);

	cart.totalPrice = (
		Number(cart.itemsPrice) +
		Number(cart.shippingPrice) +
		Number(cart.taxPrice)
	).toFixed(2);

	console.log(cart.totalPrice);

	// const fetchingorder = async (data) => {
	// 	try {
	// 	  const verifyUrl = `http://localhost:3000/api/payment/orders/pay/${data.id}`;
	// 	  const { data } = await axios.get(verifyUrl);
	// 	  console.log(data);
	// 	} catch (error) {
	// 	  console.log(error);
	// 	}
	//   }
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
					console.log(data);
					setSuccess(data.success);
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

	const makePayment = async () => {
		try {
			const orderUrl = "http://localhost:3000/api/payment/orders";
			const { data } = await axios.post(orderUrl, { amount: (cart.totalPrice) });
			initPayment(data.data);
			setPaymentResult(data.data);
			console.log(data.data);
		} catch (error) {
			console.log(error);
		}
	}

	const placeOrderHandler = () => {
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
			})
		);
	};

	useEffect(() => {
		if (success) {
			navigate(`/api/orders/${order._id}`);
		}
		//eslint-disable-next-line
	}, [navigate, success,paymentResult]);
	return (
		<>
{/*as europian clien  f s y hbh  yarvalate hd  sye urashi    
khup bright tuze ajj tinch scean ahet may be lvkr zal tr al 
s,md   deus nakos kahi ... .. .. ... . . . 
pahate   tila   lvkr jaych ast pahate 
delivery paisa online pay ho chuka hai sir  ... . . 
net netke pna vapareaychach dada ... ... .. . .. ... ... 

dada tas mala mhanale atta kahi mahine zaleyy 
doghehi busy daily soap mala are mast   tu jarashi hii ye urashiii 
he ek magne ... .. . . . .. ...
amhi dohe ithe ektech rahtoo  tu jarshii ye urashi ukirda kasa karaycha 
and i mean it 
ananya mazya ch sarkhi ek independant mulgi ahe tuz te office is spoiling our lifes
jara atahi javl pass 
ek minute deshil 
apl ka tuz ?? ? ?? ??? ...... ..... .... ... .. .
maudi basun ghee please ... .. . . . . .. ... 
*/}

			{/* <CheckOutStep step1 step2 step3 step4 /> */}
			<Row>
				<Col md={8}>
					<ListGroup variant="flush">
						<ListGroup.Item>
							<h2>Shipping</h2>
							<p>
								<strong>Address :</strong>
								{cart.shippingAddress.address}&nbsp;
								{cart.shippingAddress.city}&nbsp;
								{cart.shippingAddress.postalcode}&nbsp;
								{cart.shippingAddress.country}&nbsp;
							</p>
						</ListGroup.Item>
						<ListGroup.Item>
							<h2>Payment Method</h2>
							<p>
								<strong>{cart.paymentMethod}</strong>
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
													<Image src={item.imageUrl} alt={item.name} fluid />
												</Col>
												<Col>
													<Link to={`/product/${item.product}`}>
														{item.name}
													</Link>
												</Col>
												{console.log(item.price, Number(item.qty))}
												<Col md={4}>
													{item.qty} X {item.price} = ${item.price}
												</Col>
												{console.log(item.price)}
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
								<h2>Order Summary</h2>
							</ListGroup.Item>
							<ListGroup.Item>
								<Row>
									<Col>Items</Col>
									<Col>${cart.itemsPrice}</Col>
								</Row>
								<Row>
									<Col>Shipping</Col>
									<Col>${cart.shippingPrice}</Col>
								</Row>
								<Row>
									<Col>Tax</Col>
									<Col>${cart.taxPrice}</Col>
								</Row>
								<Row>
									<Col>Total</Col>
									<Col>${cart.totalPrice}</Col>
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
							</Button>
							<Button
								type="button"
								className="btn-block"
								disabled={cart.cartItems === 0}
								onClick={placeOrderHandler}
							>
								Place Order
							</Button> */}
							{console.log(successs)}
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
							} 

						</ListGroup>
					</Card>
				</Col>
			</Row>
		</>
	);
};

export default PlaceOrderScreen;