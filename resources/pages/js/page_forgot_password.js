$(function(){   //start onload
    "use strict";
    
    /*$.mobile.loadPage( "../resources/results.php", true, {
        type: "post",
        data: $( "form#search" ).serialize()
    });*/
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
}); //end onload

$(document).on('pageinit', '#page_3', function(){      
    $('#form_reset_password').on('submit', function(event){
        event.preventDefault();
        alert("aaa");
        return false;
    }); 
});