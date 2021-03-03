import React from "react";
import "../large.css";

import background from "../../assets/images/Jefes.jpg"

function PageOne(){
    return(
    <section id = 'pageOne' style = {{backgroundImage:`url(${background})`, width:"100%"}}>
        <div className = 'container-fluid'>
        {/* <div className = 'row'> */}
        <div className = "col-6" id = "pageOneTextLg" style = {{height:"98.75%", position:"absolute",left:"0", opacity:"85%"}}>
        <div>
            <h1 style = {{color: "#FF5200", paddingTop:"10%", paddingBottom:"7.5%",paddingLeft:"10%"}}> Free Food Delivery From Friends</h1>
                <div>
                    <p style = {{color: "gray", fontSize: "xx-large",paddingLeft:"10%"}}>Using the power of social networks, get your favorite meals delivered to your doorstep with no delivery fees by delivering to friends! Best part? You’ll be rewarded for every pick-up and order!</p>
                </div>
                <div>
                    <h2 style = {{paddingLeft:"10%"}}>Join the Waitlist!</h2>
                    <form id="signup-form" style = {{paddingLeft:"10%",width:"100%"}}>
                    <input type="text" id="user_email" name="user_email" placeholder="Email Address" style = {{width:"90%", borderRadius:"10px"}}required></input>
                    <input type="text" id="referral" name="referral" placeholder="Referral Code" style = {{marginTop:"20px",width:"90%", borderRadius:"10px"}}></input>

                    <center><input type="submit" value="Send" style = {{marginTop:"20px", backgroundColor:"#007BFF",color:"white",position:"relative",right:"7.5%"}}></input></center>
                </form></div>
            </div>
        </div>
        <div className = "col-6"></div>
    
        
    
    
    
    </div>

    {/* </div> */}
    </section>
    )
}

export default PageOne