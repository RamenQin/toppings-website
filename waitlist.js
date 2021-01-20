function post(api_url, data, success_callback, fail_callback) {
    
    $.ajax({
        method: 'POST',
        url: api_url,
        data: JSON.stringify(data),
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            success_callback(response);
        },
        error: function (response) {
            fail_callback(response);
        }
    });
}
function save_code(){
    if($('#referral_code').val().length === 9)
    {
        localStorage.setItem('code',$('#referral_code').val())
        localStorage.setItem('fromHome','true')
        console.log($('#referral_code').val())
        console.log('test')
        window.location.href = 'theTop.html'
        return false;
    }
    else if($('#referral_code').val().length === 57)
    {
        localStorage.setItem('code',$('#referral_code').val().substring(48))
        localStorage.setItem('fromHome','true')
        console.log($('#referral_code').val())
        console.log('test')
        window.location.href = 'theTop.html'
        return false;
    }
    else {
        alert('Please Enter a valid Referral Code')
    }
}
function save_code2(){
    if($('#referral_code').val().length === 9)
    {
        localStorage.setItem('code',$('#referral_code').val())
        localStorage.setItem('fromHome','true')
        console.log($('#referral_code').val())
        console.log('test')
        window.location.href = 'theTop.html'
        return false;
    }
    else if($('#referral_code').val().length === 57)
    {
        localStorage.setItem('code',$('#referral_code').val().substring(48))
        console.log($('#referral_code').val())
        localStorage.setItem('fromHome','true')
        console.log('test')
        window.location.href = 'theTop.html'
        return false;
    }
    else {
        alert('Please Enter a valid Referral Code')
    }
}
// function initialize(){
//     const success_callback = function (response) {
//         numWaiters = response['total_waiters_currently']
//         console.log(numWaiters)
//     }
//     const fail_callback = function (response) {

//         // perform actions based on error codes
//         response_code = response['status']
//         if (response_code == 422) {
//             $('#error_message').html("Invalid value to sign up with.");
//         } else if (response_code == 400) {
//             $('#error_message').html("Error!");
//         }
//     };
//     post('https://www.getwaitlist.com/waitlist',
//         {
//             email: "maxwellyu@college.harvard.edu",
//             api_key: 'P0DDR1',
//             referral_link: "https://www.toppingsapp.com"
//         }, success_callback, fail_callback)
    
// }

function submit_email_to_waitlist() {
    // fetch values from the frontend
    
    
    var new_signup = document.getElementById('waitlist_email').value;
    if (new_signup.substring(new_signup.length-19)!= "college.harvard.edu")
    {
        alert("Please Enter a Harvard Email");
        return false;
    }
    //fetch user signing up on frontend
    localStorage.setItem('email', new_signup)
    var current_url = "https://www.toppingsapp.com/theTop.html"
    console.log(localStorage.getItem('code'))
   
    if(localStorage.getItem('code').length === 0 )
    {
        alert("Please Enter a Referral Code")
        return;
    }
    if(localStorage.getItem('code').length === 9)
    {
    current_url = "https://www.toppingsapp.com/theTop.html?&ref_id="+localStorage.getItem('code')//fetch current URL, including potential referral token
    }
    else if (localStorage.getItem('code').length>40)
    {
        current_url = localStorage.getItem('code');
    }
    console.log(current_url)
    //alert(new_signup)
    const success_callback = function (response) {
        // fetching responses
        localStorage.setItem('data', JSON.stringify(response))
        waiter_email = response['registered_email']
        waiter_priority = response['current_priority']
        total_waiters_currently = response['total_waiters_currently']
        referral_link = response['referral_link']
        total_referrals = response['total_referrals']
        $("#userSubmit").hide()
        $("#userData").attr("style", "background-color: #007EFF;width:100%;border-radius: 5px;display: visible")
        //$(".modal-content").css("width","200%")
        // hiding parts of HTML
        // $('#waitlist_email').hide()
        // $('#demo_submit_button').hide()
        // $('#email_address_text').hide()

        // showing parts of HTML
        // $('#current_text').show()
        // $('#current_waiter_spot').show()
        // $('#out_of').show()
        // $('#all_waiter_spots').show()
        // $('#demo_referral').show()
       
        // appending HTML information
        var mylink = referral_link.substring(48)
        $('#current_waiter_spot').html("You are waiter " + waiter_priority)
        $('#all_waiter_spots').html(" out of " + total_waiters_currently)
        $('#total_referral').html("Referrals: " +total_referrals)
        $('#referral_link_url').html("Your Referral Code: " +mylink)
        window.location.replace('./results.html')
        //$('#info_ref_link').html('Click on the button to copy your referral link (also sent to your email).')
        //window.location.href = 'secret.html'
    };

    const fail_callback = function (response) {

        // perform actions based on error codes
        response_code = response['status']
        if (response_code == 422) {
            $('#error_message').html("Invalid value to sign up with.");
        } else if (response_code == 400) {
            $('#error_message').html("Error!");
        }
    };

    post('https://www.getwaitlist.com/waitlist',
        {
            email: new_signup,
            api_key: 'GPSWYI',
            referral_link: current_url
        }, success_callback, fail_callback);
    
};

function sign_in(){

    var new_signup = document.getElementById('user_email').value;
const success_callback = function (response) {
    // fetching responses
   
    waiter_email = response['registered_email']
    waiter_priority = response['current_priority']
    total_waiters_currently = response['total_waiters_currently']
    referral_link = response['referral_link']
    total_referrals = response['total_referrals']
    user_data = `<div class="progress">
    <div class="progress-bar progress-bar-striped active" role="progressbar"
    aria-valuenow="${total_referrals}0" aria-valuemin="0" aria-valuemax="100" style="width:${total_referrals}0%">
      40%
    </div>
  </div>`
    console.log(waiter_email + waiter_priority + total_referrals + total_waiters_currently + referral_link)

    $(".modal-content").html(user_data)
    $("#userData").attr("style", "background-color: #007EFF;width:100%;border-radius: 5px;display: visible")
    //$(".modal-content").css("width","200%")
    // hiding parts of HTML
    // $('#waitlist_email').hide()
    // $('#demo_submit_button').hide()
    // $('#email_address_text').hide()

    // showing parts of HTML
    // $('#current_text').show()
    // $('#current_waiter_spot').show()
    // $('#out_of').show()
    // $('#all_waiter_spots').show()
    // $('#demo_referral').show()
   
    // appending HTML information
    // var mylink = referral_link.substring(36)
    // $('#current_waiter_spot').html("You are waiter " + waiter_priority)
    // $('#all_waiter_spots').html(" out of " + total_waiters_currently)
    // $('#total_referral').html("Referrals: " +total_referrals)
    // $('#referral_link_url').html("Your Referral Code: " +mylink)
    // localStorage.setItem('test', mylink)
    //$('#info_ref_link').html('Click on the button to copy your referral link (also sent to your email).')
    //window.location.href = 'secret.html'
};

const fail_callback = function (response) {

    // perform actions based on error codes
    response_code = response['status']
    if (response_code == 422) {
        $('#error_message').html("Invalid value to sign up with.");
    } else if (response_code == 400) {
        $('#error_message').html("Error!");
    }
};

post('https://www.getwaitlist.com/waitlist',
    {
        email: new_signup,
        api_key: 'GPSWYI',
        referral_link: 'https://www.toppingsapp.com/theTop.html'
    }, success_callback, fail_callback);
};
// function copy_link() {
//     var text1 = document.getElementById("referral_link_url").textContent;
//     var copyText = text1.substr(22)
    
//     console.log(copyText)
//     /* Select the text field */
//     text1.select();
//     text1.setSelectionRange(22, 99999); /*For mobile devices*/

//     /* Copy the text inside the text field */
//     document.execCommand("copy");

//     /* Alert the copied text */
//     alert("Copied the text: " + copyText.value);
// }
