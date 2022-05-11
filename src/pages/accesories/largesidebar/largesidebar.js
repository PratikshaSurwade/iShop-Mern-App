import React, { useState } from 'react';
import Bestseller from "../../HomePage/Best_seller/Bestseller.js"
import 'bootstrap/dist/css/bootstrap.min.css';

import "./largesidebar.css";

//json data
import itemdata from "../../../jsondata/storepage/storepage.json";
// import { Pagination } from 'react-bootstrap';

import Pagination from './Pagination';
import Webpagination from './Webpagination';
import Stripbar from './stripbar';
const itemData = itemdata;


function Largesidebar() {
    const [showPerPage , setShowPerPage] = useState(6);
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
                    <Stripbar />
                    
                    <div className='cardsbox'>
                        {itemData.slice(pagination.start,pagination.end).map(data=> {
                            return <Bestseller info={ data } />
                        })}
                        
                    </div>
                    {/* <div className='pagination'></div> */}
                    <Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={itemData.length} />
                    <Webpagination  showPerPage={showPerPage} onPaginationChange={onPaginationChange} total={itemData.length} />
                  
        
       </div>
                
    </>
  )
}

export default Largesidebar;