import React from "react";
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";

import Iphoneadd from "./iphoneadd/iphoneadd.js";

import "./home.css";

import mainImg from "./corousel_3.png";

//import json
import bestSeller from "./../jsondata/homepage/bestseller.json";

import Featuredproduct from "./feacturedprods/Featuredproduct.js";

const bestseler = bestSeller;

function Home() {
  return (
    <>
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
