<?php



include 'connection.php';
//header('Content-type: application/json');






$type = $_GET['type'];

if($type == 'register'){

	$response = array();
	$response['success'] = false;

	$sql = "INSERT INTO user (name, email, password)
	VALUES ('".$_POST['name']."', '".$_POST['email']."', '".$_POST['password']."')";


	if ($conn->query($sql) === TRUE) {
	   $response['success'] = true;
	}
	echo json_encode( $response );


}


if($type == 'login'){
	$response = array();
	$response['success'] = false;

	$sql = "SELECT id FROM user where email = '".$_POST['email']."' and password = '".$_POST['password']."'";
	$retval =mysqli_query($conn, $sql);

   if($retval ) {
      $response['success'] = true;
      while($row = mysqli_fetch_array($retval)) {
      $response['id'] = $row['id'];
   	} 
      

   }

	

	echo json_encode( $response );


}


?>