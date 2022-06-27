import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./navbar.css";
import logo from "./iSHOP Logo.svg"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import Form from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";
import FormControl from 'react-bootstrap/FormControl';
import navbarIcon from "./hamburger_icon.svg";

import Subnavbar from "./subnavbar/Subnavbar";
import Topbar from "./topbar/Topbar";
import TopmobBar from "./topbar/topbarformob";


const Heading = () => {

  return (
    <>
      <div className="navBar">
        <Topbar />
        <hr className="hrTopNavbar" style={{ color: "#d3d3d3" }}></hr>

        <img className="logo" src={logo} alt="" />
        <div className="Navbarstyle">
          <div className="navbarItems" title="Homepage"><NavLink to="/home">HOME</NavLink></div>
          <div className='dropdown'>
            <div className='navbarItems'><NavLink to="/store" style={{ color: "" }}>STORE</NavLink></div>
            <div className="dropdown-content" title="Go to Accesories page">
              <Subnavbar />
            </div>
          </div>
          <div className="navbarItems" title="Homepage"> <NavLink to="/cat/iphone" style={{ color: "" }}>IPHONE</NavLink></div>
          <div className="navbarItems" title="Homepage"> <NavLink to="/cat/ipad" style={{ color: "" }}>IPAD</NavLink></div>
          <div className="navbarItems" title="Homepage"> <NavLink to="/cat/macbook" style={{ color: "" }}>MACBOOK</NavLink></div>
          <div className="navbarItems" title="Homepage"> <NavLink to="/cat/accessories" style={{ color: "" }}>ACCESSORIES</NavLink></div>

        </div>
        <hr style={{ margin: "0px 10%" }}></hr>
        {/* <Subnavbar /> */}
      </div>
      <div className="navBar2">
        <Navbar expand={false} vertical-height="100%">
          <Container fluid>
            <Navbar.Brand href="/">

              <img className="logo2" src={logo} alt="Logo" />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="offcanvasNavbar" ><img className="navBarIcon" src={navbarIcon} alt="" ></img></Navbar.Toggle>
            <Navbar.Offcanvas
              id="offcanvasNavbar"
              aria-labelledby="offcanvasNavbarLabel"
              placement="top"
              style={{ height: "fit-content" }}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
              </Offcanvas.Header>
              <TopmobBar />
              <Offcanvas.Body>

                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <div className="linkItems2"><NavLink to="/home" style={{ color: "inherit" }}>HOME</NavLink></div>
                  <div className="linkItems2"><NavLink to="/store" style={{ color: "inherit" }}>STORE</NavLink></div>
                  <div className="linkItems2"><NavLink to="/cat/iphone" style={{ color: "inherit" }}>IPHONE</NavLink></div>
                  <div className="linkItems2"><NavLink to="/cat/ipad" style={{ color: "inherit" }}>IPAD</NavLink></div>
                  <div className="linkItems2"><NavLink to="/cat/macbook" style={{ color: "inherit" }}>MACBOOK</NavLink></div>
                  <div className="linkItems2"><NavLink to="/cat/accessories" style={{ color: "inherit" }}>ACCESORIES</NavLink></div>

                </Nav>

              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      </div>

    </>
  )
}

export default Heading