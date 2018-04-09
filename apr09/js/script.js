/*
function welcomeMsg(str){
    // console.log(str);
    return "Welcome " + str;
}

// consoleInfo('Matt');
console.log( welcomeMsg('Matt') );

function calcNums(x, y){
    // console.log(x + y);
    return x + y;
}

console.log( calcNums(3, 2) );

var h3 = document.querySelector('h3');
var user = document.querySelector('#user');
var html = document.querySelector('#html');

function concatStrings(str1, str2){
    return str1 + " " + str2;
}

function getFirstname(){
    return prompt('What is your first name?');
}

function getLastname(){
    return prompt('What is your last name?');
}

user.textContent = concatStrings( getFirstname(), getLastname() );
// html.innerHTML = concatStrings( getFirstname(), getLastname() );

// function welcomeUser(){
//     h3.innerHTML = concatStrings( getFirstname(), getLastname() );
// }

// welcomeUser();
*/


var spans = document.querySelectorAll('span');
var occupations = ['janitor', 'teacher', 'developer', 'plumber', 'cashier', 'bus driver'];
var plurals = ['fish', 'monkeys', 'shoes', 'cactii'];
var adjectives = ['hefty', 'withered', 'slender', 'enraged', 'thirsty', 'exhausted'];
var numbers = [3, 13, 7, 11, 99];

for(var i = 0; i < spans.length; i++){
    // SWITCH STATEMENT
    var s = spans[i];
    switch(s.className){
        case 'occupation':
            setText(s, occupations);
            break;
        case 'plural':
            setText(s, plurals);
            break;
        case 'adjective':
            setText(s, adjectives);
            break; 
        case 'number':
            setText(s, numbers);
            break;
        default:

    }
}

function getRandNum(num){
    return Math.floor(Math.random() * num);
}

function setText(currSpan, testArray){
    currSpan.textContent = testArray[getRandNum(testArray.length)];
}
