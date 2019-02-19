<?php

// if(empty($_GET)==false)
// {
// var_dump($_GET);


// }

session_start();
var_dump($_POST);
$pdo = new PDO('mysql:host=localhost;dbname=blog', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$postid=$_GET['id'];



$query = $pdo->prepare
(
	'SELECT
        Post.Id,
            Title,
            Contents,
            Creation_Date,
            First_Name,
            Last_Name

            FROM
            Post
        INNER JOIN
            Author
        ON Post.Author_Id = Author.Id

         WHERE Post.Id=?'
);

$query->execute([$_GET['id']]);

$Detail = $query->fetch(PDO::FETCH_ASSOC);





if(empty($_POST)==false)
{



    $Pseudo = $_POST['Pseudo'];
    $Commentaire = $_POST['Commentaire'];
    
    


     $query = $pdo->prepare
	(
	    '
            INSERT INTO
                Comment
                (Pseudo, Contents, Post_Id, Creation_Date)
            VALUES
                (?, ?,?, NOW())
        '

	);
    
    $query->execute( [ $Pseudo, $Commentaire, $postid] );
    
   
}


$query = $pdo->prepare
(
	'SELECT
        Contents, Pseudo,Post_Id,Creation_Date

            FROM
            Comment
        

         WHERE Post_Id=?'
);

$query->execute([$_GET['id']]);

$Comment = $query->fetchAll(PDO::FETCH_ASSOC);






$template = 'show_red';


include 'layout.phtml';


?>






