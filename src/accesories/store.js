import React from 'react';

import "./store.css";
import Accesories from './smallsidebar/accesories';
import Prices from './smallsidebar/prices';
import Color from './smallsidebar/color';
import Brand from './smallsidebar/Brand';
import Iphoneadd from '../HomePage/iphoneadd/iphoneadd';
import Verticalbar from './largesidebar/verticalbar';

function Store() {
  return (
    <div className='mainBar'>
            <div className='smallsidebar'>
                <Accesories />
                <Prices />
                <Color />
                <Brand />
                <div className='sidebarHeader'>
                  <h4>More</h4>
                </div>
            </div>
            <div className='largesidebar'>
              <div className='advertise'>
                <Iphoneadd />
              </div>
              <Verticalbar />
                <div className='storeitemContainer'>
                </div>
            </div>
    </div>
  )
}

export default Store