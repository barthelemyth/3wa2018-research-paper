<?php

class RegisterController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {


    }

    public function httpPostMethod(Http $http, array $formFields)
    {
       $register= new RegisterModel();
       $Register=$register->Register();
      

 }
}