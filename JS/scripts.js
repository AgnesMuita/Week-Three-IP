// var toggle = document.getElementsByName ("columns");
//     $(document).ready(function() {
//     $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
//         $("#design").toggle("slow",function(){
//     });
//         });
//     });
// var toggle = document.getElementsByName ("columns-2");
//     $(document).ready(function() {
//     $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
//         $("#dev").toggle("slow",function(){
//     });
//         });
//     });
// var toggle = document.getElementsByName ("columns-3");
//     $(document).ready(function() {
//     $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
//         $("#product").toggle("slow",function(){
//     });
//         });
//     });
$(document).ready(function(){
    $("#development-image").click(function(){
      $("#development-image").slideDown('1500').hide('1000');
      $("#development").show('1500');
    });
    $("#development").click(function(){
      $("#development").slideUp('1500');
      $("#development-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#design-image").click(function(){
      $("#design-image").slideDown('1500').hide('1000');
      $("#design").show('1500');
    });
    $("#design").click(function(){
      $("#design").slideUp('1500');
      $("#design-image").slideDown('1500');
    });
  });
  
  $(document).ready(function(){
    $("#product-image").click(function(){
      $("#product-image").slideDown('1500').hide('1000');
      $("#product").show('1500');
    });
    $("#product").click(function(){
      $("#product").slideUp('1500');
      $("#product-image").slideDown('1500');
    });
  });
$("form").submit (function (event){
    if ($ ("input:first").val() === "javatpoint") {
    $("span").text ("We have received your message. Thank you for reaching out to us").show ();
    return;
}
$("span").text("Not valid!").show().fadeOut(2000);
event.preventDefault();
});

$(document).ready (function() {
    $('#myForm').submit(function() {
        $('#message').html ("Add your feedback here...");
        $.ajax ({
            url: 'inc/store-address.php',
            type: 'POST',
            data: $('#submit_btn').serialize()
    + '&ajax=true',
            success:function (msg) {
                var message = $.parseJSON(msg),
                    result = '';
                if (message.status === 'pending') {
                    result = 'Success! Please click the confirmation link that will be emailed to you shortly.';
                } else {
                    result = 'Error: ' + message.detail;
                }
                $('#message').html(result);
            }
        });
        return false;
    });
});
