import React from 'react';
import Crousals2 from "./2_corousel.png";
import Bestseller from "./../../HomePage/Best_seller/Bestseller.js"
import DropDownIcon from "./dropdownIcon.png";
import 'bootstrap/dist/css/bootstrap.min.css';

import "./largesidebar.css";

//json data
import itemdata from "./../../jsondata/storepage/storepage.json";
const itemData = itemdata;

function Verticalbar() {
  return (
    <div>
        <div className='sidebarHeader'>
            {/* <div className=" d-flex justify-content-between flex-column flex-nowrap rounded" style={{ "width": "70%" }}> */}
                        
                        

                    {/* right side filter */}
                    <div className='verticalStrip'>
                            
                            <div className='d-flex justify-content-between flex-row flex-nowrap overflow-visible align-items-center' style={{ width: "55%", margin:"1%", minWidth:"450px" }}>
                                <div>13 Items</div>
                                <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                    <span>Sort By</span>

                                    <span>
                                        <div className="dropdown">
                                            
                                            <button style={{ "borderColor": "#a6a6a6"}} className='text-center mybutton d-flex justify-content-between flex-row flex-nowrap align-items-center'><div>Name</div> | <img src={DropDownIcon} style={{ "width": "15px" }} alt="" /></button>

                                            <div className="dropdown-content2 text-start" style={{ "padding": "3px" }}>
                                                
                                                <div>---</div>
                                                <div>---</div>
                                                <div>---</div>

                                            </div>
                                        </div>
                                    </span>

                                </div>
                                <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                    <span>Show</span>

                                    <span>
                                        <div className="dropdown">
                                            
                                            <button style={{ "borderColor": "#a6a6a6" }} className='text-center mybutton d-flex justify-content-between flex-row flex-nowrap align-items-center'><div>12</div> | <img src={DropDownIcon} style={{ "width": "15px" }} alt="" /></button>

                                            <div className="dropdown-content2" style={{ "padding": "3px" }}>
                                                
                                                <div>---</div>
                                                <div>---</div>
                                                <div>---</div>
                                            </div>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            <div style={{ width: "45%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center'>
                                <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='my-auto' style={{margin:"auto"}} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png"/></button>
                                <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='my-auto' style={{margin:"auto"}} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png"/></button>
                            </div>
                        </div>
                    </div>
                    <div className='cardsbox'>
                        {itemData.slice(0,12).map(data=> {
                            return <Bestseller info={ data } />
                        })}
                    </div>
         </div>
    
  )
}

export default Verticalbar;