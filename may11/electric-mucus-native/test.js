var input = document.querySelector('input'),
    submit = document.querySelector('button');

input.addEventListener('keyup', getUserGuess);

function getUserGuess(){
    console.log(this.value);
    if(this.value == 'electric mucus'){
        submit.disabled = false;
        submit.style.backgroundColor = 'hsl(140, 34%, 63%)';
    }else{
        submit.style.backgroundColor = this.value;
    }
}
submit.disabled = true;

submit.addEventListener('click', function(evt){
    this.disabled = true;
    input.disabled = true;
    alert('Game Over.');
});