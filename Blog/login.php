<?php 

  session_start();

$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

if(empty($_POST)==false)
{

    // var_dump($_POST);
	$Mail=$_POST['mail'];
	$Password=$_POST['Password'];
	
    
    

   $query = $pdo->prepare
(
	'SELECT
        *

            FROM
            Users
         

         WHERE Mail=?' 
);

$query->execute([$Mail]);

$session = $query->fetch(PDO::FETCH_ASSOC);
// var_dump($session);
// var_dump($session['Password']);

if($session['Password']==$Password)
{
var_dump("Connecte");

  $_SESSION['email'] = $session['Mail'];
  $_SESSION['psw'] = $session['Password'];
  $_SESSION['firstName'] = $session['First_Name'];
  $_SESSION['lastName'] = $session['Last_Name'];
  $_SESSION['pseudo'] = $session['Pseudo'];
  $_SESSION['role'] = $session['Role'];

  // var_dump($_SESSION);

  header('Location: Index.php');





}

    
   
} 




$template = 'login';

include 'layout.phtml';

 ?>