<?php

include 'painter.class.php'; 


$time = new Time(14,29,44);

$time->showTime();

$minute = $time->getMinute();

$time->sethour(4);
$hours=$time->gethour();

echo $hours;

$watch = new Watch(21, 18, 35, 2001);

var_dump($watch);






?>


<!-- <!DOCTYPE html>
<html>
<head>
	<title>svg</title>
</head>
<style>
	svg {
    	
        border: 1px solid black;
    
    }

</style>
<body>
	<h1>svg</h1>
    
    <svg width="600" height="750" version="1.1" xmlns="http://www.w3.org/2000/svg">
    	<rect x="10" y="10" width="30" height="30" stroke="black" fill="transparent" stroke-width="5"/>
        <rect x="60" y="10" rx="10" ry="10" width="70" height="30" stroke="black" fill="transparent" stroke-width="5"/>
        <circle cx="75" cy="75" r="20" stroke="red" fill="transparent" stroke-width="5"/>
        <ellipse cx="175" cy="125" rx="100" ry="35" stroke="red" fill="transparent" stroke-width="5"/>
        <polygon points="150 215, 200 300, 100 300" stroke="red" fill="green" stroke-width="3"/>
    </svg>
</body>
</html> -->


