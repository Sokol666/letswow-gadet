<?php
include('config.php');
$unixtime = time();
echo $unixtime;
$res = mysql_fetch_row(mysql_query("SELECT COUNT(*) FROM gadget WHERE id = '".$_GET['id']."'"));
if ($res[0] == 0 and $_GET['id'] != "")
{mysql_query("INSERT INTO `gadget` (`id`,`time`) VALUES ('".$_GET['id']."','".$unixtime."')");}
$deltime = $unixtime - 7862400;
echo "   ".$deltime;
mysql_query("DELETE FROM `gadget` WHERE time < '".$deltime."'");
?>