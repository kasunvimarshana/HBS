// function for center element
function page_0_center_element(){
    $( "#home_content" ).position({
        my: "center",
        at: "center",
        of: "#home"
    });
};

$(function(){   //start onload
    "use strict";
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
    $( window ).bind({
        load: function() {
            page_0_center_element();
        },
        navigate: function() {
            page_0_center_element();
        },
        resize: function() {
            page_0_center_element();
        },
        pageshow: function() {  // deprecated event
            page_0_center_element();
        },
        pagecontainershow: function() {
            page_0_center_element();
        }
    });
    
}); //end onload