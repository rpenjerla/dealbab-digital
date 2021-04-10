(function ($) {
       $(document).ready(function () {
           
        $('#photo-reject-list').on('change',function(){
            if( $(this).val()==="other"){
            $("#otherType").show()
            }
            else{
            $("#otherType").hide()
            }
        });
        
        $('#people').multiSelect();  
        $('#people2').multiSelect();  
        $('#categories').multiSelect({
            noneText: 'All categories',
            presets: [
                {
                    name: 'All categories',
                    all: true
                },
                {
                    name: 'My categories',
                    options: ['a', 'c']
                }
            ]
        });
     


        

        $('#datepicker').datepicker({
          uiLibrary: 'bootstrap'
        });
        $('#datepicker1').datepicker({
            uiLibrary: 'bootstrap'
          });


          var next = 1;
          $(".add-more").click(function(e){
              e.preventDefault();
              var addto = "#field" + next;
              var addRemove = "#field" + (next);
              next = next + 1;
              var newIn = '<input autocomplete="off" class="input form-control width90" id="field' + next + '" name="field' + next + '" type="file">';
              var newInput = $(newIn);
              var removeBtn = '<button id="remove' + (next - 1) + '" class="btn btn-danger remove-me pull-right" >-</button></div><div id="field">';
              var removeButton = $(removeBtn);
              $(addto).after(newInput);
              $(addRemove).after(removeButton);
              $("#field" + next).attr('data-source',$(addto).attr('data-source'));
              $("#count").val(next);  
              
                  $('.remove-me').click(function(e){
                      e.preventDefault();
                      var fieldNum = this.id.charAt(this.id.length-1);
                      var fieldID = "#field" + fieldNum;
                      $(this).remove();
                      $(fieldID).remove();
                  });
          });


    });
   

  
   
    



})(jQuery);

