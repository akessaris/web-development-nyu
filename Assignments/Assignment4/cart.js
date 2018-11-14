//JS file for product.html

//Calculate subtotal and grand total
function total() {
  //Get price values
  var price1 = parseInt(document.getElementById("price1").value);
  var price2 = parseInt(document.getElementById("price2").value);
  console.log("Prize1 = " + price1);
  console.log("Prize2 = " + price2);

  //Get quantity values
  var quantity1 = parseInt(document.getElementById("quantity1").value);
  var quantity2 = parseInt(document.getElementById("quantity2").value);
  console.log("Quantity1 = " + quantity1);
  console.log("Quantity2 = " + quantity2);

  //Shipping cost
  var shipping = shippingCost();

  console.log("Shipping = " + shipping);
  console.log("Shipping = " + shippingCost());

  //Calculate subtotals
  document.getElementById("subtotal1").value = price1 * quantity1;
  document.getElementById("subtotal2").value = price2 * quantity2;

  //Calculate grand total
  document.getElementById("grand-total").value =  (parseInt(document.getElementById("subtotal1").value) + parseInt(document.getElementById("subtotal2").value)) + parseInt(shipping);
}

//Includes shipping fee if delivery is selected
function shippingCost() {
  if (document.getElementById("delivery").checked) {
    return 5;
  }
  return 0;
}

// Swap Credit Card Image when selector is changed
function swap() {
  var image = document.getElementById("cc-image");
  var cc = document.getElementById("mySelect").selectedIndex;
  console.log(cc);

  switch ((cc)) {
    case 0:
      image.src = "images/amexcardcode.gif";
      break;
    case 1:
    case 2:
      image.src = "images/security_code_.gif";
      break;
  }
}

//Validate the form
function receipt() {
  var text = "<h2>Thank you for helping Fund My Extravagancies! Here is your print-friendly receipt.</h2>"
  var valid = true; //used to validate whether to go to receipt page

  //Access form elements
  var name = document.getElementById("full-name");
  var phone = document.getElementById("phone");
  var email = document.getElementById("email");
  var at=document.getElementById("email").value.indexOf("@");
  var dot=document.getElementById("email").value.indexOf(".");
  var address = document.getElementById("address");
  var zip = document.getElementById("zip");


  var ccNum = document.getElementById("cc-num");
  var ccDate;
  ccDate = document.getElementById("exp-date");
  var ccFullDate = new Date(ccDate);
  var ccCode = document.getElementById("cc-code");


//Validate personal info
  //Validate name
  if (name.value == "" || name.value == null) {
    console.log("Working");
    alert ("You must enter your name.");
    name.focus();
    name.select();
    name.style.backgroundColor="#F00";
    valid = false;
  }

  //Validate phone number
  if (phone.value == "" || phone.value == null || isNaN(phone.value)) {
    alert ("You must enter a valid phone number.");
    phone.focus();
    phone.select();
    phone.style.backgroundColor="#F00";
    valid = false;
  }

  //Validate email
  if ((at==-1) || (dot == -1)) {
     alert("You must enter a valid email!");
     email.focus();
     email.select();
     email.style.backgroundColor="#F00";
     valid = false;
   }

   //Validate address
  if (address.value == "" || address.value == null) {
    alert ("You must enter your address.");
    address.focus();
    address.select();
    address.style.backgroundColor="#F00";
    valid = false;
  }

   //Validate zip code
  if (zip.value == "" || isNaN(zip.value) || zip.value == null || parseInt(zip.value)>99999 || parseInt(zip.value)<0 ) {
    alert ("You must enter a valid zip code.");
    zip.focus();
    zip.select();
    zip.style.backgroundColor="#F00";
    valid = false;
  }

 //Validate credit card info
   //Validate cc number
  if (ccNum.value == "" || isNaN(ccNum.value) || ccNum.value == null) {
    alert ("You must enter a valid credit card number.");
    ccNum.focus();
    ccNum.select();
    ccNum.style.backgroundColor="#F00";
    valid = false;
  }

   //Validate cc date
  if (ccDate.value == "" || ccDate.value == null || !isNaN(ccFullDate.valueOf())) {
    alert ("You must enter a valid expiration date.");
    ccDate.focus();
    ccDate.select();
    ccDate.style.backgroundColor="#F00";
    valid = false;
  }

   //Validate cc code
  if (ccCode.value == "" || isNaN(ccCode.value) || ccCode.value == null) {
    alert ("You must enter a valid credit card code.");
    ccCode.focus();
    ccCode.select();
    ccCode.style.backgroundColor="#F00";
    valid = false;
  }

  //If all inputs are valid, proceed to receipt page
    if (valid) {
      //Access form
      var x = document.forms[0];
      var txt = "<h2>Thanks for help Fund My Extravagancies!</h2>";
      var i;

      //Retrieve values from Personal/Payment Information
      var name = document.getElementById("full-name").value;

      //Retrieve orders/subtotals/totals
      var top = document.getElementById("quantity1").value;
      var low = document.getElementById("quantity2").value;

      console.log(x.elements.length);

      //Dispaly purchases and date of purchase
      txt+= name + " purchased the following items on " + (new Date()) + ":";

      //Display how many of each package they bought (include quantities and subtotals)
      if (top > 0) {
        txt+="<p>" + top + " of the Top Tier Package(s) - 'Dinner and a Show'</p>";
        txt+="<ul> <li>Price Per Package: $" + document.getElementById("price1").value + "</li></ul>";
        txt+="<ul> <li>Subtotal: $" + document.getElementById("subtotal1").value + "</li></ul>";
      }
      if (low > 0) {
        txt+="<p>" + low + " of the Low Tier Package(s) - 'With Thanks'</p>";
        txt+="<ul> <li>Price Per Package: $" + document.getElementById("price2").value + "</li></ul>";
        txt+="<ul> <li>Subtotal: $" + document.getElementById("subtotal2").value + "</li></ul>";
      }

      //Display the delivery method
      txt+="<p>Delivery Method: ";
      if (document.getElementById("delivery").checked) {
        txt+= "Delivery (+$5.00)</p>";
      }
      if (document.getElementById("call").checked){
        txt+= "Will-Call</p>";
      }

      //Display the grand total
      txt+="<p>Grand Total: $" + document.getElementById("grand-total").value + "</p>";

      console.log(x.elements[20]);
      //12 = fullname
      //16 = state
      //19 = number

      //Display payment Method
      txt+="<h3>Payment Method</h3>";

      for (i=12; i < (x.elements.length - 3); i++) {
        //Only display last 4 digits of credit card number
        if (i == 19) {
          var num = document.getElementById("cc-num").value.toString();
          var display_cc;

          if (num.length > 4) {
            var new_num = num.slice(num.length-4, num.length);
            display_cc = "XXXX - XXXX - " + new_num;
          }
          else {
            display_cc = num;
          }
          txt+= x.elements[i].name + ": " + display_cc + "<br>";
        }
        else if (i ==20) {
          var date = new Date(document.getElementById("exp-date"));
          txt+= x.elements[i].name + ": " + date + "<br>";

        }
        else {
        //Display the other elements normally
          txt+= x.elements[i].name + ": " + x.elements[i].value + "<br>";
        }
      }
      // //Open a new document and write text content
      document.open();
      document.write(txt);
    }

  }
