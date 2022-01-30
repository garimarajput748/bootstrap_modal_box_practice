$(document).ready(function () {
    $('#exampleModal').modal('show');

    /**
    *captcha text generate
    */
    $("#captcha_refresh").click(function () {
        $("#captcha_text").text(Math.floor(100000 + Math.random() * 900000));
        var colors = ['#ff0000', '#00ff00', '#0000ff'];
        var random_color = colors[Math.floor(Math.random() * colors.length)];
        $("#captcha_text").css('color', random_color);
    });

    $("#mybtn").click(function(e) {
        //prevent Default functionality
        var is_submit = "no";
        e.preventDefault();
        
        if($("#name").val()!=""){
            is_submit="yes";
            $("#first_name_error").addClass("d-none");
        }
        else{
            is_submit="no";
            $("#first_name_error").removeClass("d-none");
        }
        if($("#email").val()!=""){
            $("#email").next().addClass("d-none");
        }
        else{
            $("#email").next().removeClass("d-none");
        }
        if($("#contact_num").val()!=""){
            $("#contact_error").addClass("d-none");
        }
        else{
            $("#contact_error").removeClass("d-none");
        }
        if($("#country").val()!=""){
            $("#country_error").addClass("d-none");
        }
        else{
            $("#country_error").removeClass("d-none");
        }
        console.log(is_submit);
        if( is_submit=="yes"){
            $("#myform").submit();
        }
    });



    $("input#name").blur(function(){
        if($(this).val()!=""){
            $("#first_name_error").addClass("d-none");
        }
        else{
            $("#first_name_error").removeClass("d-none");
        }
    });




    
    
});
