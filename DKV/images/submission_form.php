<!DOCTYPE html>
<head>
</head>
<body>
<?php

if (isset($_Post['submit'])){
$name=$_POST['name'];
$email=$_POST['email'];
$Phone=$_POST['Phone'];
$msg=$_POST['msg'];
$sub=$_POST['sub'];

$to='deshbhagat007@gmail.com';
$subject='Form submission';
$message="Name: ".$name."\n". "phone: ".$Phone."\n". "wrote the following: "." \n\n".$msg;
$headers="From: ".$email;

if(mail($to,$subject,$message,$headers)){

echo"<h1>sent successfully! Thank you Mandip Singh"." ".$name." ,We will contact you shortly!<h1>";

}

else{
	
echo "Something went wrong!";
   }
}


?>

</body>
</html>