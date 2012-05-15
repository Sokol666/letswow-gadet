<html>
<head>
<link href="css.css" rel="stylesheet"/>
</head>
<body>
<?php
include('config.php');
$res = mysql_fetch_row(mysql_query("SELECT COUNT(id) FROM gadget"));
echo "Пользователей гаджета: ".$res[0].".";
?>
</body>
</html>