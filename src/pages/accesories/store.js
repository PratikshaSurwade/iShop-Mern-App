import React from 'react';

import "./store.css";
import Accesories from './smallsidebar/accesories';
import Prices from './smallsidebar/prices';
import Color from './smallsidebar/color';
import Brand from './smallsidebar/Brand';
import Largesidebar from './largesidebar/largesidebar';
import Iphonemob from '../HomePage/iphoneadd/iphonemob';

function Store() {
  return (
    <>
        <h5 className='topHeader' style={{color:"#006CFF"}}>Store/Accesories</h5>

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
                    <Iphonemob />
                  </div>
                  <Largesidebar />
                </div>
        </div>
    </>
  )
}

export default Store