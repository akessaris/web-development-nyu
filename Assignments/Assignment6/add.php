<!DOCTYPE html>
<html>

<head>
<title>Caculator</title>
<meta charset="utf-8">
</head>

<body>

<?php

$num1 = floatval($_POST['num1']);
$num2 = floatval($_POST['num2']);

$operator = $_POST['operator'];


switch($operator) {
case "+":
$result = $num1 + $num2;
break;

case "-":
$result = $num1	- $num2;
break;

case "*":
$result = $num1 * $num2;
break;

case "/":
$result = $num1 / $num2;
break;

default:
$result = "ERROR";
break;
}

printf("<p>$num1 $operator $num2 = $result</p");
?>

 </body>

</html>

