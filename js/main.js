$(document).ready(function(){



	$("#register-form").on('submit',function(e){
		e.preventDefault();
		var $form = $( this ),
          url = $form.attr( 'action' );

          var postData = { name: $('.name').val(), password: $('.password').val() , email: $('.email').val() };
          console.log(postData);
      /* Send the data using post with element id name and name2*/
      var posting = $.post( url, postData );

      /* Alerts the results */
      posting.done(function( data ) {
      	data = JSON.parse(data);
        if(data.success){
        	alert("Registration Successful!!")
        	window.location.href = "index.html";
        }else{
        	alert("Some Error Occured!");
        }
      });



	})

})