<?php
//-----------------Настройки подключения к базе:-------------------------
$host="localhost";
$user=""	;
$password="";
$db="";
$string = htmlspecialchars($_POST['string']);
$delid = htmlspecialchars($_POST['id']);
$ConnectDB = mysql_connect($host,$user,$password);
mysql_select_db($db,$ConnectDB);
mysql_query('SET names "utf8"');
?>