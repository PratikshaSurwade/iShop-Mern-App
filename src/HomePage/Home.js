import React from 'react';
import Subnavbar from '../Navbar/subnavbar/Subnavbar.js';
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
        <Subnavbar />
        <img className="mainImg" src={mainImg} />

        <div className="subHead">BEST SELLER</div>
        <div className="subHeadSubpoints">
            <div className="subListItems">All</div>
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
        <div className="subHead">FEATURED PTODUCTS</div>
        <Feactured />
      </>
    )
}

export default Home;