import React from "react";
import "../large.css";
import image from "../../assets/images/logo white.png"

function Navbar(){
    return(
        <div id = 'navbar'>
            <img src={image} id="logo"></img>
            <div id="navlinks">


            <span class="navlink" ><a href="#pageOne">Home</a></span>
            <span class="navlink"><a href="#pageTwo">Partners</a></span>
            <span class="navlink" ><a href="#pageThree">About</a></span>
            <span class="navlink" ><a href="#pageFour">Sign Up</a></span>
            {/* <span class="navlink" ><a href="./portal.html">Vendor Portal </a></span>
            <span class="navlink" ><a href="#pageThree">Contact</a></span> */}
        
            
        
            </div>
        </div>
    )
}

export default Navbar