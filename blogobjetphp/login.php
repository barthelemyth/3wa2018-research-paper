<?php 


session_start();
include 'Database.class.php';

if(empty($_POST) == false) {

	var_dump($_POST);

$mail=$_POST['mail'];
$psw=$_POST['Password'];

var_dump($mail);


$data = new Database();
$log=$data->queryOne('SELECT
        *

            FROM
            Users
         

         WHERE mail=?', $criteria= [$mail]);

}


if ($query['psw']=$psw)

{

 	var_dump('vous etes connectés');


 }


$template = 'login';

include 'layout.phtml';

?>