<?php

include 'Time.class.php'; 
include'watch.class.php';

$time = new Time(14,29,44);

$time->showTime();

$minute = $time->getMinute();

$time->sethour(4);
$hours=$time->gethour();

echo $hours;

$watch = new Watch(21, 18, 35, 2001);

var_dump($watch);






?>