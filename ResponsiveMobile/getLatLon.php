<?php
	header("Access-Control-Allow-Origin: *");
    $url = "http://maps.googleapis.com/maps/api/geocode/json?address=".$_GET['placename']."&sensor=false";
    $htm = file_get_contents($url);
	echo  str_replace("\n", "\n", $htm);
?>