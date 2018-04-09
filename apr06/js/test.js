// document.body.style.backgroundColor = 'red';
/*
var rand;

function getRandColor(){
    rand = Math.random();
    rand = Math.floor( rand * 361 );
    setBackgroundColor();
}
getRandColor();

function setBackgroundColor(){
    document.body.style.backgroundColor = `hsl(${rand}, 50%, 50%)`;
}

window.addEventListener('mousemove', function(e){
    var width = Math.round(e.clientX / window.innerWidth * 100);
    var height = Math.round(e.clientY / window.innerHeight * 100);
    document.body.style.backgroundColor = `hsl(${rand}, ${width}%, ${height}%)`;
});
*/

var imgNum = 1;

var div = document.querySelector('div'),
    btn = document.querySelector('button');

btn.addEventListener('click', function(){
    imgNum = 'img' + (imgNum + 1);
    // console.log(img);
    
    div.innerHTML += imgNum; 
});

var img1 = `<img href="http://unsplash.it/500/500">`,
    img2 = `<img href="http://unsplash.it/500/500">`,
    img3 = `<img href="http://unsplash.it/500/500">`;


