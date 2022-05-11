import "./login.css";
import React from 'react';
import { NavLink } from 'react-router-dom';



export default function Login() {
    return (
        <div className="login">
            <span className="loginTitle">Login</span>
            <form className="loginForm">
                <label >Email</label>
                <input type="text" className="loginInput" placeholder="Enter your email..."></input>
                <label >Password</label>
                <input type="password" className="loginInput"   placeholder="Enter your password..."></input>
                <button className="loginButton">Login</button>
            </form>
            <button className="RegisterButton"><NavLink to="/register"style={{textDecoration:"none",color:"inherit"}}>Register</NavLink></button>
        </div>
    )
}
