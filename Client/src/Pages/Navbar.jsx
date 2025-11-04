import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [userLoading, setUserLoading] = useState(false);
  return (
    // <div className="mt-5 h-25 bg-amber-200 w-screen flex flex-col items-center px-4 gap-2">
      
    //     <img src="./iSHOPLogo.svg" className='h-10' alt="Logo Loading..." />
    //     <div className=" flex gap-15 font-bold text-lg">
    //       <div>HOME</div>
    //       <div>STORE</div>
    //       <div>IPHONE</div>
    //       <div>IPAD</div>
    //       <div>MACBOOK</div>
    //       <div>ACCESSORIES</div>
    //     </div>
    // </div>

		<div className='navBar'>
			<div className='navBarTop'>
				<div className='navBarTopLeft'><Link to="/cart">Items <span style={{ color: "red" }}></span></Link></div>
				{!userLoading && user  
					?(
					<div className='navBarTopRight'><Link to={`/user/${user._id}`}>User</Link></div>
					):
					<div className='navBarTopRight'><Link to="/login">Login</Link> | <Link to="/register">Register</Link></div>
				}
			</div>
			<hr style={{ color: "#e3e3e3" }}></hr>
			<img src='https://mern-ishop-ecommerce-app.netlify.app/static/media/iSHOP%20Logo.d093de95c7a229e25fd7b98af962e3ce.svg' alt='Logo'></img>
			<div className='navBarBottom'>
				<h3><Link to="/" className='navBarLinks'>HOME</Link></h3>
				<h3><Link to="/store" className='navBarLinks'>STORE</Link></h3>
				<h3><Link to="/store/ipad" className='navBarLinks'>IPAD</Link></h3>
				<h3><Link to="/store/iphone" className='navBarLinks'>IPHONE</Link></h3>
				<h3><Link to="/store/macbook" className='navBarLinks'>MACBOOK</Link></h3>
				<h3><Link to="/store/accessories" className='navBarLinks'>ACCESSORIES</Link></h3>
			</div>
			<hr></hr>
		</div>
  )
}

export default Navbar