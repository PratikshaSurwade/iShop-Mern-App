import React, { useState } from 'react';
import Bestseller from "../../HomePage/Best_seller/Bestseller.js"
import Items from "../../HomePage/Best_seller/accesoriespage"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./largesidebar.css";

//json data
import itemdata from "../../../jsondata/storepage/storepage.json";

import Pagination from './Pagination';
import Webpagination from './Webpagination';
const itemData = itemdata;


const Largesidebar = ({ products }) => {
    const [showPerPage , setShowPerPage] = useState(6);
    const [total , setTotal] = useState(products.length);
    console.log(itemData)
    console.log(products)
    console.log(itemData.length)
    console.log(products.length)

    const [pagination , setpagination] = useState({
        start:0,
        end:showPerPage,
    })
    
    const onPaginationChange = ( start ,  end ) => {
        setpagination({start:start , end:end});
    };
  return (
    <>
       <div className='largeSidebar'>
                <div className='sidebarHeader'>
                    <div className='verticalStrip'>
                        <div className="flexDiv">
                            <div>{showPerPage} Items</div>
                            <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                <span>Sort By</span>
                                <span>
                                    <select name="sort" class="form-select form-select-sm" aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }}  >
                                        {/* onChange={(e) => setSort(e.target.value)} */}
                                        <option value="newest">Newest</option>
                                        <option value="price">Price</option>
                                        <option value="rating">Rating</option>
                                    </select>
                                </span>

                            </div>
                            <div className='d-flex justify-content-between flex-row flex-nowrap align-items-center'>
                                <span>Show</span>
                                <span>
                                    <span>
                                        <select name="showitem" class="form-select form-select-sm" aria-label=".form-select-sm example" style={{ fontSize: "1rem", fontWeight: "400", backgroundColor: "#f1f1f1" }} >
                                            <option defult="true" value="4">4</option>
                                            <option value="6">6</option>
                                            <option value="8">8</option>
                                            <option value="10">10</option>
                                        </select>
                                    </span>
                                </span>
                            </div>
                        </div>
                        <div style={{ width: "15%" }} className='d-flex text-end flex-row flex-nowrap overflow-visible align-items-center'>
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/ios-glyphs/30/000000/squared-menu.png" alt="" /></button>
                            <button style={{ border: "0", padding: "10px 5px", margin: "0 10px" }}><img className='myAuto' style={{ margin: "auto" }} src="https://img.icons8.com/material-rounded/24/000000/menu--v2.png" alt="" /></button>
                        </div>
                    </div>

                    <div className='verticalStrip2'>

                    </div>
                </div>
                    <div className='cardsbox'>
                        {products.slice(pagination.start,pagination.end).map(data=> {
                            return <Items info={ data } />
                        })}
                    </div>
                    {/* <div className='pagination'></div> */}
                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={total} />
                    <Webpagination  showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={total} />
                  
        
       </div>
                
    </>
  )
}

export default Largesidebar;