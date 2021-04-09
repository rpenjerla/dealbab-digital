(function ($) {
    $(document).ready(function () {
        $('#datepicker').datepicker({
          uiLibrary: 'bootstrap'
        });
        $('#datepicker1').datepicker({
            uiLibrary: 'bootstrap'
          });
    });

    $(".more").toggle(function(){
        $(this).text("less..").siblings(".complete").show();    
    }, function(){
        $(this).text("more..").siblings(".complete").hide();    
    });



})(jQuery);