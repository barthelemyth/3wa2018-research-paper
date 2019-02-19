<?php
class OrderController
{
    public function httpGetMethod(Http $http, array $queryFields)
    {
    	/*
    	 * Méthode appelée en cas de requête HTTP GET
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $queryFields contient l'équivalent de $_GET en PHP natif.
    	  Methode get permet de trouver des info via url*/

           $meal = new MealModel();
          $Meal=$meal->listAll();
  

  

         return[
         'Meals'=>$Meal

         ];


    }

    public function httpPostMethod(Http $http, array $formFields)
    {


        
    	/*RegisterController
    	 * Méthode appelée en cas de requête HTTP POST
    	 *
    	 * L'argument $http est un objet permettant de faire des redirections etc.
    	 * L'argument $formFields contient l'équivalent de $_POST en PHP natif.
    	 * methode get permet de trouver des info via formulaire*/
    }
}