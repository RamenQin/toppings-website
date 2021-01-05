// var data = {
//     service_id: 'service_fxx81qo',
//     template_id: 'template_74vqdajn',
//     user_id: 'user_P830Go6WpfPKe2ouuh6sI',
//     template_params: {
//         'username': 'James',
//         'g-recaptcha-response': '03AHJ_ASjnLA214KSNKFJAK12sfKASfehbmfd...'
//     }
// };
 
// $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
//     type: 'POST',
//     data: JSON.stringify(data),
//     contentType: 'application/json'
// }).done(function() {
//     alert('Your mail is sent!');
// }).fail(function(error) {
//     alert('Oops... ' + JSON.stringify(error));
// });



$('#myForm').on('submit', function(event) {
    event.preventDefault(); // prevent reload
    
    var params = {
        user_name: $("#user_name").val(),
        user_email: $("#user_email").val(),
        subject: $('#subject').val(),
        message: $('#message').val()
    }
    var formData = new FormData(this);
    formData.append('service_id', 'service_fxx81qo');
    formData.append('template_id', 'template_twf0v69');
    formData.append('user_id', 'user_P830Go6WpfPKe2ouuh6sI');
    formData.append('template_params', params)
    console.log('test')
    console.log(params)
    $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
        type: 'POST',
        data: formData,
        contentType: false, // auto-detection
        processData: false // no need to parse formData to string
    }).done(function() {
        alert('Your mail is sent!');
    }).fail(function(error) {
        alert('Oops... ' + JSON.stringify(error));
    });
});