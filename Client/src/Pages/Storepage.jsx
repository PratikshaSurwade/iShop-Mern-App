import React from 'react'
import { useLocation } from 'react-router-dom'

const Storepage = () => {
  const category = useLocation().pathname;
  const path = category.split("/")[2]
  
  return (
    <div>Storepage  {path? `: ${path}` : ""}</div>
  )
}

export default Storepage