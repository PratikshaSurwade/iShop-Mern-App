import React from "react";
import Bestseller from "./Best_seller/Bestseller.js";
import Facilitis from "./Facilities/Facilitis";

import NavDropdown from 'react-bootstrap/NavDropdown';

import Iphoneadd from "./iphoneadd/iphoneadd.js";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router";
import {useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts as listProducts } from "../../redux/actions/productActions";


import "./home.css";
import axios from "axios";

import mainImg from "./corousel_3.png";
import mobImg from "./mobile_c3.png";


//import json
import bestSeller from "./../../jsondata/homepage/bestseller.json";

import Featuredproduct from "./feacturedprods/Featuredproduct.js";

const bestseler = bestSeller;

function Home() {
  const location = useLocation();
  const subtab = location.pathname.split("/")[2];
  console.log(subtab);
  const [bestseller ,setBestseller] = useState([]);

  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch]);


  // useEffect(() => {
  //   const getPost = async () => {
  //     const res = await axios.get(subtab
  //       ? `http://localhost:7000/api/products?subtab=${subtab}`
  //       : "http://localhost:7000/api/products"
  //   );
  //     console.log(res.data)
  //     setBestseller(res.data);
  //   };
  //   getPost();
  // }, [subtab]);
  // console.log(bestseller)
  return (
    
    <>
      <img className="mainImg" src={mainImg} alt="" />
      <img className="mobImg" src={mobImg} alt="" />      

      <h2 className="subHead">BEST SELLER</h2>
      <NavDropdown className="sortbestSeller" title="Categories" id="basic-nav-dropdown" >
            <NavDropdown.Item><NavLink className="navlinkremoval" to="/home/mac">Mac</NavLink></NavDropdown.Item>
            <NavDropdown.Item ><NavLink to="/home/iphone">iPhone</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/mac">iPad</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="">iPod</NavLink></NavDropdown.Item>
            <NavDropdown.Item><NavLink to="/accesory">Accessories</NavLink></NavDropdown.Item>

            {/* <NavDropdown.Divider /> */}
            
            {/* <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item> */}
      </NavDropdown>
      
      <div className="subHeadSubpoints">
        <div className="subListItems"><NavLink className="navlinkremoval" to="/home">All</NavLink></div>
        <div className="subListItems" ><NavLink className="navlinkremoval" to="/home/mac">Mac</NavLink></div>
        <div className="subListItems"><NavLink  className="navlinkremoval" to="/home/iphone">iPhone</NavLink></div>
        <div className="subListItems"><NavLink className="navlinkremoval"  to="/home/ipad">iPad</NavLink></div>
        <div className="subListItems"><NavLink className="navlinkremoval"  to="/home/ipod">iPod</NavLink></div>
        <div className="subListItems"><NavLink className="navlinkremoval"  to="/home/accessories">Accessories</NavLink></div>
      </div>

      <div className="home">
          <div className="homepageItems">
          {loading ? (
          <h2>Loading...</h2>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
          products.map((product) => {
              return <Bestseller info={product} />;
            })
            )}
          </div>
      </div>
      <div className="loadmore">LOAD MORE</div>
      <Iphoneadd />

      <Facilitis />

      <h3 className="subHead">FEATURED PTODUCTS</h3>
    
      <Featuredproduct />
    </>
  );
}

export default Home;
