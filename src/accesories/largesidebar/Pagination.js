import React, { useEffect, useState } from 'react';
import "./pagination.css"

function Pagination({showPerPage , onPaginationChange , total}) {
  const [counter , setCounter] = useState(1);
  useEffect(() => {
    const value = showPerPage *  counter;

    onPaginationChange(value - showPerPage ,value)
  },[counter]);

  const onButtonClick =(type) => {
    if(type === "prev"){
      if(counter === 1){
        setCounter(1);
      }else{
        setCounter(counter-1);
      }

    }else if(type === "next"){
      if(Math.ceil(total/showPerPage) === counter){
        setCounter(counter);
      }else{
        setCounter(counter+1);
      }
    }

  }
  return (

    <div className='page'>
        <div className='d-flex justify-content-between'>
          <button className='btn btn-primary' onClick={() => onButtonClick("prev")}>Previous</button>

          <button className='btn btn-primary' onClick={() => onButtonClick("next")}>Next</button>
        </div>
    </div>
  )
}

export default Pagination;