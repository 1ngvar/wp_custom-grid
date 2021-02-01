<?php
$currentpage = $_SERVER['REQUEST_URI'];
if($currentpage=="/" || $currentpage=="/index.php" || $currentpage=="/index" || $currentpage=="" ) {
	$page_class = "page_main";
	$bg = "background: url('assets/img/bg-main.jpg')";
	$container = "container";
} else {
	$page_class = "page";
	$bg = "background: url('assets/img/bg-other.png')";
	$container = "container container_wide";

}