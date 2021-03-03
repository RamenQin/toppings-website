import React from "react";
import "../large.css";



function PageFour(){
    return(
    <section id = 'pageFour' style = {{backgroundColor: "#007BFF", width:"100%"}}>
        <div className = 'container-fluid'>
        
        <div className = 'row' style = {{position:"relative", top:"20%", left: "10%", backgroundColor:"white",color:"gray", width:"80%", height:'30%', textAlign:"center"}}>
            <div className = 'col-12'>
                    <h2 style = {{marginTop:"5%"}}>Join the Waitlist!</h2>
                    <form id="signup-form" style = {{width:"100%"}}>
                    <input type="text" id="user_email" name="user_email" placeholder="Email Address" style = {{width:"90%", borderRadius:"10px"}}required></input>
                    <input type="text" id="referral" name="referral" placeholder="Referral Code" style = {{marginTop:"20px",width:"90%", borderRadius:"10px"}}></input>

                    <center><input type="submit" value="Send" style = {{marginTop:"20px", backgroundColor:"#007BFF",color:"white"}}></input></center>
                </form></div>
        </div>
        <div className = 'row' style = {{backgroundColor:"black", color:"white", width: "100%", height: "250px", position:"absolute", top:"4750px"}}> 
        <div className = "col-6">
            <a href = "./PrivacyPolicy.html">Privacy Policy</a><br></br>
            <a href = "./TermsOfUse.html">Terms of Use</a><br></br>
            {/* <a href>Contact Us</a> */}

        </div>
        <div className = 'col-6' style = {{textAlign:"right"}}>
            <h2>Socials</h2>
            <a href = "https://www.instagram.com/toppingsapp/">Instagram</a>
            <br></br>
            <a href = "https://www.linkedin.com/company/toppingsapp/">LinkedIn</a>
        </div>
        </div>
    </div>
  
        
    
    </section>
    )
}

export default PageFour