import React from 'react';
import { NavLink } from 'react-router-dom';

function Signup() {
  return (
    <>
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label >Username</label>
                <input type="text" className="registerInput" placeholder="Enter your Username..."></input>
                
                <label >Email</label>
                <input type="text" className="registerInput" placeholder="Enter your email..."></input>
                <label >Password</label>
                <input type="password" className="registerInput"   placeholder="Enter your password..."></input>
                <button className="registerButton">Register</button>
            </form>
            <button className="LoginButton"><NavLink to="/regiter"style={{textDecoration:"none",color:"inherit"}}>Login</NavLink></button>
        </div>
    </>
  )
}

export default Signup