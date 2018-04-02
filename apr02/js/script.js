// var p1 = document.getElementById('p1');
// console.log(p1);

// var p1q = document.querySelector('#p2');
// console.log(p1q);

// var pClass = document.querySelector('.p');
// console.log(pClass);

// var pLast = document.querySelector('p:last-of-type');
// console.log(pLast);
// pLast.style.fontSize = '28px';

// var pClasses = document.querySelectorAll('.p');
// console.log(pClasses);
// pClasses[2].style.fontSize = '8px';
// pClasses[1].style.color = 'red';
// pClasses[3].style.fontWeight = 'boldest';

// var pByClassname = document.getElementsByClassName('p');
// console.log(pByClassname);
// pByClassname[0].style.fontSize = '32px';

// var pByTagname = document.getElementsByTagName('p');
// console.log(pByTagname);
// pByTagname[9].style.color = 'yellow';
// console.log(pByTagname.length);


// FOR Loop
//  |--------------------| ARGUMENTS
//  |--------| New Variable
//             |-----| Number of loops
//                     |-| Incrementor
/*
for(var i = 0; i < 10; i++){
    pByTagname[i].style.color = 'red';
    console.log(i);
}
*/

// Create a new variable of your name
// Using the length of your name
// console each index to the browser
// var myName = "Matt";
// console.log(myName.length);
// for(var i = 0; i < myName.length; i++){
//     console.log(i);
//     console.log(myName[i]);
// }

// Create a function that prompts the user for their name
// Create a separate function that loops through each letter logging in to the browser

/*
function func1(){

    func2(passUsersName){}
}
function func2(getUsersName){

    console.log(getUsersName);
}
*/

/*
function getUsername(){
    var username = prompt("your name");
    console.log(username + ' from inside the function');

    printUsername(username);
}
getUsername();

function printUsername(x) {
    for(var i = 0; i < x.length; i++){
        console.log(x[i]);
    }
}
*/

// Get users two numbers
// function getUserNums(){
//     var num1 = prompt('Please enter a number');
//     var num2 = prompt('Please enter another number');
//     addUserNums(num1, num2);
// }


// // alert added numbers
// function addUserNums(x, y){
//     console.log(arguments);
//     alert( parseInt(x) + parseInt(y) );
// }

// getUserNums();

// write a function that asks the user for three colors
// write another function that loops through "arguments" array
// apply each color to corresponding paragraph

/*

['p', 'p', 'p']
['red', 'green', 'blue']

p1.color = red
p2.color = green
p3.color = blue

*/

var paragraphs = document.querySelectorAll('p');

function getUserColors(){
    var userColors = prompt('pick some colors (comma separated)').split(',');
    
    var userTrimmedColors = [];
    for(var i = 0; i < userColors.length; i++){
        userTrimmedColors.push(userColors[i].trim());
    }
    assignUserColors(userTrimmedColors);
}

function assignUserColors(x){
    for(var i = 0; i < x.length; i++){
        paragraphs[i].style.color = x[i];
    }
}

getUserColors();