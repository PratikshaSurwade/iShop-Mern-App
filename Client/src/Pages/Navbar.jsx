import React from 'react';

const Navbar = () => {
  return (
    <div className="h-25 bg-amber-200 w-screen flex flex-col items-center px-4 gap-2 mt-0">
      
        <img src="./iSHOPLogo.svg" className='h-10' alt="Logo Loading..." />
        <div className=" flex gap-15 font-bold text-lg">
          <div>HOME</div>
          <div>STORE</div>
          <div>IPHONE</div>
          <div>IPAD</div>
          <div>MACBOOK</div>
          <div>ACCESSORIES</div>
        </div>
    </div>
  )
}

export default Navbar