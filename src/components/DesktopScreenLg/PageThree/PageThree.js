import React from "react";
import "../large.css";

import imgOne from "../../assets/images/front1-removebg-preview.png"
import imgTwo from "../../assets/images/front2-removebg-preview.png"
import imgThree from "../../assets/images/front3-removebg-preview.png"
import background from "../../assets/images/ToppingsPrintGray.png"


function PageThree(){
    return(
        <section id = "pageThree">
        <div className='container-fluid' style = {{marginTop:'150px',fontSize:"xx-large", color:"#838383", fontFamily:"roboto"}}>
            <div className = 'row'>
                <div className = 'col-6'>
                    <h2 style = {{color:"black", fontSize:"2em"}}>Friend to Friend Delivery</h2>
                    <p>Here at Toppings, we believe in the power of social networks for good. We wanted to create a product built to facilitate and encourage friends to help one another out. Every user can both order and deliver food to one another
                    </p>
                    </div>
                <div className = 'col-6'><img src = {imgOne} style = {{height:"80%",width:"60%", marginLeft:"20%"}}></img></div>
            </div>
            <div className = 'row'>
                <div className = 'col-6'><img src = {imgTwo} style = {{height:"80%",width:"60%"}}></img></div>
                <div className = 'col-6'>
                    <h2 style = {{color:"black", fontSize:"2em"}}>Free Food</h2>
                    <p>To incentivise and reward people for delivering through the app, our vendors have agreed to setup reward systems that will reimburse customers with free food for delivering to friends, or just ordering through the app! 
                    </p>
                    </div>
            </div>
            <div className = 'row'>
            <div className = 'col-6'>
                    <h2 style = {{color:"black", fontSize:"2em"}}>Community-Minded</h2>
                    <p>We love our community and know how important delivery is to local restaurants during quarantine so we make sure to work with restaurants to ensure they make a profit on every delivery.
                    </p>
                    </div>
                <div className = 'col-6'><img src = {imgThree} style = {{height:"80%",width:"60%", marginLeft:"20%"}}></img></div>
            </div>        
            </div>
        </section>
    )
}

export default PageThree