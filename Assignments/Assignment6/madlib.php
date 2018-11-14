<html>
<head>
<title>Madlib Result</title>
</head>

<body>
<?php

//Retrieve nouns
$noun1 =  $_POST["noun1"];
$noun2 =  $_POST["noun2"];
$noun3 =  $_POST["noun3"];

//Retrieve adjectives
$adj1 =  $_POST["adj1"];
$adj2 =  $_POST["adj2"];

//Retrieve verbs
$verb1 =  $_POST["verb1"];
$verb2 =  $_POST["verb2"];

//Retrieve adjectives
$num =  $_POST["num"];

print("<p>Here's your Madlib story:</p>");
print("<p>Once upon a time, there was a $adj1 $noun1 who loved to $verb1 $num times a day. But one day, after hurting its $noun2, it decided to $verb2 its $adj2 $noun3 instead.</p>");

?>
</body>

</html>
