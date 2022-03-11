import React, { Component } from 'react';
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";
import Feactured from "./feacturedprods/Feactured";

//import json 
import fascilities from "../jsondata/homepage/facilitis.json";


export default class Home extends Component {
  state= {
    fascilities:fascilities
  }
  render() {
    return (
      <>
      <Bestseller />
      <div className="Facilitis">
        {this.state.fascilities.map((item)=>(
          <Facilitis key={item.id2} fascilitie={item}/>
        ))}
      </div>

      <Feactured />
    </>
    )
  }
}

