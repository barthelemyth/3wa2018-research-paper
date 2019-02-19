<?php

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT productName,quantityOrdered, buyPrice, MSRP FROM products INNER JOIN orderdetails ON products.productCode=orderdetails.productCode WHERE orderNumber=?'
);

$query->execute( [ $_GET['orderNumber'] ] );

$detail = $query->fetch(PDO::FETCH_ASSOC);

var_dump($detail);

include 'index2.phtml';


?>