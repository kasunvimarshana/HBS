$(document).on("pageinit", function(){
    "use strict";
    
    $("#var_birthday").datepicker({
        inline: true,
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true
    });
});