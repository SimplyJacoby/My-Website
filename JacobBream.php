<?php
    //header('Location: http://localhost:80/JacobBream.html');
    $name = $_POST['name'];
    $address = $_POST['address'];
    $headers = "From: " . "helloummworld@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    mail("helloummworld@gmail.com", $subject, $message, $headers);
?>