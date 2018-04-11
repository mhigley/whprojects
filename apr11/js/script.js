

// this - context based. Look to the left of the dot.

var btns = document.querySelectorAll('button');

for(var i = 0; i < btns.length; i++){
    btns[i].addEventListener('click', function(evt){
        // console.log(evt.target);
        // console.log(this);
    });
}

window.addEventListener('click', function(evt){
    // console.log(evt.target.nodeName);
    if(evt.target.nodeName == 'BUTTON'){
        // console.log(evt.target);
        // console.log(this);
    }
});


var cars = ['jeep', 'honda', 'jeep', 'subaru'];

// console.log(cars);
// console.log(types);

// objects

var car = {
    type: 'jeep',
    model: 'wrangler',
    color: 'black',
    offroad: true,
    trim: ['sunroof', 'hardtop', '4 wheel drive']
};
// console.log(car.trim);

var matt = {
    firstname: "Matt",
    lastname: 'Higley',
    age: 21,
    height: "6'4",
    hair: true,
    haircolor: 'brown',
    facialhair: true,
    facialhaircolor: 'brown',
    greeting: function(msg){
        // console.log(this.firstname);
        // console.log(msg + this.firstname);
    }
}

var types = ['string', true, 5, [1, 2, 3], matt];
// console.log(types);

// console.log(matt.haircolor);
matt.middlename = 'David';
// console.log(matt);

matt.middlename = 'Charles';
// matt.greeting("Hey there!");

matt.firstname = "Bruce";
// matt.greeting("I'm now");

// object constructor function
function Person(first, last, age, eye){
    this.firstname = first;
    this.lastname = last;
    this.age = age;
    this.eyecolor = eye;
    this.greeting = function(msg){
        // console.log(msg + this.firstname);
    };
}

var myDad = new Person('David', 'Higley', 59, 'brown');
var myMom = new Person('Kathy', 'Higley', 58, 'green');
var mySis = new Person('Erin', 'Janssens', 17, 'blue');

mySis.greeting("Hello");


/*
    username
    email
    password
*/
var form = document.querySelector('form');

var users = [];

function UserAcc(email, username, password){
    this.email = email;
    this.username = username;
    this.password = password;
}

var submitBtn = document.querySelector('input[type="submit"]');
submitBtn.addEventListener('click', function(evt){
    evt.preventDefault();
    users.push(new UserAcc(
            form.elements[0].value,
            form.elements[1].value,
            form.elements[2].value
        )
    );
    console.log(users);
});

