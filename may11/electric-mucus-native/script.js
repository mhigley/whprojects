let input = document.querySelector('input'),
    submit = document.querySelector('button');

submit.disabled = true;

input.addEventListener('keyup', () => {
    let userInput = this.value.toLowerCase();
    if(userInput === 'electric mucus'){
        submit.style.backgroundColor = 'hsl(139.4, 34.4%, 62.9%)';
        submit.disabled = false;
    }else{
        submit.style.backgroundColor = this.value;
        submit.disabled = true;
    }
});

submit.addEventListener('click', () => {
    this.disabled = true;
    input.disabled = true;
    alert("yay. you won.");
});


/*
window.addEventListener('keyup', function(evt){
    if(evt.keyCode == 38){
        console.log('up');
    }else if(evt.keyCode == 40){
        console.log('down');
    }else if(evt.keyCode == 37){
        console.log('left');
    }else if(evt.keyCode == 39){
        console.log('right');
    }
});
*/