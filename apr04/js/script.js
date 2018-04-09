// 1. Write a function prompting the user for their full name.

// 2. Split the result into a new array.

// 3. Pass that array into another function

// 4. InnerHTML the first item and last item to the page. Consider how to use the .length to get the last item.

/*
function getUserName(){
    var username = prompt('what is your full name?').split(" ");
    outputUsername(username);
}

function outputUsername(nameArray){
    // document.getElementById('firstname').innerHTML = nameArray[0];
    // document.getElementById('lastname').innerHTML = nameArray[nameArray.length - 1];

    //  OR ||
    for(var i = 0; i < nameArray.length; i++){
        if( i == 0 || i == nameArray.length - 1 ){
            document.getElementById('firstname').innerHTML += nameArray[i] + " ";
        }
    }
}

getUserName();
*/

/**
 * ARRAYS
 */

 /*
var stuff = ["jeep", "subaru", "honda"];
console.log(stuff[1]); // get the second element
console.log(stuff.length); // how many elements

// PUSH METHOD
stuff.push("bmw"); // add to array
console.log(stuff);

// POP METHOD
stuff.pop();
console.log(stuff);

var removedCar = stuff.pop();
console.log(stuff);
console.log(removedCar);

// UNSHIFT METHOD
stuff.unshift("chevy", "chrysler");
console.log(stuff);

// SHIFT METHOD
stuff.shift();
console.log(stuff);

// SPLICE METHOD
stuff.splice(1, 1, "red", "green");
console.log(stuff);

stuff.splice(1, 1, "grape", "kiwi", "apple", "carrot");
console.log(stuff);

stuff.splice(2, 1);
console.log(stuff);

// SLICE METHOD (NON-DESTRUCTIVE)
stuff.slice(4);
var removed = stuff.slice(2, 6);
console.log(stuff);
console.log(removed);
*/

/*

    1. Create an array of 5 movies
    2. At the beginning of the array, add "Die Hard"
    3. Remove the 3rd and 4th movies, and in their place, put "Godfather I", "Godfather II", "Godfather III"
    4. Add "Guardians of the Galaxy" to the end
    5. Duplicate INDEX 1 - 3 into a new array.
    6. Remove the first movie from original array
    7. Console the second to last movie

    bonus - 8. Delete everything and add Jurassic Park

*/
// var test = [1, 2, 3, 4, 5];
// for(var i = test.length; i >= 0; i--){
//     if(!test.length == 0){
//         test.pop();
//     }else{
//         test.push('jurassic park');
//     }
// }
// console.log(test);


/**
 * IF / ELSE IF / ELSE
 */

// function getUserAge(){
//     var userage = parseInt(prompt('how old are you?'));
//     // AND &&
//     // OR ||
//     if(userage < 21){
//         console.log('not old enough');
//     }else if(userage == 21){
//         console.log('good to go');
//     }else{
//         console.log('plenty old');
//     }
// }
// getUserAge();

/**
 * TERNARY OPERATOR
 */
// function getAge(){
//     var age = parseInt(prompt('whats my age again?'));
//     (age >= "21") ? console.log('true') : console.log('false');
// }
// getAge();



// write a function and propt the user telling the user a "story" asking for 1 of 3 choices
// each choice continues to their own function
// wash rinse repeat thrice more

// SIMPLE VERSION:
// alerts, prompts, confirms
// if / else if / else

// COMPLEX VERSION:
// loops
// arrays

