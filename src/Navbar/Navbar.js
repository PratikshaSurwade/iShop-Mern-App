import React from "react";
import "./navbar.css";


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
                    
                    <hr style={{margin:"0px 10%"}}></hr>
                </div>
            </>
        )
    }
}

export default Heading;