/*$('#index').live('pageshow', function(e, data){    
    $('#index-content').css('margin-top', ($(window).height() - $('[data-role=header]').height() -       $('[data-role=footer]').height() - $('#index-content').outerHeight()) / 2);
});

$(window).load(function(){
	centerContent();
});

$(window).resize(function(){
	centerContent();
});*/

$(function(){   //start onload
    
    "use strict";
    
    $( "#home_content" ).position({
        my: "center",
        at: "center",
        of: "#home"
    });
    
}); //end onload