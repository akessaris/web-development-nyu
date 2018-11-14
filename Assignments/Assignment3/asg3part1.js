// Main Javascript file for calendar.html

// Part I: Prize Application using Multidimensional Array
function randarray() {
  //Variable for to display txt
  var txt = "";

// List of prizes and price
  var prizes = [
    ["Cookie", 5],
    ["Cake", 20],
    ["Tofu", 0],
    ["Lollipop", 1],
    ["Cheescake", 10],
  ];

  //Add prizes to output txt
  txt+="List of prizes: <p>";
  var swap = 0; //allows to swap between outputting prize or price

  //List prizes and prices
  for(var i = 0; i < prizes.length; i++) {
      var prize = prizes[i];
      txt+="<p>"
      for(var j = 0; j < prize.length; j++) {
          if (swap==0) {
            txt += "Prize: " + prize[j] + " | ";
          }
          else if (swap==1) {
            txt += "Price: $" + prize[j];
          }
          swap = (swap==0) ? 1 : 0;
      }
  }
  //Get a random value within the range of prizes
  var len = prizes.length;
  var win = Math.floor (Math.random() * len);

  //Display prizes and result
  console.log("Congratulations! You won a " + prizes[win][0] + ", a $" + prizes[win][1] + " value!");
  txt+= "<p>Congratulations! You won a " + prizes[win][0] + ", a $" + prizes[win][1] + " value!";

  document.getElementById('prize').innerHTML = txt;
}

// Part II: Birthday Application
function birthday() {
  //Output Text
  var txt = "";

  //Get the name and birthdays of both people
  var name1 = document.getElementById('name1').value;
  var bday1 = new Date (document.getElementById('birthday1').value);

  var name2 = document.getElementById('name2').value;
  var bday2 = new Date(document.getElementById('birthday2').value);

  //Create date objects for both people
  var day1 = bday1.getUTCDate();
  var month1 = bday1.getMonth();
  var year1 = bday1.getFullYear();
  var date1 = (month1+1) + "/" + day1 + "/" + year1;

  var day2 = bday2.getUTCDate();
  var month2 = bday2.getMonth();
  var year2 = bday2.getFullYear();
  var date2 = (month2 + 1) + "/" + day2 + "/" + year2;

  //Ouput when each person was born
  txt = name1 + " was born on " + date1 + "<p>" + name2 + " was born on " + date2 + "<p>";

  //Compare birthdays
  var compare = "";

  if (bday1<bday2) {
    txt+= name1 + " is older than " + name2 + "!";
  }
  else if (bday1>bday2) {
    txt+= name1 + " is younger than " + name2 + "!";
  }
  else if (bday1.getTime()==bday2.getTime()){
    txt += name1 + " and " + name2 + " are the same age!";
  }
  //Display output in #output
  document.getElementById('output').innerHTML = txt;
}

// Part 3 - Calendar Holiday Application
/*
NYU Holidays:

Mon, Sept. 4, 2017 Labor Day

Mon, Oct. 9, 2017 Fall Recess

Wed, Nov. 22, 2017 – Sun, Nov. 26, 2017 Student Thanksgiving Recess

Sat, Dec. 23, 2017 – Mon, Jan. 1, 2018 Winter Recess for University Offices

Mon, Jan. 15, 2018 Martin Luther King, Jr. Birthday

Mon, Feb. 19, 2018 Presidents' Day

Mon, March 12, 2018 – Sun, March 18, 2018 Spring Recess

Mon, May 28, 2018 Memorial Day

Wed, July 4, 2018 Independence Day

Sat, July 28, 2018 Legislative Dayr

Also accounts for summer and winter break
*/

function holiday() {
  //Text to be displayed later in #display
  var txt ="";
  var image = document.getElementById('image'); //get image object to assign source later

  //Array of months
  var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  //Obtain date from input field in form
  var dvalue = document.forms[1].elements[0].value;
  console.log(dvalue);

  //Create date object based on input
  var date = new Date(dvalue);

  var day = date.getUTCDate();
  var month = date.getMonth() + 1;
  var year = date.getFullYear();

  var date_string = month + "/" + day + "/" + year;

  //Set the range of dates that is accepted
  var min_date = new Date();
  var max_date = new Date();
  min_date.setFullYear(2017, 8, 1);
  max_date.setFullYear(2018, 7, 31);

  //Make sure date falls within the range of dates
  var valid = 1;
  if (min_date > date || max_date < date) {
    txt += (months[month-1]) + " " + day + ", " + year + " is not a valid day for this Calendar Holiday application.";
    valid = 0;
    image.src = "images/x.jpg"; //Image Credit: http://images.mentalfloss.com/sites/default/files/letterx.jpg?resize=1100x740
  }

  //Create an array with all the holidays
  var holidays= [
     ["Labor Day", "images/labor-day.jpg", "9/4/2017"],
     ["Fall Recess", "images/Fall_image.jpg","10/9/2017"], //Imaged Credit: PCA Falcons - https://www.theodysseyonline.com/11-reasons-fall
     ["Thanksgiving", "images/thanksgiving.jpg","11/22/2017","11/23/2017","11/24/2017","11/25/2017","11/26/2017"],
     ["Winter Recess","images/winter.jpg","12/23/2017","12/24/2017","12/25/2017","12/26/2017","12/27/2017","12/28/2017","12/29/2017", "12/30/2017","12/31/2017","1/1/2018","1/2/2018","1/3/2018","1/4/2018","1/5/2018","1/6/2018","1/7/2018","1/8/2018","1/9/2018","1/10/2018","1/11/2018","1/12/2018","1/13/2018","1/14/2018","1/16/2018","1/17/2018","1/18/2018","1/19/2018","1/20/2018","1/21/2018"],
     ["Martin Luther King, Jr. Birthday","images/mlk.jpg", "1/15/2018"], //Image Credit: https://www.biography.com/people/martin-luther-king-jr-9365086
     ["Presidents' Day","images/presidents_day.jpg", "2/19/2018"], //Image Credit: http://www.pgacalendar.com/wp-content/uploads/2017/01/happy_presidents_day_8953692815.jpg
     ["Spring Recess","images/spring.jpg","3/12/2018","3/13/2018","3/14/2018","3/15/2018","3/16/2018","3/17/2018", "3/18/2018"],
     ["Summer Recess", "images/summer.jpg","5/15/2018", "5/16/2018","5/17/2018","5/18/2018","5/19/2018","5/20/2018","5/21/2018","5/22/2018","5/23/2018","5/24/2018","5/25/2018","5/26/2018","5/27/2018","5/29/2018","5/30/2018","5/31/2018","6/1/2018","6/2/2018","6/3/2018","6/4/2018","6/5/2018","6/6/2018","6/7/2018","6/8/2018","6/9/2018","6/10/2018","6/11/2018","6/12/2018","6/13/2018","6/14/2018","6/15/2018","6/16/2018","6/17/2018","6/18/2018","6/19/2018","6/20/2018","6/21/2018","6/22/2018","6/23/2018","6/24/2018","6/25/2018","6/26/2018","6/27/2018","6/28/2018","6/29/2018","6/30/2018","7/1/2018","7/2/2018","7/3/2018","7/5/2018","7/6/2018","7/7/2018","7/8/2018","7/9/2018","7/10/2018","7/11/2018","7/12/2018","7/13/2018","7/14/2018","7/15/2018","7/16/2018","7/17/2018","7/18/2018","7/19/2018","7/20/2018","7/21/2018","7/22/2018","7/23/2018","7/24/2018","7/25/2018","7/26/2018","7/27/2018","7/29/2018","7/30/2018","7/31/2018","8/1/2018","8/2/2018","8/3/2018","8/4/2018","8/5/2018","8/6/2018","8/7/2018","8/8/2018","8/9/2018","8/10/2018","8/11/2018","8/12/2018","8/13/2018","8/14/2018","8/15/2018","8/16/2018","8/17/2018","8/18/2018","8/19/2018","8/20/2018","8/21/2018","8/22/2018","8/23/2018","8/24/2018","8/25/2018","8/26/2018","8/27/2018","8/28/2018","8/29/2018","8/30/2018","8/31/2018"],
     ["Memorial Day", "images/memorial-day.jpg","5/28/2018"], //Image Credit: http://www.history.com/topics/holidays/memorial-day-history
     ["Independence Day", "images/independence-day.jpg","7/4/2018"], //Image Credit: https://www.techavy.com/wp-content/uploads/2017/06/americas-celebration-4th-of-july-flag.jpg
     ["Legislative Day", "images/Legislative_Day.jpg","7/28/2018"] //Image Credit: http://mapt.org/?tribe_events=legislative-day
   ];

  //Check if the date is a holiday
  var boolean_holiday = 0;

  for (var i = 0; i < holidays.length; i++) {
    var holiday = holidays[i];
    for (var j = 1; j < holiday.length; j++) {
      if (date_string===(holiday[j])) {
        txt+= months[month-1] + " " + day + " is " + holidays[i][0] + ". " +  "This is a holiday at NYU.";
        boolean_holiday = 1;
        image.src = holidays[i][1];
      }
    }
  }
  console.log(holiday);
  console.log(valid);

  //If the date isn't a holiday, output a message.
  if (boolean_holiday == 0 && valid==1){
    txt+= months[month-1] + " " + day + " is not a holiday at NYU."
    image.src = "images/stress.jpg"; //Image Credit: https://c758759.ssl.cf2.rackcdn.com/large/80393.jpg
  }
  //Ouput everything in #display
  document.getElementById('display').innerHTML = txt;
}
