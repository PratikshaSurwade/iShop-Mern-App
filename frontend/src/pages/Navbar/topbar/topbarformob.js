import React from 'react';
import "./topbar.css";
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userAction";

function TopmobBar() {
    const cart = useSelector((state) => state.cart);
	const { cartItems } = cart;

	const getCartCount = () => {
		return cartItems.reduce((qty, item) => Number(item.qty) + qty, 0);
	};
	const getCartSubTotal = () => {
		return cartItems
			.reduce((price, item) => price + item.price * item.qty, 0)
			.toFixed(2);
	};
	
	const userLogin = useSelector((state) => state.user);
	const { userInfo } = userLogin;
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
	};
  return (
    <div className='TopmobBar'>
        
            <div className='items' title="Go to Cart" style={{cursor:"pointer",position:"relative"}}>
                
                    <img src={bag_icon} alt="" style={{fill:"#ffffff"}} />
                    <NavLink style={{textDecoration:"none",textDecorationColor:"none",color:"white"}} to="/cart">
                        <span className='itemCount'>
                            <Badge pill bg="danger" className='cartBadge'>{getCartCount()}</Badge>
                        </span> <span style={{position:"relative",marginLeft:"7px"}}>Items</span><span className='itemPrice'>     ₹{getCartSubTotal()}</span> 
                    </NavLink>

            </div>
            {
						!userInfo
							?
							(
								<div className='topRight'>
									<NavLink style={{textDecoration:"none",color:"white" , margin:"5px"}}  to="/login" >LOGIN</NavLink>

									<NavLink style={{textDecoration:"none",color:"white", margin:"5px"}}  to="/register" >REGITER</NavLink>

								</div>
							)
							:
							(
								<div className='profile'>
									<img className="profilePhoto" src={!userInfo?`${profile}`:`${userInfo.profilePic}`} alt="" />{userInfo.username.split(" ")[0]}
									<button className="logout" onClick={logoutHandler}>LOGOUT</button>
								</div>
							)}
        
    </div>
  )
}

export default TopmobBar;