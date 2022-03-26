import React from 'react';
// import Subnavbar from '../Navbar/subnavbar/Subnavbar.js';
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";
import Feactured from "./feacturedprods/Feactured";
import Iphoneadd from './iphoneadd/iphoneadd.js';

import "./home.css";

import mainImg from "./corousel_3.png";

//import json
import bestSeller from "./../jsondata/homepage/bestseller.json";


const bestseler = bestSeller;

function Home(){
  
    return (
      <>
        {/* <Subnavbar /> */}
        <img className="mainImg" src={mainImg} />

        <h2 className="subHead">BEST SELLER</h2>
        <div className="subHeadSubpoints">
            <div className="subListItems">All</div>
            <div className="subListItems">Mac</div>
            <div className="subListItems">iPhone</div>
            <div className="subListItems">iPad</div>
            <div className="subListItems">iPod</div>
            <div className="subListItems">Accessories</div>
        </div>
        
        <div className="homepageItems">
          {bestseler.map(data=> {
            return <Bestseller info={ data } />
          })}
        </div>
        <Iphoneadd />
        <Facilitis />
        <h3 className="subHead">FEATURED PTODUCTS</h3>
        <Feactured />
      </>
    )
}

export default Home;