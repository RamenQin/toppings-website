import React from "react";
import "./medium.css";

function SideNav(){
    return(
    <div id="mySidenav" className="sidenav" >
     
        <a href="#" id="blog">PSSSSSSSTTT!!!</a>
        <div id = "innerSideNav">
        <p>Do you have the Secret Code?</p>
        
        <span><input class="form-control" type="referral" id="referral_code" placeholder="Referral Code"></input></span>
          <button class="btn btn-primary btn-block" type="button" id="demo_submit_button"
              onclick="save_code()"> Submit </button>
        </div>
    </div>
    )
}

export default SideNav