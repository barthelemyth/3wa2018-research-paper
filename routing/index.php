il faut créer 3 pages 3 controllers et 3 views avec uniquement un index.php


/index.php
/index.php?page=login
/index.php?page=register



dossier controllers
dossier www

loginController.class.php
loginView.phtml

dossier library avec class database accessible partout

<?php


$requestUrl = $_SERVER['SCRIPT_NAME'];


?>



<!---------------------index.php-------------------------->
<?php


$requestUrl = $_SERVER['SCRIPT_NAME']; //http://10.10.109.52/sharecode/routing/index.php


if(empty($_GET) == true) {

	include 'controllers/homeController.class.php';

	$page = 'home';

} else if (array_key_exists('page', $_GET)){

//http://10.10.109.52/rooting/index.php?page=order

	include 'controllers/'.$_GET['page'].'Controller.class.php';
	$page = $_GET['page'];

} else {

	echo 'url incorrect';
}


include 'www/layout.phtml';

?>


<!---------------------www/layout.phtml-------------------------->

<!DOCTYPE html>
<html>
<head>
	<title>rooting</title>
</head>
<body>
<header>
	<a href="<?=$requestUrl?>">home</a>
	<a href="<?=$requestUrl?>?page=login">login</a>
	<a href="<?=$requestUrl?>?page=register">register</a>
</header>
<div>
	<?php include $page.'View.phtml'; ?>
</div>
<footer>
	<p>Voici mon footer</p>
</footer>
</body>
</html>

<!---------------------controllers/homeController.class.php-------------------------->


<?php

	var_dump('le controller qui se lance est celui de home');

?>


<!---------------------www/homeView.phtml-------------------------->

<div>
		<h1>Home Page</h1>
		<p>Bonjour et bienvenue sur ma home page </p>
		<p>blablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablablabla</p>

</div>


<!---------------------controllers/loginController.class.php-------------------------->
<?php

	var_dump('la controller qui se lance est celui de LOGIN');

?>


<!---------------------www/loginView.phtml-------------------------->

<div>
		<p>Login Page</p>
		<form>
			<input type="text" name="email" placeholder="mail">
			<input type="text" name="psw" placeholder="password">
		</form>

</div>



<!---------------------controllers/registerController.class.php-------------------------->

<?php

	var_dump('la controller qui se lance est celui de REGISTER');

?>

<!---------------------www/registerView.phtml-------------------------->


<div>
		<p>Register Page</p>
		<form>
			<input type="text" name="email" placeholder="mail">
			<input type="text" name="psw" placeholder="password">
			<input type="text" name="lastName" placeholder="nom">
			<input type="text" name="firstName" placeholder="prénom">
		</form>
</div>




