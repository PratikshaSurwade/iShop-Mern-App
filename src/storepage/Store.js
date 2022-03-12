import React from 'react';
import Iphoneadd from '../HomePage/iphoneadd/iphoneadd';
import "./store.css"

function Store() {
  return (
    <>
        <div className='mainBar'>
            <div className='smallsidebar'>

                <h4>ACCESORIES</h4>
                <div className='elementsContainer'>
                    <div className='elements'>
                        <p>Apple Car</p>
                        <p>Air port & wireless</p>
                        <p>Cables & Docks</p>
                        <p> Cases & Films</p>
                        <p>Charging Devices</p>
                        <p>Connecetd home</p>
                        <p>Headphones</p>
                    </div>
                    <div className='elements'>
                        <p>2</p>
                        <p>48</p>
                        <p>14</p>
                        <p>15</p>
                        <p>23</p>
                        <p>1</p>
                        <p>95</p>
                    </div>
                </div>

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