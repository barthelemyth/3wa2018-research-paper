<?php


$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$postid=$_GET['id'];



$query = $pdo->prepare
(
	'DELETE 
    FROM Post
    Where id=?

    '
);

$query->execute([$_GET['id']]);

header('Location: Index.php');
   exit()

?>