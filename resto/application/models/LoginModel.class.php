<?php

class LoginModel {



	public function Login()

	{  
    var_dump($_POST);
    $email=$_POST['email'];
    $password=$_POST['password'];

   $database= new Database();
   $request=$database->queryOne('SELECT *
                                  From User
                                  Where Email=?',$criteria= [$email]);


   if ($password=$request['Password'])
   {

    var_dump('connecté');
  $_SESSION['email'] = $request['Email'];
  $_SESSION['psw'] = $request['Password'];
  $_SESSION['firstName'] = $request['FirstName'];
  $_SESSION['lastName'] = $request['LastName'];


// $http->redirectTo('');



   }

   // else {var_dump('non connecté'}



}



}







?>