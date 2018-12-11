$(document).on("pageinit", function(){
    "use strict";
    
    $("#var_birthday").datepicker({
        inline: true,
        dateFormat: "yy-mm-dd",
        changeMonth: true,
        changeYear: true,
        beforeShow: function(input, inst) {
            var calendar = inst.dpDiv;
            setTimeout(function() {
                calendar.position({
                    my: 'right top',
                    at: 'right bottom',
                    collision: 'none',
                    of: input
                });
            }, 1);
        }
    });
});