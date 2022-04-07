import React from 'react';
import "./topbar.css";
import Badge from 'react-bootstrap/Badge';
import { NavLink } from "react-router-dom";

import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";
import 'bootstrap/dist/css/bootstrap.min.css';


function Topbar() {
  return (
    <>
    
    <div className='topBar'>
        <div className='firstBar'>
            
            <select class="form-select" style={{border:"none"}} aria-label="Default select example">
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
            </select>
  
  


            {/* <NavDropdown  className="topbarColor" title="$" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Rupees" title="Rupees">Rupees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pound</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Euro</NavDropdown.Item>
            </NavDropdown> */}
        </div>
        <div className='secondBar'>
          <div className='profile'>
            <img src={profile} alt="" />My profile

          </div>
          <div className='items' title="Go to Cart" style={{cursor:"pointer",position:"relative"}}>
              <NavLink  style={{textDecoration:"none",textDecorationColor:"none",color:"black"}} to="/cart">
                <img src={bag_icon} alt="" />
                <span className='itemCount'>
                  <Badge pill bg="danger" className='cartBadge'>2</Badge>
                </span>  <span style={{position:"relative",marginLeft:"7px"}}>Items</span>
              </NavLink>
              <span className='itemPrice'>  $998</span> 
            

          </div>
          <div className='search'><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
    </div>
    
   
    </>
  )
}

export default Topbar;