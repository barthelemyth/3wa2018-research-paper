<?php
session_start();

include 'Database.class.php';
include 'User.class.php';


if(empty($_POST) == false) {

	var_dump($_POST);
    
    $user = new User();
    
    $user->addUser($_POST);


}

$template = 'register';
include 'layout.phtml';

?>
