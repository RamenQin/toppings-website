import React from "react";
import "./mobile.css";
import Navbar from "./Navbar/navbar";
import SideNav from "./sideNav"
import PageOne from "./pageOne/PageOne"

function MobileScreen() {
  return (
    <div id = 'fullPage'>
        <Navbar />
        <SideNav />
        <PageOne />
    {/* <section id='pageOne' style = 'margin-bottom:700px'>
        <div class='container' id='page-1'>


        </div>
    </section>
    <section id='pageTwo'>
        
    </section>
    <section id = 'pageTwoPointFive'>
    </section>

    <section id='pageThree' style = 'margin-top:-250px'>
        
    </section> */}
    </div>
  );
}

export default MobileScreen;
