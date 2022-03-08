import "./subnavbar.css";

import React from 'react'

export default function Subnavbar() {
  return (
    <div className="subnavbarContainer">
      <div className="Subnavbar">
        <div className="columnsTab">
          <h4> Accessories</h4>
          <p>AirPort & Wireless</p>
          <p>AppleCare</p>
          <p>Bags, Shells & Sleeves</p>
          <p>Business & Security</p>
          <p>Cables & Docks</p>

        </div>
        <div className="columnsTab">
          <p>Cameras & Video</p>
          <p>Car & Travel</p>
          <p>Cases & Films</p>
        </div>
        <div className="columnsTab">
          <h4>Category</h4>
          <p>Charging Devices</p>
          <p>Connected Home</p>
          <p>Device Care</p>
          <p>Display & Graphic</p>
          <p>Fitness & Sport</p>

        </div>
        <div className="columnsTab">
          
          <p>Headphones</p>
          <p>HealthKit</p>

        </div>
        <div className="columnsTab">
          <h4>Category</h4>
          <p>Mice & Keyboards</p>
          <p>Music Creation</p>
          <p>Networking & Server</p>
          <p> ...</p>
          <p> ...</p>

        </div>
        
      </div>
    </div>
  )
}
