import React from 'react';
import mainImg2 from "./2_corousel.png";
import "./iphone.css";

function Iphoneadd() {
  return (
    <>
        <div className="homePageImg2">
            <div className="homeImgText">
                <h1>iPhone 6 Plus</h1>
                <div>Performance and design. Taken right to the edge.</div>
                <h4>SHOP NOW</h4>
            </div>
            <img  className="mainImg2" src={mainImg2}  alt="" />
        </div>
    </>
  )
}

export default Iphoneadd;