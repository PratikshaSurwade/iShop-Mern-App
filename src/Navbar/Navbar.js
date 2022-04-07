import React from "react";
import { NavLink } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./navbar.css";
import logo from "./iSHOP Logo.svg"
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import navbarIcon from "./hamburger_icon.svg";

import Subnavbar from "./subnavbar/Subnavbar";
import Subnavbar2 from "./subnavbar/Subnavbar2";
import Topbar from "./topbar/Topbar";
import TopmobBar from "./topbar/topbarformob";


class Heading extends React.Component{

    render(){
        return(
            <>           
              <div className="navBar">
                    <Topbar />
                    <hr className="hrTopNavbar" style={{color:"#d3d3d3"}}></hr>
                    {/* <h1 className="headstyle">
                        iSHOP
                    </h1> */}
                    <img className="logo" src={logo} alt="" />
                    <div className="Navbarstyle">
                        <div className="navbarItems" title="Homepage"><NavLink to="/home">HOME</NavLink></div>
                        <div className='dropdown'>
                            <div className='navbarItems'><NavLink to="/accesories">STORE</NavLink></div>
                            <div className="dropdown-content" title="Go to Accesories page">
                            <NavLink to="/accesories">
                                <Subnavbar />
                              </NavLink>
                            </div>

                        </div>
                      
                        <div className="navbarItems">IPHONE</div>
                        <div className="navbarItems">IPAD</div>
                        <div className="navbarItems">MACBOOK</div>
                        <div className="navbarItems">ACCESORIES</div>

                    </div>
                    
                    <hr style={{margin:"0px 10%"}}></hr>
                    {/* <Subnavbar /> */}
                </div>
                <div className="navBar2">
                    <Navbar expand={false} vertical-height="100%">
                      <Container fluid>
                        <Navbar.Brand href="#">
                          {/* <h1 className="headstyle2">
                                            iSHOP
                                        </h1> */}
                                        <img className="logo2" src={logo} alt="" />
                                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="offcanvasNavbar" ><img className="navBarIcon" src={navbarIcon} alt="" ></img></Navbar.Toggle>
                        <Navbar.Offcanvas
                          id="offcanvasNavbar"
                          aria-labelledby="offcanvasNavbarLabel"
                          placement="top"
                          style={{height:"fit-content"}}
                        >
                          <Offcanvas.Header closeButton>
                            <Offcanvas.Title id="offcanvasNavbarLabel"></Offcanvas.Title>
                          </Offcanvas.Header>
                          <TopmobBar />
                          <Offcanvas.Body>
                            <Form className="d-flex">
                                <FormControl
                                  type="search"
                                  placeholder="Search"
                                  className="me-2"
                                  aria-label="Search"
                                />
                                {/* <Button variant="outline-success">Search</Button> */}
                              </Form>
                            <Nav className="justify-content-end flex-grow-1 pe-3">
                              <Nav.Link href="#action1"><div className="linkItems2">HOME</div></Nav.Link>
                              <Nav.Link href="#action1">
                                <div className="linkItems2">
                                  <NavDropdown className="linkItems2" title="STORE" id="offcanvasNavbarDropdown">
                                    <NavDropdown.Item href="#action3"><NavLink to="/accesories">
                                    <Subnavbar2 />
                              </NavLink></NavDropdown.Item>
                                    {/* <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                    <NavDropdown.Divider />
                                    <NavDropdown.Item href="#action5">
                                      Something else here
                                    </NavDropdown.Item> */}
                                  </NavDropdown>
                                </div>
                              </Nav.Link>

                              <Nav.Link href="#action1"><div className="linkItems2">IPHONE</div></Nav.Link>
                              

                              <Nav.Link href="#action1"><div className="linkItems2">IPAD</div></Nav.Link>

                              <Nav.Link href="#action1"><div className="linkItems2">MACBOOK</div></Nav.Link>
                              <Nav.Link href="#action1"><div className="linkItems2">ACCESORIES</div></Nav.Link>
                              
                      
                        
                      
                              {/* <Nav.Link href="#action2">Link</Nav.Link>
                              <NavDropdown className="linkItems2" title="Dropdown" id="offcanvasNavbarDropdown">
                                <NavDropdown.Item href="#action3"> <Subnavbar2 /></NavDropdown.Item>
                                {/* <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                  Something else here
                              </NavDropdown.Item> }
                              </NavDropdown> */}
                            </Nav>
                            
                          </Offcanvas.Body>
                        </Navbar.Offcanvas>
                      </Container>
                    </Navbar>
                </div>

            </>
        )
    }
}

export default Heading;