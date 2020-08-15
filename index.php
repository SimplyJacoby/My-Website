<?php
    $name = $_POST['name'];
    $address = $_POST['address'];
    $headers = "From: " . "JacobBreamWebsite@gmail.com";
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    mail("JacobBreamWebsite@gmail.com", $subject, $message, $headers);
?>