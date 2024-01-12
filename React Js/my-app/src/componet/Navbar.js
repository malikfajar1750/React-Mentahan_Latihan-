import React from "react";
import { Link, NavLink } from "react-router-dom";
import '../App.css';

export const Navbar = () =>{
    return (
        
        <nav>
            <NavLink className="link_nav" to='/'>Home</NavLink>
            <NavLink className="link_nav" to='/about'>About</NavLink>
        </nav>
    )
}

export default Navbar