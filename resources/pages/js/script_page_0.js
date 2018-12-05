$(function(){   //start onload
    "use strict";
    
    /*$.mobile.loadPage( "../resources/results.php", true, {
        type: "post",
        data: $( "form#search" ).serialize()
    });*/
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
    /* center element */
    $( window ).bind({
        load: function() {
            //function_();
        },
        navigate: function() {
            //function_();
        },
        resize: function() {
            //function_();
        },
        pageshow: function() {  // deprecated event
            //function_();
        },
        pagecontainershow: function() {
            //function_();
        }
    });
    
}); //end onload