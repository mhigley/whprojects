document.getElementById('btn2').style.color = "red";
document.getElementById('btn2').style.fontSize = "32px";

/*
    Add a JS folder and script.js to your portfolio project
    Link to the script.js at the bottom of the page before </body>
    In the html, add a button to your index page
    Write a new function in the script.js
    On button click, change page background color and text color
*/






// console.log("Here is my first console message");
// console.info("This is info");
// console.warn("Danger Will Robinson!");
// console.error("Uh Uh uh. You didn't say the magic word");

// Browser Alert Box
// alert('Here is my popup.');

// Browser Confirm Box
// var userResult = confirm("Did you remember to lock your car?");
// console.log(userResult);

// Browser Prompt Box
// var userName = prompt("What is your name?");
// console.log(userName);


/*
Variables
    Must start with a lowercase!
    Must start with a letter.
    Can contain uderscore.
    May use camelCasing.
*/
var username;
var room1;
var user_name;
var userName;
var theUsersFirstNameOnly;


// Math
var age = 27;
var decade = 10;
var double = 2; // * (asterisk)
var divide = 4; // / (forward slash)
// divide result by 4
var newAge = ( (age + decade) * double ) / divide;
// PEMDAS matters!
console.log(newAge);
// var stringAge = "27";

// Concatination
// var firstName = prompt("What is your first name?");
// var lastName = prompt("What is your last name?");
// alert(firstName + " " + lastName);

/* String Interpolation
    `${ variable }`
*/
// alert(`${firstName} ${lastName}`);

//  Prompt user for:
//  the make of vehicle
//  the year
//  the color
//  alert the result

// 3 new variables
// formatting: color, year make.

function getUserVehicle(){
    var make = prompt("Make of vehicle.");
    var year = prompt("Year of vehicle.");
    var color = prompt("Color of vehicle.");

    var result = color + ", " + year + " " + make + ".";
    alert(result);
}


function primaryUser(){
    var first = prompt("What is your first name?");
    var last = prompt("What is your last name?");
    var place = prompt("Where were you born?");

    document.getElementById('primaryUser').innerHTML = first + " " + last + ", born in " + place;
}




