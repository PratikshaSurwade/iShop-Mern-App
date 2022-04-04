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
            
            <select class="form-select" style={{border:"none"}} aria-label="Default select example">
              <option selected>En</option>
              <option value="1">Spanish</option>
              <option value="2">French</option>
              <option value="3">Hindi</option>
            

            </select>
            <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{border:"none",fontSize:"1rem",fontWeight:"400"}} >
              <option selected>$</option>
              <option value="Rupees">Rupees</option>
              <option value="Pound">Pound</option>
              <option value="Euro">Euro</option>
            </select>
  
  


            {/* <NavDropdown  className="topbarColor" title="$" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#Rupees" title="Rupees">Rupees</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Pound</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Euro</NavDropdown.Item>
            </NavDropdown> */}
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