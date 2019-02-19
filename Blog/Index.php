
<?php

session_start();


$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT Post.Id,
        Title,
        Contents,
        Creation_Date,
        First_Name,
        Last_Name  FROM Post Inner Join Author ON Post.Author_Id = Author.Id'
);

$query->execute();

$Article = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'Index';


include 'layout.phtml';





?>
