import React from 'react'
import { useLocation } from 'react-router-dom'

const Storepage = () => {
  const category = useLocation().pathname;
  const path = category.split("/")[2]
  
  return (
    <>
      <div>Storepage  {path? `: ${path}` : ""}</div>

      <div>Container</div>
    </>
  )
}

export default Storepage