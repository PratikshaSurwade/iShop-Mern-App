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
        setBlueClicked(true)
    }
    const handleDarkPink = () => {
        
    }
    const handleBlack = () => {
        
    }
    const handleLightPink = () => {
        
    }
    const handleYellow = () => {
        
    }
    const handleCamron = () => {
        
    }

  return (
    <div className='sidebarHeader'>
            <h3>Color</h3>
            <div className='colorize'>
            <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#006CFF"}} onClick={handleBlue} className="forBlue"></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#FC3E39"}} onClick={handleDarkPink}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#171717"}} onClick={handleBlack}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#FFF600"}} onClick={handleYellow}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#FF00B4"}} onClick={handleLightPink}></button>
                                </span>
                                <span>
                                    <button style={{borderRadius:"50%", width:"1rem", height:"1rem", "border":"none", backgroundColor:"#EFDFDF"}} onClick={handleCamron}></button>
                                </span>

            </div>
            
    </div>
  )
}

export default Color;