

<?php

class MealModel {



	public function listAll()
	{

	$data = new Database();

	$Meal=$data->query('SELECT *

            FROM
            Meal
         

         ', []);

	return $Meal;



}


	public function listId($id)
	{

	$data = new Database();

	$Meal=$data->queryOne('SELECT *

            FROM
            Meal

            WHERE Id=?
         

         ', [$id]);

	return $Meal;



}

}







?>