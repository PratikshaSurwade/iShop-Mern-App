import React from 'react';
import "./iphone.css";
import { NavLink } from 'react-router-dom';

function Iphoneadd() {
  return (
    <>
        <div className="homePageImg2">
            <div className="homeImgText">
                <h1>iPhone 6 Plus</h1>
                <div>Performance and design. Taken right to the edge.</div>
                <h4><NavLink to="/api/products/62ac5d5a04e38c11823d1713" style={{color:"#ffffff" , textDecoration:"none"}}  title="Shop Now" >SHOP NOW</NavLink></h4>
            </div>
            <img  className="mainImg2" src="https://res.cloudinary.com/dn9hxyxud/image/upload/v1655462970/ishop/2_corousel_krbafd.png"  alt="" />
        </div>
    </>
  )
}

export default Iphoneadd;