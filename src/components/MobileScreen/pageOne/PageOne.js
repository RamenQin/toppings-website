import React from "react";
import "../mobile.css";
import PageOneText from "./PageOneText"
import PageOneImage from "./PageOneImage"

function PageOne(){
    return(
    <section id = 'pageOne'>
        <div className = 'container'>
        <div class = 'row'>
        <div class = "col-sm-1"></div>
        <div class = "col-xs-9 col-md-5" id = "fWords">
        <PageOneText />
        </div>
    
    
        <div class = 'col-sm-0 col-md-5'>
        <PageOneImage /> 
        </div>
   
    
    
    
    </div>

    </div>
    </section>
    )
}

export default PageOne