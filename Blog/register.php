<?php 
  session_start();

  function hashPassword($password){
        
    $salt = '$2y$11$'.substr(bin2hex(openssl_random_pseudo_bytes(32)), 0, 22);

    return crypt($password, $salt);
}

function verifyPassword($password, $hashedPassword){
        
		return crypt($password, $hashedPassword) == $hashedPassword;
}



$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

if(empty($_POST)==false)
{

	$hashPassword = hashPassword($_POST['password']);
    // var_dump($_POST);
	$Mail=$_POST['mail'];
	$Password=$_POST['password'];
	$Last_Name=$_POST['nom'];
	$First_Name=$_POST['prenom'];
	$Pseudo = $_POST['pseudo'];
    
    
  
     $query = $pdo->prepare
	(
	    '
            INSERT INTO
                Users
                (Mail, Password, Last_Name, First_Name, Pseudo,Role)
            VALUES
                (?, ?,?,?,?,?)
        '

	);
    
    $query->execute( [ $Mail, $Password, $Last_Name,$First_Name,$Pseudo,"user"] );
    
   
} 


$template = 'register';

include 'layout.phtml';


?>