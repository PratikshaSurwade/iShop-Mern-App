import React from 'react';
import "./topbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";

function TopmobBar() {
  return (
    <div className='TopmobBar'>
        
            <div className='items'>
                <img src={bag_icon} style={{fill:"#ffffff"}} /> <span className='itemCount'>2</span> Items<span className='itemPrice'>  $998</span> 

            </div>
            <div className='profile'>
                <img src={profile} /> My profile

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