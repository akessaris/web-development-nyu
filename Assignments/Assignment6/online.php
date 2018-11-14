<!DOCTYPE html>

<html>
<head>
<title>Online PHP</title>
<meta charset="utf-8">
</head>

<body>

<!--Include css file-->
<style><?php include 'online.css'; ?></style>

<?php
//Prices for products
$cat = 1;
$dog = 100;

//Retrieve values from form
$name = $_POST['fullname'];
$email = $_POST['email'];

$prod = $_POST['products'];
$quantity = $_POST['quantity'];
$price = "";

if ($prod == "cat") {
	$total = $cat * $quantity;
	$price = "($1)";
}
else {
	$total = $dog * $quantity;
	$price = "($100)";
}


printf("<h1>Digital Receipt</h1><p><ul><li>Name: $name</li> <li>Email: $email</li> <li>Product: $prod $price</li> <li>Quantity: $quantity</li> </ul></p>");
printf("<p>Total = $$total</p>");

?>

</body>

</html>

