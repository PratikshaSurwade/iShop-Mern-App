import React, { useState } from 'react';
import "./smallsidebar.css";
import { Slider } from '@material-ui/core';

function Prices() {
    const [values, setValue] = useState([30, 70]);
    const updateRange = (e, data) => {
        setValue(data)
    }
  return (
    <div className='sidebarHeader'>
            <h3>Prices</h3>
            {/* <div className='elementsContainer'> */}
            <div className='ranger'>
                <div>Ranger</div>
                <div>${values[0]}-${values[1]}</div>
            </div>
            <div className='elementsContainer'>
            <   Slider
                                    step={0.01}
                                    value={values}
                                    onChange={updateRange}
                                    // color='#F6F7F8'
            />
            </div>
            {/* </div> */}
    </div>
  )
}

export default Prices