import React from "react";
import "./large.css";
import Navbar from "./Navbar/navbar";
import SideNav from "./sideNav"
import PageOne from "./pageOne/PageOne"
import PageTwo from "./PageTwo/PageTwo"
import PageThree from "./PageThree/PageThree"
import PageFour from "./PageFour/PageFour"
import Footer from "./Footer/footer"

function DesktopScreenLg() {
  return (
    <div id = 'fullPage'>
        <Navbar />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
     
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

export default DesktopScreenLg;
