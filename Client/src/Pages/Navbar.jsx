import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  return (
    <div className="mt-5 h-25 bg-amber-200 w-screen flex flex-col items-center px-4 gap-2">
      
        <img src="../iSHOPLogo.svg" className='h-10' alt="Logo Loading..." />
        <div className=" flex gap-15 font-bold text-lg">
          <Link to="/">HOME</Link>
          <Link to="/store">STORE</Link>
          <Link to="/iphone">IPHONE</Link>
          <Link to="/ipad">IPAD</Link>
          <Link to="/macbook">MACBOOK</Link>
          <Link to="/accessories">ACCESSORIES</Link>
        </div>
    </div>

  )
}

export default Navbar