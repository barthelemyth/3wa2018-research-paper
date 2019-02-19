<?php


require_once('vendor/autoload.php');


\Stripe\Stripe::setApiKey('sk_test_v0h1K8G6xQdjixLjsmASvL19');

$POST = filter_var_array($_POST, FILTER_SANITIZE_STRING);

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];
$token = $_POST['stripeToken'];


$customer = \Stripe\Customer::create(array(
	"email" => $email,
	"source" => $token
));


$charge = \Stripe\Charge::create(array(
	"amount" => 3000000,
	"currency" => "eur",
	"description"=>"Commande ok",
	"customer" => $customer->id
));


header('Location: sucess.php?tid='.$charge->id.'&product='.$charge->decription);
exit();