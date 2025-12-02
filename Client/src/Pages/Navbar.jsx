import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className=" h-40 w-screen flex flex-col items-center  px-4 gap-2">
      <div className='h-10 w-screen flex items-center justify-around'>
        <Link to='/user'>User</Link>
        <p><Link to="/login">Login</Link>/<Link to="/register">Register</Link></p>
      </div>
      <img src="../iSHOPLogo.svg" className='' alt="Logo Loading..." />
      <div className="p-7.5 flex gap-15 font-bold text-lg">
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