<script>
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});


$("#dashboard-form").on('submit',function(e){
		e.preventDefault();

var $form = $( this ),
          url = $form.attr( 'action' );


 var getData = { name: $('.name').val(), password: $('.password').val() , email: $('.email').val() };
          console.log(postData);







</script>