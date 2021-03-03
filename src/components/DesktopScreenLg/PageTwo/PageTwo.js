import React from "react";
import "../large.css";

import Jefes from "../../assets/images/Jefes_logo.png"
import Kong from "../../assets/images/Hong_Kong_Logo.png"
import Playa from "../../assets/images/Playa_Bowls_logo.png"
import Shake from "../../assets/images/Shake-Shack.png"
import Tasty from "../../assets/images/Tasty_Burger_Logo.png"


function PageTwo(){
    return(
        <section id = "pageTwo" style = {{backgroundColor:"#E5E5E5"}}>
        <div className='container-fluid' style = {{marginTop:'150px'}}>
            <div className = 'row'>
                <div className = 'col-12 text-center'>
                    <h1 style = {{color:"#838383",marginBottom:"50px", fontSize:"5em"}}>Our Vendors</h1>
                    <div className = 'row'>
                        <div className = 'col-4'><img src = {Jefes} style = {{height:"80%",width:"80%"}}></img></div>
                        <div className = 'col-4'><img src = {Kong} style = {{height:"80%",width:"80%"}}></img></div>
                        <div className = 'col-4'><img src = {Playa} style = {{height:"80%",width:"80%"}}></img></div>
                    </div>
                    <div className = 'row'>
                    <div className = 'col-6'><img src = {Shake} style = {{height:"80%",width:"80%"}}></img></div>
                        <div className = 'col-6'><img src = {Tasty} style = {{height:"80%",width:"80%"}}></img></div>
                    </div>
                </div>
            </div>
            <div className = 'row'>
                
            </div>
            </div>
        </section>
    )
}

export default PageTwo