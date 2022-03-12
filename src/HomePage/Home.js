import React, { Component } from 'react';
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";
import Feactured from "./feacturedprods/Feactured";
import Iphoneadd from './iphoneadd/iphoneadd.js';

export default class Home extends Component {
  
  render() {
    return (
      <>
      <Bestseller />
      <Iphoneadd />
      <Facilitis />
      <Feactured />
    </>
    )
  }
}

