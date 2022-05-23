import React from 'react';
import "./topbar.css";
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";

function TopmobBar() {
  return (
    <div className='TopmobBar'>
        
            <div className='items' title="Go to Cart" style={{cursor:"pointer",position:"relative"}}>
                
                    <img src={bag_icon} alt="" style={{fill:"#ffffff"}} />
                    <NavLink style={{textDecoration:"none",textDecorationColor:"none",color:"white"}} to="/cart">
                        <span className='itemCount'>
                            <Badge pill bg="danger" className='cartBadge'>2</Badge>
                        </span> <span style={{position:"relative",marginLeft:"7px"}}>Items</span><span className='itemPrice'>  $998</span> 
                    </NavLink>

            </div>
            <div className='profile'>
                <img src={profile} alt="" /> My profile
            </div>
        <div className='secmobbar'>
            <NavDropdown  className="topmobBarClor" title="EN" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hindi</NavDropdown.Item>
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown  className="topmobBarClor" title="$" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Rupees</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Pound</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Euro</NavDropdown.Item>
            </NavDropdown>
        </div>
    </div>
  )
}

export default TopmobBar;