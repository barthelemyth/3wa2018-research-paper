<?php

$name = 'Thibaut';

var_dump($name);
var_dump($name);
var_dump($name);
var_dump($name);

for ($i = 0; $i < 6; $i++) {
	
    echo '<p>Salut '.$name.'<p>';

    if ($name == 'Paul') {

	echo 'Tu es Paul';
    
} else {

	echo 'Tu n\' es pas Paul';

}

}
include 'index2.phtml';
include 'footer.phtml';
?>


