<?php

$tab=[];

do{
$random = rand(1, 49);
if(in_array($random, $tab)==false)
{array_push($tab, $random);
}
}while (count($tab)<6);

var_dump($tab);
$result=implode(', ', $tab);
var_dump($result);

include 'index.phtml';
?>




