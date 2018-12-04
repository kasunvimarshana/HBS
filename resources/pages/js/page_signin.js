$(function(){   //start onload
    "use strict";
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
    /* forgot password click function */
    $("#forgot_password").on("click", function(event){
        //event.preventDefault();
    });
    
    
}); //end onload

function form_reset_password_action(form_obj){
    form_obj = $(form_obj);
    var email = form_obj.find("#email");
    console.log(email.val());
}