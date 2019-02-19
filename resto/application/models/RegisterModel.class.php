<?php

class RegisterModel {



	public function Register()
	{

	 
     $Name=$_POST['lastName'];
      $firstName=$_POST['firstName'];
      $birthDay=$_POST['birthDay'];
      $birthMonth=$_POST['birthMonth'];
      $birthYear=$_POST['birthYear'];
      $address=$_POST['address']; 
      $city=$_POST['city'];
      $zipCode=$_POST['zipCode'];
      $phone=$_POST['phone'];
      $email=$_POST['email'];
      $password=$_POST['password'];

  
     $data = new Database();
     $insert=$data->executeSql('
            INSERT INTO
                User
                (FirstName, LastName, Email, Password, BirthDate,Adress,City,ZipCode, Phone)
            VALUES
                (?, ?,?,?,?,?,?,?,?)
        ',[$Name,$firstName,$email,$password, $birthYear.'/'.$birthMonth.'/'. $birthDay,$address,$city,$zipCode,$phone]);


}

}







?>