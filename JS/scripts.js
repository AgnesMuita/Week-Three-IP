// var toggle= document.getElementById("development");
// $(document).ready(function() {
//     $('.tog').click (function(){
//         $(".image").toggle();
//         $(".text").toggle();
//     });
// });
// $ function submitForm() {
//     document.getElementById("myForm").submit ();
//     alert ("We have received your message. Thank you for reaching out to us.")
// }
$("form").submit (function (event){
    if ($ ("input:first").val() === "javatpoint") {
        $("span").text ("We have received your message. Thank you for reaching out to us").show ();
        return;
    }
    $("span").text("Not valid!").show().fadeOut(2000);
    event.preventDefault();
    });



// $(function (){
//     $(".button").click(function(){  
//     });
// });
// $ (function() {
//     // $('error').hide();
//     $("button").click(function(){
//         $('.error').hide ();
//         event.preventDefault();
//             var name=$("input#name").val();
//                 if (name == ""){
//             // $("label#name_error").show()
//             $("input#name").focus ();
//             return false;
//             }
//                 var email=$("input#email").val();
//                 if (email == ""){
//             // $("label#email_error").show()
//             $("label#email").focus();
//             return false;
//             }
//                 var message=$("input#Message").val();
//                 if(message == ""){
//             // $("label#message_error").show()
//             $("input#message").focus();
//             return false;
//             }
//     });
// });
// var dataString = 'name='+ name + '&email=' + email + '&message=' + message;
// $.ajax({
//     type: "POST",
//     url: "bin/process.php",
//     data: dataString,
//     success: function() {
//       $('#contact_form').html("<div id='message'></div>");
//       $('#message').html("<h2>Contact Form Submitted!</h2>")
//       .append("<p>We will be in touch soon.</p>")
//       .hide()
//     .fadeIn(1500, function() {
//     $('#message').append("<img id='checkmark' src='images/check.png' />");
//     });
//     }
//   });
//   return false;