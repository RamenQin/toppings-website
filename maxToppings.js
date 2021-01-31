// function sendInfo() {
    
//     localStorage.setItem('emailtest','test')
//     var params = {
//         user_name: $("#name").val(),
//         user_email: $("#user_email").val(),
//         user_phone: $('#phone_number').val(),
//     }
//     var formData = {};
//     formData.append('service_id', 'service_siolzuj');
//     formData.append('template_id', 'template_ny3an7k');
//     formData.append('user_id', 'user_EvvJTh5bb1VQKSEsvVn5W');
//     formData.append('template_params', params)
//     console.log('test')
//     console.log(params)
//     $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
//         type: 'POST',
//         data: formData,
//         contentType: false, // auto-detection
//         processData: false // no need to parse formData to string
//     }).done(function() {
//         alert('Your mail is sent!');
//     }).fail(function(error) {
//         alert('Oops... ' + JSON.stringify(error));
//     });
// }

document.getElementById('signup-form').addEventListener('submit', function (event) {
    event.preventDefault();
    //     var templateParams = {
    //         user_name: document.getElementById("signup-form").elements[0].value,
    //         user_email: document.getElementById("signup-form").elements[1].value,
    //         user_phone: document.getElementById("signup-form").elements[2].value,
    //         uni_affiliation: document.getElementById("signup-form").elements[3].value,
    //         vendor_name: document.getElementById("signup-form").elements[5].value,
    //         vendor_address: document.getElementById("signup-form").elements[6].value
    //     };
    //     emailjs.send('signup_form', 'signup', templateParams);
    //     document.getElementById("signup-form").classList.add("reveal-if-active");  //hides form
    //     document.getElementById("confirmation").classList.remove("reveal-if-active");
    //     document.getElementById("confirmation").classList.add("visible");
    // });
    var params = {
        user_name: document.getElementById("signup-form").elements[0].value,
        user_email: document.getElementById("signup-form").elements[1].value,
        user_phone: document.getElementById("signup-form").elements[2].value,
        
    }
    var formData = new FormData(this);
    formData.append('service_id', 'service_siolzuj');
    formData.append('template_id', 'template_ny3an7k');
    formData.append('user_id', 'user_EvvJTh5bb1VQKSEsvVn5W');
    //formData.append('template_params', params)
    var formData2 = new FormData(this);
    
    console.log(params)
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function () {
        //alert('Your mail is sent!');
        var new_signup = $('#user_email').val();
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
        
        //send email to max@toppingsapp.com
        var data = {
            service_id: 'service_siolzuj',
            template_id: 'template_4h3fvz6',
            user_id: 'user_EvvJTh5bb1VQKSEsvVn5W',
            template_params: {
                'user_name': document.getElementById("signup-form").elements[0].value,
                'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...',
                user_email: document.getElementById("signup-form").elements[1].value,
                message: "Share this link to refer friends and earn rewards!: " + referral_link,
            }
        };
         
        $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
            type: 'POST',
            data: JSON.stringify(data),
            contentType: 'application/json'
        }).done(function() {
            window.location.replace('./results.html')
        }).fail(function(error) {
            alert('Oops... ' + JSON.stringify(error));
        });





        // formData.delete('service_id');
        // formData.delete('template_id');
        // formData.delete('user_id');
        // formData.delete('template_params');
        // var myparams2 = {
        //     user_name: "test",
        //     user_email: document.getElementById("signup-form").elements[1].value,
        //     message: "Your Referral Code: " + referral_link,
            
        // }
        // formData2.append('service_id', 'service_siolzuj');
        // formData2.append('template_id', 'template_4h3fvz6');
        // formData2.append('user_id', 'user_EvvJTh5bb1VQKSEsvVn5W');
        // formData2.set('template_params', myparams2)
        
        // for(var pair of formData2.entries()) {
        //     console.log(pair[0]+ ', '+ pair[1]);
        //  }
        
        
        // console.log(myparams2)
        
        
        // $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        //     type: 'POST',
        //     data: formData2,
        //     contentType: false, // auto-detection
        //     processData: false // no need to parse formData to string
        // }).done(function () {
        //     //alert('Your mail is sent!');
        //     console.log('success!')
        // }).fail(function (error) {
        //     alert('Oops... ' + JSON.stringify(error));
        // });


        var mylink = referral_link.substring(48)
        $('#current_waiter_spot').html("You are waiter " + waiter_priority)
        $('#all_waiter_spots').html(" out of " + total_waiters_currently)
        $('#total_referral').html("Referrals: " +total_referrals)
        $('#referral_link_url').html("Your Referral Code: " +mylink)
        //
        //$('#info_ref_link').html('Click on the button to copy your referral link (also sent to your email).')
        
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
    
    }).fail(function (error) {
        alert('Oops... ' + JSON.stringify(error));
    });
    

    
})
