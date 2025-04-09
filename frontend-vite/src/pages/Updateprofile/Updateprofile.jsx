import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import "./updateprofile.css";
import Message from "../effects/Message.jsx";
import Loader from "../effects/loader.jsx";
import { getUserDetails, updateUserProfile } from "../../redux/actions/userAction.jsx";
import { listMyOrders } from "../../redux/actions/orderAction.jsx";
import FormContainer from "../effects/FromContainer.jsx";

function Updateprofile() {

  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  console.log("Redux user:", user);
  const [loader, setloader] = useState(false);

  const userOrders = useSelector((state) => state.orderListMy);
  const {loading, orders} = userOrders;
  console.log("userorders",userOrders);
  // listMyOrders

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
    setloader(false);
  }

  useEffect(() => {
		dispatch(listMyOrders())
	}, [])
  return (
    <>
			<div className='storeTitle'>User Details</div>
			<div className='userDetailsContainer'>
				{console.log(user,"user")}
				{ user &&
					<h3>User name :  {user.username}</h3>
				}

				<Link to="/cart" className='cartLink'>Your Cart</Link>

				<h3>Your Orders Summary</h3>

				<div className='orderSummary'>
					<h5>Sr.No</h5>
					<h4>Products</h4>
					<h4>Total Amount</h4>
					<h4>Payment</h4>
					<h4>Delivery</h4>
				</div>
				<hr style={{ margin: "5px", color: "#d3d3d3" }}></hr>

				{!loading && orders && Array.isArray(orders) && (
					orders.map((item,index) => (
						<>
							<div className='orderSummary'>
								<p>{(index+1)}</p>
								<Link to={`/api/orders/${item._id}`}><div>{item.orderItems.map((orderItem) => (<><p>{orderItem.name}</p></>))}</div></Link>
								<div>{item.totalPrice}</div>
								<div>{item.isPaid ? "Paid" : "Not Paid"}</div>
								<div>{item.isDeliverd ? "✓" : "✗"}</div>
								{console.log(item.isPaid)}
							</div>
							<hr style={{ margin: "5px", color: "#d3d3d3" }}></hr>
						</>
					))
				)}
			</div>
		</>
  )
}

export default Updateprofile