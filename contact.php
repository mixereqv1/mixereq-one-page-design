<?php
    $to_mail = 'contact@mixereq.pl';
    $imie = $_POST['firstname'];
    $subject = 'Wiadomość ze strony mixereq.pl od ' .$imie;
    $headers  = 'MIME-Version: 1.0' . "\r\n";
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n";
    $headers .= 'From: '.$_POST['email'].''."\r\n";
    $message = $_POST['message'];
    mail($to_mail,$subject,$message,$headers);
    header('location:index.html');
?>