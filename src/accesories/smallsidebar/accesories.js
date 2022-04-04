import React from 'react';
import "./smallsidebar.css";

function Accesories() {
  return (
    <>
        <div className='sidebarHeader'>
            <h3>ACCESORIES</h3>
            <div className='elementsContainer'>

                        <div className='ele_classifier'><p>Apple Car</p><p>2</p></div>
                        <div className='ele_classifier'><p>Air port & wireless</p><p>48</p></div>
                        <div className='ele_classifier'><p>Cables & Docks</p><p>14</p></div>
                        <div className='ele_classifier'><p>Cases & Films</p><p>15</p></div>
                        <div className='ele_classifier'><p>Charging Devices</p><p>23</p></div>
                        <div className='ele_classifier'><p>Connecetd home</p><p>1</p></div>
                        <div className='ele_classifier'><p>Headphones</p><p>95</p></div>
   
            </div>
        </div>
    </>
  )
}

export default Accesories;