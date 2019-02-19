<?php
  session_start();
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare
(
	'SELECT Last_Name, First_Name, Id  FROM Author'
);

$query->execute();

$Authors = $query->fetchAll(PDO::FETCH_ASSOC);


$query = $pdo->prepare
(
	'SELECT * FROM Category'
);

$query->execute();

$Category = $query->fetchAll(PDO::FETCH_ASSOC);




if(empty($_POST)==false)
{
var_dump($_POST);

    $title = $_POST['titre'];
    $content = $_POST['Article'];
    $author_id = $_POST['author'];
    $category_id = $_POST['category'];
    var_dump($title);



     $query = $pdo->prepare
	(
	    '
            INSERT INTO
                Post
                (Title, Contents, Author_Id, Category_Id, Creation_Date)
            VALUES
                (?, ?, ?, ?, NOW())
        '

	);
    
    $query->execute( [ $title, $content, $author_id, $category_id ] );
    
   header('Location: Index.php');
   exit();
}




$template = 'red';

include 'layout.phtml';









?>
