// JS file for website.html
$(document).ready(function() {
  $('header').hide().delay(300).fadeIn(800);
  $('nav').hide().delay(300).fadeIn(800);

// Links
  $(".nav").eq(0).click(function() {
    $("section").empty();
    var $im = "<img src=images/smores-pie.jpg width='500' height='500' alt='Smores Pie' border='2'> <p>Smores Pie<br>Ingredients<ul><li>Marshmallows</li> <li>Chocolate</li> <li>Graham Crackers</li></ul>";
    $("section").html($im);
  });

  $(".nav").eq(1).click(function() {
    $("section").empty();
    var $video = '<iframe width="750" height="500" src="https://youtube.com/embed/noVEvsozyug"  frameborder="2" borderColor="black" allowfullscreen></iframe>';
    $("section").html($video);
  });

  $(".nav").eq(2).click(function() {
    $("section").empty();
    var text = "<p>You provide the ingredients and venue...and I provide the amateur culinary ability. It doesn't have to be too extravagant, I can just use whatever's in your kitchen.";
    $("section").html(text);
  });
});
