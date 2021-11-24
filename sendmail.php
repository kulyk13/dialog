<?php
	$to = "13dimon1313@gmail.com";
	$from = trim($_POST['email']);
	$subject = 'Свяжитесь со мной';
	$name = $_POST['name'];
	$phone = $_POST['phone'];

	$headers =
		'From: ' . $from . "\r\n" .
		'Name: ' . $name . "\r\n" .
		'Phone: ' . $phone . "\r\n" .
		'Reply-to: ' . $from . "\r\n" .
		'X-Mailer: ' . 'PHP/' . phpversion();
	if (mail($to, $subject, $headers)) {
		header('location: index.html');
	} else {
		echo "Mail didn`t send";
	}
?>