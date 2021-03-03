import React from "react";
import "../mobile.css";
import image from "../../assets/images/logo white.png"

function Navbar(){
    return(
        <div id = 'navbar'>
            <img src={image} id="logo"></img>
            <div id="navlinks">
        
            <span class="navlink" ><a href="#pageTwoPointFive">About Us </a></span>
        
            <span class="navlink"><a href="#pageTwo">How it Works </a></span>
            <span class="navlink" ><a href="./portal.html">Vendor Portal </a></span>
        
            <span class="navlink" ><a href="#pageThree">Contact Us</a></span>
        
            </div>
        </div>
    )
}

export default Navbar