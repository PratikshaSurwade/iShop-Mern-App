import React from "react";
import { Route } from "react-router-dom";
import "./navbar.css";
import mainImg from "./corousel_3.png"

import { NavLink } from "react-router-dom";
import Subnavbar from "./subnavbar/Subnavbar";


class Heading extends React.Component{

    render(){
        return(
            <>
                
                <div className="navBar">
                    <hr className="hrTopNavbar"></hr>
                    <h1 className="headstyle">
                        iSHOP
                    </h1>
                    <div className="Navbarstyle" id="Navbarstyle2">
                        <div className="Linkitems">HOME</div>
                        <div className="Linkitems">STORE</div>
                        <div className="Linkitems">IPHONE</div>
                        <div className="Linkitems">IPAD</div>
                        <div className="Linkitems">MACBOOK</div>
                        <div className="Linkitems">ACCESORIES</div>

                    </div>
                    
                    <hr style={{marginLeft:"10%",marginRight:"10%"}}></hr>
                </div>
                <Subnavbar />
                <img  className="mainImg" src={mainImg} />
                
            </>
        )
    }
}

export default Heading;