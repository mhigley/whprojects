// var matt = new Person('matt', 'higley', 'brown');

var theDate = new Date();
console.log(theDate);
console.log(theDate.getDate());
console.log(theDate.getDay());
console.log(theDate.getFullYear());
console.log(theDate.getMonth());

console.log( theDate.toLocaleString('en-us', {month: 'long'}) );

var myBday = new Date(2000, 9, 02);

var dateStr = `
    Today's date is the ${theDate.getDate()}th of ${theDate.toLocaleString('en-us', {month: 'long'})} ${theDate.getFullYear()}
`;


// Do This ->  MM/DD/YY

var bDayStr = `
${myBday.toLocaleString('en-us', {month: '2-digit'})}/${myBday.toLocaleString('en-us', {day: '2-digit'})}/${myBday.toLocaleString('en-us', {year: '2-digit'})}
`;







// HH:MM:SS

var stopBtn = document.querySelector('button');
stopBtn.addEventListener('click', function(){
    clearInterval(myTimer);
    clearTimeout(myDelay);
});

// setInterval Function
var myTimer = setInterval(updateTimer, 100);

function updateTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}

// setTimeout Function
var myDelay = setTimeout(hiliteBg, 5000);
function hiliteBg(){
    document.body.classList.add('hilite');
}

function runTimer(){
    var theTime = new Date();
    var timeStr = `
    ${theTime.toLocaleString('en-us', {hour: 'numeric', hour12: false, minute: '2-digit', second: '2-digit'})}
    `;
    document.querySelector('h3').textContent = timeStr;
}

