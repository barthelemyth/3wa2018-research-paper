<?php

$dico = ['monkey' => 'singe',
    'dog' => 'chien',
    'cat' => 'chat',
   'duck' => 'canard'
];

$word = $_POST['word'];
$lang = $_POST['direction'];


if(array_key_exists($word, $dico) == true)
{
    $trad1=$dico[$word];
	var_dump($trad1);
}	
else if (in_array($word, $dico)==true)
{
	$trad2=array_search($word, $dico);
	var_dump($trad2);
}
else{
var_dump('la valeur n existe pas');	
}

include 'index.phtml';
?>

