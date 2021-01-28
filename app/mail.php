<?php

$recepient = "example@mail.com";
$sitename = "Wordpress";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$msg = trim($_POST["message"]);
$message = "Name: $name \n E-mail: $phone \n Message: $msg";

$pagetitle = "Новая заявка с сайта \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");