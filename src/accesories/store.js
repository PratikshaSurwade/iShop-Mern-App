import React from 'react';

import "./store.css";
import Accesories from './smallsidebar/accesories';
import Prices from './smallsidebar/prices';
import Color from './smallsidebar/color';
import Brand from './smallsidebar/Brand';

function Store() {
  return (
    <div className='mainBar'>
            <div className='smallsidebar'>
                <Accesories />
                <Prices />
                <Color />
                <Brand />
            </div>
            <div className='largesidebar'>
                {/* <Iphoneadd /> */}
                <div className='storeitemContainer'>
                </div>
            </div>
    </div>
  )
}

export default Store