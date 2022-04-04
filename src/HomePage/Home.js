import React from "react";
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";

import NavDropdown from 'react-bootstrap/NavDropdown';

import Iphoneadd from "./iphoneadd/iphoneadd.js";

import "./home.css";

import mainImg from "./corousel_3.png";
import mobImg from "./mobile_c3.png";


//import json
import bestSeller from "./../jsondata/homepage/bestseller.json";

import Featuredproduct from "./feacturedprods/Featuredproduct.js";

const bestseler = bestSeller;

function Home() {
//   const myStyle ={
    
//     textAlign: "center",
//     display: "flex",
//     width: "100%",
//     backgroundColor: "#f1f1f1"

// };
  return (
    
    <>
      <img className="mainImg" src={mainImg} />
      <img className="mobImg" src={mobImg} />      

      <h2 className="subHead">BEST SELLER</h2>
      <NavDropdown className="sortbestSeller" title="MAC" id="basic-nav-dropdown" >
            <NavDropdown.Item href="#action/3.1">iPhone</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Apple</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Watch</NavDropdown.Item>
            {/* <NavDropdown.Divider /> */}
            
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      
      <div className="subHeadSubpoints">
        <div className="subListItems">All</div>
        <div className="subListItems">Mac</div>
        <div className="subListItems">iPhone</div>
        <div className="subListItems">iPad</div>
        <div className="subListItems">iPod</div>
        <div className="subListItems">Accessories</div>
      </div>

      <div className="home">
          <div className="homepageItems">
            {bestseler.map((data) => {
              return <Bestseller info={data} />;
            })}
          </div>
      </div>
      <Iphoneadd />

      <Facilitis />

      <h3 className="subHead">FEATURED PTODUCTS</h3>
    
      <Featuredproduct />
    </>
  );
}

export default Home;
