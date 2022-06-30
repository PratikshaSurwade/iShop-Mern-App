import React, { useEffect, useState } from 'react';
import "./topbar.css";
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../redux/actions/userAction";

function Topbar() {
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
	
	const userLogin = useSelector((state) => state.userLogin);
	const { userInfo } = userLogin;
	const dispatch = useDispatch();

	const logoutHandler = () => {
		dispatch(logout());
	};

	return (
		<>
			<div className='topBar'>
				<div className='firstBar'>

					<div className='items' title="Go to Cart" style={{ cursor: "pointer", position: "relative" }}>
						<NavLink style={{ textDecoration: "none", textDecorationColor: "none", color: "black" }} to="/cart">
							<img src={bag_icon} alt="" />
							<span className='itemCount'>
								<Badge pill bg="danger" className='cartBadge'>{getCartCount()}</Badge>
							</span>  <span style={{ position: "relative", marginLeft: "7px" }}>Items</span>
						</NavLink>
						<span className='itemPrice'>₹{getCartSubTotal()}</span>
					</div>
				</div>
				<div className='secondBar'>
					{
						!userInfo
							?
							(
								<div className='topRight'>
									<NavLink className='topListItemRight' to="/login" style={{ textDecoration: "none" }}>LOGIN</NavLink>

									<NavLink className='topListItemRight' to="/register" style={{ textDecoration: "none" }}>REGITER</NavLink>

								</div>
							)
							:
							(
								<div className='profile'>
									<img className="profilePhoto" src={!userInfo?`${profile}`:`${userInfo.profilePic}`} alt="" />{userInfo.username.split(" ")[0]}
									{/* {userInfo?`${profile}`:`${userInfo.profile}`} */}
									<button className="logout" onClick={logoutHandler}>LOGOUT</button>
									{console.log(userInfo.profilePic)}
								</div>
							)}
							
					{/* <div className='search'><i class="fa-solid fa-magnifying-glass"></i></div> */}
				</div>
			</div>
		</>
	)
}

export default Topbar;

{/* <select class="form-select" style={{border:"none"}} aria-label="Default select example">
              <option selected>En</option>
              <option value="1">Spanish</option>
              <option value="2">French</option>
              <option value="3">Hindi</option>
            </select>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{border:"none",fontSize:"1rem",fontWeight:"400"}} >
              <option selected>$</option>
              <option value="Rupees">Rupees</option>
              <option value="Pound">Pound</option>
              <option value="Euro">Euro</option>
            </select> */}
{/* <NavDropdown  className="topbarColor" title="$" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Rupees" title="Rupees">Rupees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pound</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Euro</NavDropdown.Item>
            </NavDropdown> */}