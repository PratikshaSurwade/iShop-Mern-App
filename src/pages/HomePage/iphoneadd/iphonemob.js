import React from 'react';
import { Link } from 'react-router-dom';

import "./iphone.css";

function Iphonemob() {
  return (
    <>
        <div className="homePageImgmob">
            <div className="homeImgText2">
                <div>iPhone 6 Plus</div>
                <p>Performance and design. Taken right to the edge.</p>
                <h5><Link to="/api/products/62ac5d5a04e38c11823d1713" className="navLink" style={{color:"#ffffff" , textDecoration:"none"}} title="Shop Now" >SHOP NOW</Link></h5>
            </div>
            <div  className="mainImgpart1"><img  className="mainImgmob1" src="https://res.cloudinary.com/dn9hxyxud/image/upload/v1655463149/ishop/iphone_8_jbltwb.svg" alt="" /></div>
            <div  className="mainImgpart2"><img  className="mainImgmob2" src="https://res.cloudinary.com/dn9hxyxud/image/upload/v1655462970/ishop/2_corousel_krbafd.png" alt="" /></div>
        </div>
    </>
  )
}

export default Iphonemob;