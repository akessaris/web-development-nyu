//JS file for asg5.html

//Make sure document has been loaded
$("document").ready(function() {

//Part 1 - Change text elements
  $('#change').click(function() {
    $("#special").css('color','green'); //change #special to green
    $(".highlight").css('backgroundColor','red'); //change backgroundColor of .highlight to yellow

    // select all p and loop through each p
    $("p").each(function(){
     $(this).css('color','red');
     $(this).css('backgroundColor','green');
     $(this).css('border','5px solid black');

      // extract text from each li
      alert($(this).text());
    });
  });

//Part 2 - Change image element
  //Hide the image
  $('#hide').click(function() {
      $("#profile").hide();
  });

  //Show the image
  $('#show').click(function() {
    $("#profile").show();
  });

  //Fadeout the image
  $('#fade').click(function() {
    $("#profile").fadeOut(1000);
  });

//Part 3 - Animation
  $('#animate').click(function() {
    var object = $("#animation");

    object.animate({"left":"300px", opacity: '0.3', height: '+=100px', width: '+=200px'});
  });

// Part 4 - User/Pass
  //If username or password changes...
  $("#user, #pass").change(function() {
    var u = $("#user");
    var p = $("#pass");

    //If a user entered a value, display the value in <div id=demo>
    if ((u.val()!=null && u.val()!="") || (p.val()!=null && p.val()!="")) {
      $("#demo").html("Username = " + u.val() + " " + "<br>Password = " + p.val());
    }
    //Focus and alert user if one or both fields are empty
    if (u.val() == null || u.val() == "") {
      u.focus();
      u.css('backgroundColor','yellow');
      alert("Input a value for " + u.attr("name"));
    }
    if (p.val() == null || p.val() == "") {
      p.focus();
      p.css('backgroundColor','yellow');
      alert("Input a value for " + p.attr("name"));
    }
  });
});
