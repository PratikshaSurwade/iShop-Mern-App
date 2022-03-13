import React from 'react';
import Iphoneadd from '../HomePage/iphoneadd/iphoneadd';
// import Itemsstore from './items/Itemsstore';
import Accesories from './smallSizebar/Accesories';
import Color from './smallSizebar/Color';
import "./store.css"

function Store() {
  return (
    <>
        <div className='mainBar'>
            <div className='smallsidebar'>
                <Accesories />
                {/* <Color /> */}
            </div>
            <div className='largesidebar'>
                <Iphoneadd />
                <div className='storeitemContainer'>
                </div>
            </div>
        </div>
    </>
  )
}

export default Store;