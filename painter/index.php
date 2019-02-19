

<?php

include 'classes/Shape.class.php';
include 'classes/Rectangle.class.php';
include 'classes/Program.class.php';


$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');
$prog = new Program($rectangle);

$rec = $prog->drawRectangle();

var_dump($rec);


include 'index.phtml';

?>


