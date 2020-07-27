var toggle = document.getElementsByName ("columns");
    $(document).ready(function() {
    $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
        $("#design").toggle("slow",function(){
    });
        });
    });
var toggle = document.getElementsByName ("columns-2");
    $(document).ready(function() {
    $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
        $("#dev").toggle("slow",function(){
    });
        });
    });
var toggle = document.getElementsByName ("columns-3");
    $(document).ready(function() {
    $("#clickme").click (function() {$ ("#clickme").css ({"font-style":"bold"});
        $("#product").toggle("slow",function(){
    });
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
