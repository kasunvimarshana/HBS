// function for center element
function center_element(){
    $( "#home_content" ).position({
        my: "center",
        at: "center",
        of: "#home"
    });
}

$(function(){   //start onload
    
    "use strict";
    
    $(window).bind("load", function(){
        center_element();
    });
    
    $(window).bind("resize", function(){
        center_element();
    });
    
}); //end onload