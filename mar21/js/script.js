function welcome() {
    var username = prompt("What is your name?");
    document.getElementById('welcome').innerHTML = username;
}

// welcome();

function fireworks() {
    document.getElementById('h1').style.backgroundImage = "url('/img/fireworks.gif')";
    document.getElementById('h1').style.color = "white";
    toggleColor();
}

function toggleColor() {
    // document.body.classList.add('colorize'); // ADD A CLASSNAME

    document.body.classList.toggle('colorize'); // TOGGLE A CLASSNAME
}