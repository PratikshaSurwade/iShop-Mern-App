import React from "react";
// import { Link } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';

import "./navbar.css";
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
                        <div className='dropdown'>
                            <div className='Linkitems'>STORE</div>
                            <div className="dropdown-content">
                                <Subnavbar />
                            </div>

                        </div>
                      
                        <div className="Linkitems">IPHONE</div>
                        <div className="Linkitems">IPAD</div>
                        <div className="Linkitems">MACBOOK</div>
                        <div className="Linkitems">ACCESORIES</div>

                    </div>
                    
                    <hr style={{margin:"0px 10%"}}></hr>
                    {/* <Subnavbar /> */}
                </div>
            </>
        )
    }
}

export default Heading;