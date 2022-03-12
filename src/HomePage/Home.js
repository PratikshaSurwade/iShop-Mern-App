import React, { Component } from 'react';
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";
import Feactured from "./feacturedprods/Feactured";

export default class Home extends Component {
  
  render() {
    return (
      <>
      <Bestseller />
      <Facilitis />
      <Feactured />
    </>
    )
  }
}

