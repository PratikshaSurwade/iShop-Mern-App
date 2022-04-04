import React from 'react';
import "./topbar.css";
import NavDropdown from 'react-bootstrap/NavDropdown';
import profile from "./icons/profile_icon.svg";
import bag_icon from "./icons/bag_icon.svg";
function Topbar() {
  return (
    <>
    
    <div className='topBar'>
        <div className='firstBar'>
            <NavDropdown  className="topbarColor" title="EN" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Spanish</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">French</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Hindi</NavDropdown.Item>
                  {/* <NavDropdown.Divider /> */}
                  {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
            </NavDropdown>

            <NavDropdown  className="topbarColor" title="$" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Rupees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pound</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Euro</NavDropdown.Item>
            </NavDropdown>
        </div>
        <div className='secondBar'>
          <div className='profile'>
            <img src={profile} />My profile

          </div>
          <div className='items'>
            <img src={bag_icon} /><span className='itemCount'>2</span> Items<span className='itemPrice'>  $998</span> 

          </div>
          <div className='search'><i class="fa-solid fa-magnifying-glass"></i></div>
        </div>
    </div>
    
   
    </>
  )
}

export default Topbar;