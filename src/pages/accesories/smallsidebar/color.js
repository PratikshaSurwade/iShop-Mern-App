import React, { useState } from 'react';
import "./smallsidebar.css";
import "./color.css";

function Color() {
    
    const [blueClicked, setBlueClicked] = useState(true);
    const [darkPinkClicked, setDarkPinkClicked] = useState(false);
    const [blackClicked, setBlackClicked] = useState(false);
    const [lightPinkClicked, setLightPinkClicked] = useState(false);
    const [yellowClicked, setYellowClicked] = useState(false);
    const [camronClicked, setCamronClicked] = useState(false);

    const handleBlue = () => {
        setBlueClicked(true);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setCamronClicked(false);
    }
    const handleDarkPink = () => {
        setBlueClicked(false);
        setDarkPinkClicked(true);
        setBlackClicked(false);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setCamronClicked(false);
        
    }
    const handleBlack = () => {
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(true);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setCamronClicked(false);
        
    }
    const handleYellow = () => {
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setYellowClicked(true);
        setLightPinkClicked(false);
        setCamronClicked(false);
        
    }
    const handleLightPink = () => {
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setYellowClicked(false);
        setLightPinkClicked(true);
        setCamronClicked(false);
        
    }
    const handleCamron = () => {
        setBlueClicked(false);
        setDarkPinkClicked(false);
        setBlackClicked(false);
        setLightPinkClicked(false);
        setYellowClicked(false);
        setCamronClicked(true);
        
    }

  return (
    <div className='sidebarHeader'>
            <h3>Color</h3>
            <div className='colorize'>
            <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleBlue} className={blueClicked?"forBlue":"removeAll"}>
                                        <div style={{backgroundColor:"#006CFF",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>
                                    </div>
                                </span>
                                <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleDarkPink} className={darkPinkClicked?"forPink":"removeAll"}>
                                        <div style={{backgroundColor:"#FC3E39",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>
                                    </div>
                                </span>
                                <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleBlack} className={blackClicked?"forBlack":"removeAll"}>
                                        <div style={{backgroundColor:"#171717",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>
                                    </div>
                                </span>
                                <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleYellow} className={yellowClicked?"forYellow":"removeAll"}>
                                        <div style={{backgroundColor:"#FFF600",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>
                                    </div>
                                </span>
                                <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleLightPink} className={lightPinkClicked?"forLightPink":"removeAll"}>
                                        <div style={{backgroundColor:"#FF00B4",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>

                                    </div>
                                </span>
                                <span>
                                    <div style={{borderRadius:"50%", width:"1.5rem", height:"1.5rem",position:"relative",cursor:"pointer"}} onClick={handleCamron} className={camronClicked?"forCamron":"removeAll"}>
                                        <div style={{backgroundColor:"#FC3E39",borderRadius:"50%", width:"1rem", height:"1rem" ,border:"none",position:"absolute",margin:"auto",top:"2px",right:"2px"}}></div>

                                    </div>
                                </span>
                                

            </div>
        
    </div>
  )
}

export default Color;