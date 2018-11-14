<!DOCTYPE html>

<html>

<head>
<title>Quiz Results</title>
<meta charset="utf-8">
</head>

<body>

<style> <?php include "quiz.css" ?> </style>

<?php

$fname = $_POST['firstname'];
$lname = $_POST['lastname'];

$answer1 = $_POST['q1'];
$answer2 = $_POST['q2'];
$answer3 = $_POST['q3'];
$answer4 = $_POST['q4'];

$correct_answers = array("Dinner and a Show", "Binging with Babish", "Me!", "Either True or False");
$correct = 0;
$questions = 4;

printf("<h1>Quiz Results</h1>");

//Question 1
printf("<ol><li>What was my top tier patron reward for my 'Fund My Extravagancies!'</li> <p>You answered $answer1, which is: ");
$correctly = "";

if ($answer1 == 'Dinner and a Show') {
	$correct += 1; 
	$correctly = "CORRECT!";
	printf("<span class='correct'>$correctly</span></p>");
}
else {
	$correctly = "INCORRECT!";
	printf("<span class='incorrect'>$correctly</span></p>");
	printf("<p>The correct answer was: $correct_answers[0]</p>");

}

//Question 2
printf("<li>Who was my culinary inspiration for my website 'Amateur Chef'?</li> <p>You answered $answer2, which is: ");
if ($answer2 == "Binging with Babish") {
        $correct += 1;
        $correctly = "CORRECT!";
        printf("<span class='correct'>$correctly</span></p>");
}
else {
        $correctly = "INCORRECT!";
        printf("<span class='incorrect'>$correctly</span></p>");
        printf("<p>The correct answer was: $correct_answers[1]</p>");
}

//Question 3
printf("<li>Who's your favorite student in Web Development and Programming?</li> <p>You answered $answer3, which is: ");
if ($answer3 == "Me!") {
        $correct += 1;
        $correctly = "CORRECT!";
        printf("<span class='correct'>$correctly</span></p>");
}
else {
        $correctly = "INCORRECT!";
        printf("<span class='incorrect'>$correctly</span></p>");
        printf("<p>The correct answer was: $correct_answers[2]</p>");
}

//Question 4
printf("<li>The answer to this question is false.</li> <p>You answered $answer4, which is: ");
if ($answer4 == "True" || $answer4 =="False") {
        $correct += 1;
        $correctly = "CORRECT!";
        printf("<span class='correct'>$correctly</span></p>");
}
else {
        $correctly = "INCORRECT!";
        printf("<span class='incorrect'>$correctly</span></p>");
        printf("<p>The correct answer was: $correct_answers[3]</p>");
}

//Calculate and print the score
$score = ($correct / $questions) * 100;
printf("<h2>Congratulations $fname $lname, you scored $score%%.</h2>");

printf("<hr><h2>Answer Key:</h2><ol>");

foreach($correct_answers as $item) {
 printf("<li>$item</li>");
}
printf("</ol>");
?>

</body>

</html>

