// var confettiSettings = { target: 'my-canvas' };
// var confetti = new ConfettiGenerator(confettiSettings);
// confetti.render();
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}
function sizeWindow(x) {
  if (x.matches) { // If media query matches
    const myNavbar = `
        <img src = "./images/logo white.png" id="logo" style="height:45px;width: 135px;">
        <div class = "dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style = "position:fixed;right:10%;top:1.5%;background-color:#FF5200">
        More
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" style = "border:2px solid black">
            <a href = "./home.html" style = "color:#007EFF;text-decoration:underline">Home</a><br>
            <a href = "#about" style = "color:#007EFF;text-decoration:underline">About Us</a><br>
            <a href = "./portal.html" style = "color:#007EFF;text-decoration:underline">Vendor Portal</a><br>
            <a href = "./waitlist.html" style = "color:#007EFF;text-decoration:underline">Sign Up</a><br>
        </div>
        </div>
`
    $("#navbar").append(myNavbar)
    $("#navbar").height(60)
    
    const p1Content = `
    <div class = 'row'>
    <div class = col-xs style = "color:#FF5200;margin-top:70px">
    <h4>Your Two Favorite F Words:</h4>
    <div style ='text-align:center'>
    <h1 style = 'color:#007EFF'>FREE & FOOD</h1>
    </div>
    </div>
    
    <div class = 'col-xs-2'>
    <img src='./Brand-Assets/toppings_app_inhand.jpg' style='height:100%;width:100%;margin-top:-10px;margin-left:10%'>  
    </div>
   
    <div class = 'col-xs-2' id = 'waitlist'>
    <p>Coming to <span style = "color:red">Harvard</span><br>
    Spring 2020<br><a href = './waitlist.html' style = "color:red;text-decoration:underline;font-size:medium;">JOIN THE WAITLIST</a>
    </p>
    </div>
    
    
    </div>
    `
    const p2Content = `
    <div class='container-fluid' style = 'margin-top: -650px'>
            <div class='row'>
                
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front1.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                            <div class="back">
                                <img src = "./images/back1.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front2.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                            <div class="back">
                                <img src = "./images/back2.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='row'>
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front3.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                            <div class="back">
                                <img src = "./images/back3.png" id="logo" style="height:100%;width: 100%;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
      
    
    $("#page-1").append(p1Content)
    $("#pageTwo").append(p2Content)

    console.log('changed')
  } else {
    const myNavbar = `
    <img src="./images/logo white.png" id="logo" style="height:50px;width: 150px; justify-content: flex-start;">
    <div id="navlinks">
        
        <span class="navlink" :><a href="#pageTwoPointFive">About Us &nbsp</a></span>
        
        <span class="navlink":><a href="#pageTwo">How it Works &nbsp</a></span>
        <span class="navlink" :><a href="./portal.html">Vendor Portal &nbsp</a></span>
        
        <span class="navlink" :><a href="#pageThree">Contact Us</a></span>
        
    </div>
    `
    $("#navbar").append(myNavbar)
    const p1Content = `
    
   
    <div class = 'row'>
    <div class = col-sm-1></div>
    <div class = col-sm-5 col-md-5 style = "color:#007EFF;margin-top:15%;">
    <h4 style = 'font-size:.4em;text-align:left;'>Your Two Favorite <span style="color: #FF5200">F</span> Words:</h4>
    <div style ='text-align:center'>
    <h1 style = 'color:#FF5200;font-size:2.6em;font-weight:bold;line-height:80%'>FREE <br>&<br> FOOD</h1>
    <h4 style = 'font-size:.4em;text-align:left;color:#007EFF'>No-fee food delivery, fast.</h4>
    </div>
    </div>
    
    <div class = 'col-sm-5 col-md-5'>
    <img src='./Brand-Assets/toppings_app_inhand.jpg' style='height:100%;width:200%;margin-top:90px;margin-left:120px'>  
    </div>
   
    
    
    
    </div>

    
    `
    const p2Content = `
    <div class='container-fluid' style = 'margin-top:150px'>
    <div class = 'row'>
    <div class = 'col-12 text-center'>
    <h1 style="color: #FF5200; font-size:500%">We Hate Delivery Fees. So we got rid of 'em!</h1>
    </div> 
    </div>
            <div class='row'>
                <div class='col-4' align = 'center'>
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front1.png" id="logo" style="height:100%;width:100%;display: block;margin-left: auto;margin-right: auto;">
                            </div>
                            <div class="back">
                                <img src = "./images/back1.png" id="logo" style="height:100%;width: 100%; display: block;margin-left: auto;margin-right: auto;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-4' align = 'center'>
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front2.png" id="logo" style="height:100%;width: 100%;display: block;margin-left: auto;margin-right: auto;">
                            </div>
                            <div class="back">
                                <img src = "./images/back2.png" id="logo" style="height:100%;width: 100%;display: block;margin-left: auto;margin-right: auto;">
                            </div>
                        </div>
                    </div>
                </div>
                <div class='col-4' align = 'center'>
                    <div class="flip-container" ontouchstart="this.classList.toggle('hover');">
                        <div class="flipper">
                            <div class="front">
                                <img src = "./images/front3.png" id="logo" style="height:100%;width: 100%;display: block;margin-left: auto;margin-right: auto;">
                            </div>
                            <div class="back">
                                <img src = "./images/back3.png" id="logo" style="height:100%;width: 100%;display: block;margin-left: auto;margin-right: auto;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    `
    const p2Point5Content = `
      <div class = 'container-fluid'>
      <div class = 'row'>
        <div class = 'col-5'>
        <img src = 'images/toppingsteam.png' style = 'height:100%;width:100%'>
        </div>
        <div class = 'col-7' style = 'margin-top:2%;font-weight:bold;font-size:xx-large;'>
        <p>
        It started as a wechat group to help high-risk neighbors get food and groceries during COVID-19; and we were surprised by the power of the community- wait... Hol’ up people can bring stuff for each other when they go out...for FREE?! Why the F*CK are we paying for delivery?!?!
        </p>
        <p>
        Now Toppings is a member of the Harvard i-Labs Venture Program and has made an app to make delivery FREE and reward people for helping each other out. Yup. 😎
      </p>
        </div>
        </div>
      </div>
    `
    const p3Content = `
    <div class = 'container-fluid'>
    <div class = 'row'></div>
    
        <!-- <div class = 'col-6'>
            <div class = 'row'>
                <h1 style = 'color:#007EFF'>Trials are Closing Soon!</h1>
            </div>
            <div class = 'row'>
                <p style = 'color:#007EFF'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem voluptatibus voluptates cumque vel nostrum inventore nesciunt repudiandae labore enim.</p>  
                <p style = 'color:#007EFF'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem voluptatibus voluptates cumque vel nostrum inventore nesciunt repudiandae labore enim.</p>
                <p style = 'color:#007EFF'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem voluptatibus voluptates cumque vel nostrum inventore nesciunt repudiandae labore enim.</p>
                <p style = 'color:#007EFF'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic quidem voluptatibus voluptates cumque vel nostrum inventore nesciunt repudiandae labore enim.</p>
            </div>
        </div> -->

        <div class = 'col-12'>
            <div class="d-flex h-100 align-items-center">
                <div class="container">
                  <header class="text-center mb-5">
                    <h2 class="text-uppercase lined">Contact</h2>
                  </header>
                  <div class="row justify-content-center">
                    <div class="col-md-8">
                      <form action="" class="contact-form" id = "myForm">
                        <div class="row">
                          <div class="form-group col-lg-6">
                            <label for="user_name">Name</label>
                            <input id="user_name" type="text" name="user_name" placeholder="Enter your Name" class="form-control">
                          </div>
                          <div class="form-group col-lg-6">
                            <label for="user_email">Email</label>
                            <input id="user_email" type="text" name="user_email" placeholder="Enter your Email" class="form-control">
                          </div>
                          <div class="form-group col-lg-12">
                            <label for="subject">Subject</label>
                            <input id="subject" type="subject" name="subject" placeholder="Subject" class="form-control">
                          </div>
                          <div class="form-group col-lg-12">
                            <label for="message">Message:</label>
                            <textarea id="message" name="message" placeholder="Enter your message" class="form-control"></textarea>
                          </div>
                          <div class="form-group col-lg-12">
                            <button type="submit" class="btn btn-outline-primary w-100" id = "submitMsg">Send message</button>
                          </div>
                        </div>
                      </form>
                    </div>
        </div>
</div>    
    `
    const p4Content =`
    <img src = "./images/CovidWaiver.png" id="logo" style="height:100%;width: 100%;">`
    $("#page-1").append(p1Content)
    $("#pageTwo").append(p2Content)
    $("#pageTwoPointFive").append(p2Point5Content)
    $("#pageThree").append(p3Content)
    $("#pageFour").append(p4Content)
  }
}

var x = window.matchMedia("(max-width: 768px)")
//sizeWindow(x) // Call listener function at run time
x.addEventListener("change",sizeWindow(x)) // Attach listener function on state changes
//style = "color:red;text-decoration:underline;font-size:medium;font-weight:bold;"

// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on the button, open the modal
// btn.onclick = function() {
//   modal.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }

/* <div class = 'col-xs-3' id = 'waitlist2'>
<p>Coming to <span style = "color:red">Harvard</span><br>
Spring 2020<br>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalCenter">
Join the WaitList!
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" data-backdrop="false">
<div class="modal-dialog modal-dialog-centered" role="document">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title" id="exampleModalLongTitle">Sign Up!</h5>
      <button type="button" class="close" data-dismiss="modal" aria-label="Close">X</button>
    </div>
    <div class="modal-body">
    <div id="userSubmit">
    
    <span><input class="cform-control" type="email" id="waitlist_email" placeholder="Your email"></span><br>
    <span><input class="cform-control" type="email" id="referral_code" placeholder="Add a referral code here"></span><br>
    <button class="btn btn-primary btn-block" type="button" id="demo_submit_button"
        onclick="submit_email_to_waitlist()" style="width:60%;position:relative;left:20%"> Submit </button>
  
</div>
<div id = 'waitlistSpot' class = 'container-fluid'>
      <div class = 'row'>
      <div class = 'col-5' style = 'background-color:#FF5200; border-radius:25px; color:white'>
      <p>You are currently:</p>
      <div id = 'current_waiter_spot'></div>
      <p>of</p>
        <div id = 'all_waiter_spots'></div>
      </div>
      <div class ='col-2'></div>
        <div class = 'col-5' style = 'background-color:#FF5200; border-radius:25px;color:white'>
        <p>Your Referral Link</p><br>
        <div id = 'referral_link_url' style = "background-color:white;color:#007EFF;border-radius:25px"></div>
        <div id = 'info_ref_link'></div>
        </div>
        </div>
        </div>
    </div>
  </div>
</div>
</div>
<span style ='color:gray'>Refer Your Friends! <br> Top 50 Influencers<br>get early access! </span>
</p>

</div>
</div> */