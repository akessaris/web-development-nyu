// External JS file for asg2part.html

// Problem 2
function randArray() {
  //Declare and initialize array
  var prizes = ["puppy", "cookie", "trophy", "medal", "virus"];

  //Retrieve prize element where prizes will be displayed
  var object = document.getElementById("prize");

  //empty string to place the output inside
  var output = "";

  //Fill output with prizes
  for (var i=0; i < prizes.length; i++) {
    output +=prizes[i] + "<p>";
  }

  //Get a random value within the range of prizes
  var len = prizes.length;
  var win = Math.floor (Math.random() * len);

  //Display prizes and result
  console.log("List of prizes that you might win from:<p> " + output + "<p style='color:green'> Congratulations! You won " + prizes[win] + "!");
  object.innerHTML = "List of prizes that you might win from:<p> " + output + "<p style='color:green'> Congratulations! You won a " + prizes[win] + "!";
}


// Problem 3 - Text swap
function swapT() {
  //Retrieve paragraph elements
  var p1 = document.getElementById("1");
  var p2 = document.getElementById("2");

  //Swtich textContent of paragraphs
  var temp = p1.textContent;
  p1.textContent = p2.textContent;
  p2.textContent = temp;
}

//Problem 4 - Image Swap
function swapI() {
  //Retrieve image elements
  var img1 = document.getElementById("img1");
  var img2 = document.getElementById("img2");

  //Swtich src of images
  var temp = img1.src;
  img1.src = img2.src;
  img2.src = temp;
}

// Problem 5
function newdoc() {
  //Text Content
  var imageTitle = "Battle Scars";
  var text = "These claw marks are from a Brazilian Jiu Jitsu training session. They were inflicted upon me because one of my oponents forgot to cut his nails before practice. The damage, while minimal, was thought to be caused by reasons besides BJJ, which became awkward when I later saw my parents.";

  // Image properties
  var height = document.getElementById('image').height;
  var width = document.getElementById('image').width;

  //Date properties
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var mydate= new Date();

  var day = week[mydate.getDay()];
  var month = mydate.getMonth();
  var year = mydate.getFullYear();

  //Display date
  var date = " The current date in GMAT format is : " + mydate;
  var dateSimple = "The date is also written as " + (month+1) + "/" + mydate.getDate() + "/" + year + ", which happens to fall on a " + day + ".";

// TODO: link JS to CSS file

  //Open a new document with relevant information
  document.open();
  document.title = "More Info on Pic";
  document.write("<html><head><title> output </title> <link rel='stylesheet' href='styles/newDoc.css' type='text/css'></head><body >");
  document.write("<h1>" + imageTitle + "</h1>");
  document.write("<p>" + text + "</p>");
  document.write("<img src='images/scar.jpg' width='500' height='500'>");
  document.write("<p>Image Height = " + height + "</p>");
  document.write("<p>Image Width = " + width + "</p>");
  document.write("<p>" + date + "</p>");
  document.write("<p>" + dateSimple + "</p>");
}

// Problem 6 - Simple Converter Application
function convert() {
  //Variable for tuition
  var tuition = 23085;
  //Get value from form and compute debt
  var semester = document.getElementById('semester').value;
  var debt = tuition*semester;

  //Display value within textarea
  document.getElementById('semester').value = debt;
  document.getElementById('semester').style.color = "red";
}
