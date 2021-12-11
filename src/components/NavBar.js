import React from "react";
import {Link } from "react-router-dom"

const NavBar = ({user}) => {
    return (
    <div>
        <h2> Strangers Things </h2>

        {
        Object.keys(user).length > 0 ?
        <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/profile">Profile</Link>
            {/* something to logout */}
        </div> :
        <div id="navLinks">
            <Link to="/">Home</Link>
            <Link to="/posts">Posts</Link>
            <Link to="/login">Login</Link>
        </div>
        }       
        

    </div>)
}

export default NavBar