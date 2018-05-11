const value = 5;

document.querySelector('#test').innerHTML = 'She\'s a brick... house: ' + value;
const warn = document.querySelector('#warning');

function checkNum(num, comp){
  if(num < comp){
    warn.innerHTML = 'Danger... that number is TOO low!';
  }
}

checkNum(value, 10);

const colors = ['red', 'orange', 'yellow', 'green'];
const kulerz = document.querySelector('#colors');

// colors.forEach(function(kuler, idx){
//   if(idx < colors.length - 1){
//     kulerz.innerHTML += kuler + ', ';
//   }else{
//     kulerz.innerHTML += kuler;
//   }
// });


colors.forEach( () => {
  if(idx < colors.length - 1){
    kulerz.innerHTML += kuler + ', ';
  }else{
    kulerz.innerHTML += kuler;
  }
} );

