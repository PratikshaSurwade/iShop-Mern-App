import React from 'react';
import "./smallsidebar.css";

function Accesories() {
  return (
    <>
        <div className='sidebarHeader'>
            <h3>ACCESORIES</h3>
            <div className='elementsContainer'>
                <div className='elements'>
                        <p>Apple Car</p>
                        <p>Air port & wireless</p>
                        <p>Cables & Docks</p>
                        <p>Cases & Films</p>
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
    </>
  )
}

export default Accesories;