$( document ).bind( "mobileinit", function() {  // mobile configuration
    "use strict";
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;  //  $.ajax to load cross-domain pages
    $.mobile.allowCrossDomainPages = true;  // allow cross-domain requests
    $.mobile.phonegapNavigationEnabled = true;  // This will replace calls to window.history.back
    $.mobile.ignoreContentEnabled = true;   // To activate data-ajax="false"
});

$(function(){   //start onload
    "use strict";
    
    /*$.mobile.changePage( "searchresults.php", {
        type: "post",
        reverse: false,
        changeHash: false,
        data: $("form#search").serialize()
    });*/
    
    /*$.mobile.loadPage( "../resources/results.php", true, {
        type: "post",
        data: $( "form#search" ).serialize()
    });*/
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
}); //end onload