// /**
//  * MATH OBJECT
//  */

// // INTEGERS - WHOLE NUMBERS
// // FLOATS - DECIMALS

// var wha = .1 * .2;
// // 0.02000000000004

// // Math.round();
// var rounded = Math.round(0.00000000000001);
// // .49 && below rounds down
// // .5 && up rounds up

// // Math.ceil();
// var roundedUp = Math.ceil(0.00000000000001);

// // Math.floor();
// var roundedDown = Math.floor(0.99999999999);

// // Math.PI();
// var pi = Math.PI;

// // Math.pow();
// // console.log( Math.pow(8, 2) );

// // Math.sqrt();
// // console.log( Math.sqrt(64) );

// // Math.random();
// // console.log( Math.random() );

// // console.log('.round():'+rounded, '.ceil():'+roundedUp, '.floor():'+roundedDown, '.PI:'+pi);

// /**
//  * RANDOM NUMBER GENERATOR
//  */

//  /*
// var rand = Math.random();
// rand = Math.floor(rand * 11);
// console.log( rand );

// function pickANum(){
//     var userNum = prompt('guess a number between 0 and 10');
//     checkNum(userNum);
// }
// pickANum();

// function pickAnotherNum(){
//     var userNum = prompt('guess again');
//     checkNum(userNum);
// }

// function checkNum(num){
//     if(num < rand){
//         alert(num + ' is too low. Pick again');
//         pickAnotherNum();
//     }else if(num > rand){
//         alert(num + ' is too high. Pick again');
//         pickAnotherNum();
//     }else {
//         alert(num + ' is the right number!! You win!');
//     }
// }
// */

// var userPick = document.getElementById('userPick');
// var submitBtn = document.querySelector('#submit');
// var resetBtn = document.querySelector('#reset');
// var userPickRes = document.querySelector('h1');

// submitBtn.addEventListener('click', getUserPick);
// resetBtn.addEventListener('click', getRandNum);

// // GLOBAL VARIABLE
// var rand;
// var attempts = 3;

// function getRandNum(){
//     getRandColor();
//     attempts = 3;
//     userPickRes.innerHTML = '';
//     userPick.value = '';
//     rand = Math.random();
//     rand = Math.floor(rand * 11);
//     console.log(rand);
// }
// getRandNum();

// // CLUE: Where we can GET a value, we can also SET a value
// function getUserPick(){
//     attempts = attempts - 1;
//     var userNum = parseInt(userPick.value);
//     checkUserPick(userNum);
//     userPick.value = '';
// }
// function checkUserPick(x){
//     if(attempts > 0){
//         if(x < rand){
//             printUserRes(x + ' is too low. Pick again');
//         }else if(x > rand){
//             printUserRes(x + ' is too high. Pick again');
//         }else if(x == rand){
//             printUserRes(x + ' is the right number!! You win!');
//         } else {
//             printUserRes('Wrong answer!');
//         }
//     }else{
//         printUserRes('Game Over');
//     }
// }
// function printUserRes(userRes){
//     userPickRes.innerHTML = userRes;
// }
// // add another button that will run a function
// // to RESET the random number


// // On load, pick a new random number
// // after number has been picked
// // run a function that sets the background-color
// // TIP: hsl(x, 50%, 50%);

// // BONUS: reset the color when the user resets the game
// var randColor;

// function getRandColor(){
//     randColor = Math.random();
//     randColor = Math.floor(randColor * 360);
//     document.body.style.backgroundColor = 'hsl(' + randColor + ', 50%, 50%)';
// }
// getRandColor();

// console.log(window.innerWidth, window.innerHeight);
// window.addEventListener('mousemove', function(e){
//     var width = Math.round( (e.x / window.innerWidth) * 100);
//     var height = Math.round( (e.y / window.innerHeight) * 100);
//     // document.body.style.backgroundColor = 'hsl(' + randColor + ', ' + width + '%, ' + height +'%)';

//     document.body.style.backgroundColor = `hsl(${randColor}, ${width}%, ${height}%)`;
// });




 

