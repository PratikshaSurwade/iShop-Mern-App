import React from 'react';
import "./largesidebar.css";


function Stripbar() {
  return (
        <div className='sidebarHeader'>
                <div className='verticalStrip'>
                            <div className="flexDiv">
                                    <div>13 Items</div>
                                    <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                        <span>Sort By</span>

                                        <span>
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{fontSize:"1rem",fontWeight:"400",backgroundColor:"#f1f1f1"}} >
                                                <option selected>Name</option>

                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </span>

                                    </div>
                                    <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                        <span>Show</span>

                                        <span>
                                        <span>
                                            <select class="form-select form-select-sm" aria-label=".form-select-sm example" style={{fontSize:"1rem",fontWeight:"400",backgroundColor:"#f1f1f1"}} >
                                                <option selected>12</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </span>
                                        </span>
                                    </div>
                            </div>
                                <div style={{ width: "15%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center'>
                                    <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='myAuto' style={{margin:"auto"}} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png"/></button>
                                    <button style={{border:"0", padding:"10px 5px", margin:"0 10px"}}><img className='myAuto' style={{margin:"auto"}} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png"/></button>
                                </div>
                </div>

                <div className='verticalStrip2'>

                </div>
        </div>

  )
}

export default Stripbar