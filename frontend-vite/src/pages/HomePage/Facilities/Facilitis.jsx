import React from 'react';
import "./Facilitis.css";

// images
import shipping from "./fascilities_images/shipping.svg";
import refund from "./fascilities_images/refund.svg";
import support from "./fascilities_images/support.svg";

export default function Facilitis() {
  return (
    <div className="Facilitis">
        <div className="subFacilities">
            <img src={shipping} alt="Fascilitis"/>

            <h4 className="facilityName">FREE SHIPPING</h4>
            <div className="decription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis</div>
        </div>
        <div className="subFacilities">
            <img src={refund} alt="Fascilitis"/>
            <h4 className="facilityName">100% REFUND</h4>
            <div className="decription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis</div>
        </div>
        <div className="subFacilities">
            <img src={support} alt="Fascilitis"/>
            <h4 className="facilityName">SUPPORT 24/7</h4>
            <div className="decription">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus esse suscipit excepturi ut officiis doloribus inventore dolores assumenda reiciendis</div>
        </div> 
    </div>
  )
}
