<?php
    $to_mail = 'contact@mixereq.pl';
    $imie = $_POST['firstname'];
    $subject = 'Wiadomość ze strony mixereq.pl od ' .$imie;
    $headers = 'From: ' .$_POST['email'] 'Content-Type: text/html;charset=utf-8';
    $message = $_POST['message'];
    mail($to_mail,$subject,$message,$headers);
    header('location:index.html');
?>