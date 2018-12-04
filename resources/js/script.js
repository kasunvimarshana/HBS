$( document ).bind( "mobileinit", function() {  // mobile configuration
    "use strict";
    // Make your jQuery Mobile framework configuration changes here!
    $.support.cors = true;  //  $.ajax to load cross-domain pages
    $.mobile.allowCrossDomainPages = true;  // allow cross-domain requests
    $.mobile.phonegapNavigationEnabled = true;  // This will replace calls to window.history.back
});

$(function(){   //start onload
    "use strict";
    
    /*$("#pagePort").load("pages/index.html", function(){
        (currentPage.init);
    });*/
    
    
    
}); //end onload