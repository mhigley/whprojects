// function getName(){
//     var myName = prompt('whats your name?');
//     printName();
// }

// function printName(){
//     console.log(myName);
// }

// getName();

var promptBox = `
<form>
    <h3>Choose your colors</h3>
    <label><input type="checkbox"><span>red</span></label>
    <label><input type="checkbox"><span>green</span></label>
    <label><input type="checkbox"><span>blue</span></label>
    <input type="submit" value="set colors">
</form>
`;
var colorizeBtn = document.querySelector('button');
colorizeBtn.addEventListener('click', promptUser);

var overlay = document.querySelector('.overlay');

function promptUser(){
    overlay.classList.add('active');
    overlay.innerHTML = promptBox;

    getUserColors();
}
function getUserColors(){
    var overlayBtn = document.querySelector('.overlay input[type="submit"]');
    overlayBtn.addEventListener('click', function(e){
        e.preventDefault();
        var userColors = document.querySelector('form').elements;
        console.log(
            // (userColors(checked)) ? console.log('test') : false;
        );
    });
    
    console.log(overlayBtn);
}


var paragraphs = document.querySelectorAll('p');

function getColors(){
    var colors = prompt('Please pick some colors. (Comma separated)').split(',');
    var trimmedColors = [];
    for(var i = 0; i < colors.length; i++){
        trimmedColors.push(colors[i].trim());
    }
    colorParagraphs(trimmedColors);
}

function colorParagraphs(x){
    console.log(x);
    for(var i = 0; i < x.length; i++){
        paragraphs[i].style.color = x[i];
        // paragraphs[i].style.fontSize = (16 * (i + 1)) + 'px';
    }
}

// getColors();
