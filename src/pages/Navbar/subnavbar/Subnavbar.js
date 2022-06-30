import "./subnavbar.css";

import React from 'react';
import { NavLink,Link } from "react-router-dom";


export default function Subnavbar() {
  return (
    <div className="subnavbarContainer">
      <div className="Subnavbar">
      <div className="columnsTab">
          <h4><Link to="/category/accessories"  style={{color:"inherit"}}>Accessories</Link></h4>
          <p><Link to="/category/wireless">Wireless Devices</Link></p>
          <p><Link to="/category/cables">Cables</Link></p>
          <p><Link to="/category/airpods">Airpods</Link></p>
          <p><Link to="/category/homepod">HomePod</Link></p>
          <p><Link to="/category/headphones">Headphones</Link></p>
        </div>
        <div className="columnsTab">
        <h4><Link to="/category/accessories" style={{color:"inherit"}}>Accessories</Link></h4>
        <p><Link to="/category/cameralens">Camera Lens</Link></p>
          <p><Link to="/category/cables">Connecting Devices</Link></p>
          <p><Link to="/category/bluetooth">Bluetooth Devices</Link></p>
          <p><Link to="/category/others">Check Others</Link></p>

        </div>
        <div className="columnsTab">

          <h4><Link to="/category/ipad" style={{color:"inherit"}}>IPad</Link></h4>
          <p><NavLink to="/category/ipad">Apple iPad</NavLink></p>
          
          <h4><Link to="/category/iphone" style={{color:"inherit"}}>IPhone</Link></h4>
          <p><NavLink to="/category/iphone">Apple iPhone</NavLink></p>

        </div>
        <div className="columnsTab">
          <h4><Link to="/category/accessories" style={{color:"inherit"}}>MacBook</Link></h4>
          <p><Link to="/category/macbook" className="navLink">Apple MacBook</Link></p>

          <h4><Link to="/category/accessories" style={{color:"inherit"}}>IPod</Link></h4>
            <p><NavLink to="/category/ipod">Apple iPod</NavLink></p>
        </div>
        {/* <div className="columnsTab">
          <h4>Accessories</h4>
          <p>Mice & Keyboards</p>
          <p>Music Creation</p>
          <p>Networking & Server</p>
          <p> ...</p>
          <p> ...</p>

        </div> */}
        
      </div>
    </div>
  )
}
