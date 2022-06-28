import "./subnavbar.css";

import React from 'react';
import { NavLink,Link } from "react-router-dom";


export default function Subnavbar() {
  return (
    <div className="subnavbarContainer">
      <div className="Subnavbar">
      <div className="columnsTab">
          <h4><Link to="/cat/accessories"  style={{color:"inherit"}}>Accessories</Link></h4>
          <p><Link to="/cat/wireless">Wireless Devices</Link></p>
          <p><Link to="/cat/cables">Cables</Link></p>
          <p><Link to="/cat/airpods">Airpods</Link></p>
          <p><Link to="/cat/homepod">HomePod</Link></p>
          <p><Link to="/cat/headphones">Headphones</Link></p>
        </div>
        <div className="columnsTab">
        <h4><Link to="/cat/accessories" style={{color:"inherit"}}>Accessories</Link></h4>
        <p><Link to="/cat/cameralens">Camera Lens</Link></p>
          <p><Link to="/cat/cables">Connecting Devices</Link></p>
          <p><Link to="/cat/bluetooth">Bluetooth Devices</Link></p>
          <p><Link to="/cat/others">Check Others</Link></p>

        </div>
        <div className="columnsTab">

          <h4><Link to="/cat/ipad" style={{color:"inherit"}}>IPad</Link></h4>
          <p><NavLink to="/cat/ipad">Apple iPad</NavLink></p>
          
          <h4><Link to="/cat/iphone" style={{color:"inherit"}}>IPhone</Link></h4>
          <p><NavLink to="/cat/iphone">Apple iPhone</NavLink></p>

        </div>
        <div className="columnsTab">
          <h4><Link to="/cat/accessories" style={{color:"inherit"}}>MacBook</Link></h4>
          <p><Link to="/cat/macbook" className="navLink">Apple MacBook</Link></p>

          <h4><Link to="/cat/accessories" style={{color:"inherit"}}>IPod</Link></h4>
            <p><NavLink to="/cat/ipod">Apple iPod</NavLink></p>
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
