import React from 'react'
import { useLocation } from 'react-router-dom'

const Storepage = () => {
  const category = useLocation().pathname;
  const path = category.split("/")[2]
  
  return (
    <>
      <div>Storepage  {path? `: ${path}` : ""}</div>

      <div className=' font-bold m-20 flex bg-pink-300'>
        <div className='min-w-1/3 mt-5 h-screen bg-amber-200'></div>
        <div className='min-w-2/3 h-screen mt-5 bg-blue-200'></div>
      </div>
    </>
  )
}

export default Storepage