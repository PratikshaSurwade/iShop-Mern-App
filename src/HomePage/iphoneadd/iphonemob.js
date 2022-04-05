import React from 'react';
import mainImg1 from "./iphone_8.svg";
import mainImg2 from "./2_corousel.png";

import "./iphone.css";

function Iphonemob() {
  return (
    <>
        <div className="homePageImgmob">
            <div className="homeImgText2">
                <div>iPhone 6 Plus</div>
                <p>Performance and design. Taken right to the edge.</p>
                <h5>SHOP NOW</h5>
            </div>
            <div  className="mainImgpart1"><img  className="mainImgmob1" src={mainImg1} /></div>
            <div  className="mainImgpart2"><img  className="mainImgmob2" src={mainImg2} /></div>
        </div>
    </>
  )
}

export default Iphonemob;