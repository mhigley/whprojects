
/*
var start = document.querySelector('button[class="start"]');
start.addEventListener('click', startGame);

var story = document.getElementById('story');
var options = document.getElementById('options');

var scene1 = {
    options: [
        {
            title: 'one',
            action: 'you open the left door',
            outcome: 'the door swings open revealing a rat',
            scene: 'scene2_1'
        },
        {
            title: 'two',
            action: 'you open the middle door',
            outcome: 'the door swings open and youre blasted with fire',
            scene: 'scene2_2'
        },
        {
            title: 'three',
            action: 'you open the right door',
            outcome: 'the door swings open and you walk into the next room',
            scene: 'scene2_3'
        }
    ],
    story: function(){
        return '<p>you enter a room and see ' + this.options.length + ' doors.</p>'
    },
    decision: function(x){
        return '<p>you walk forwards ' + x + '.</p>';
    }
};

var scene2_1 = {
    options: [
        {
            title: 'one',
            action: 'you open the left chest',
            outcome: 'lifting the lid, youre attacked by a skeleton',
            scene: 'scene3_1'
        },
        {
            title: 'two',
            action: 'you open the right chest',
            outcome: 'lifting the lid, you discover a treasure',
            scene: 'scene3_2'
        }
    ],
    story: function(){
        return '<p>you enter a room and in front of you are ' + this.options.length + ' chests.</p>'
    },
    decision: function(x){
        return '<p>you cautiously approach the boxes, and  ' + x + '.</p>';
    }
}

function startGame(){
    printBoard(scene1);
}

function nextScene(scene){
    printBoard(scene);
}

function printBoard(obj){
    options.innerHTML = '';

    story.innerHTML = obj.story();
    
    obj.options.forEach(function(btnText, index){
        options.innerHTML += '<button data-num="'+ index +'">'+ btnText.title +'</button>';
    });
 
    options.addEventListener('click', function(evt){
        options.childNodes.forEach(function(btn){
            btn.setAttribute('disabled', true);
        });

        if(evt.target.nodeName == 'BUTTON'){
            story.innerHTML = obj.decision( obj.options[ parseInt( evt.target.dataset.num ) ].outcome );
            // nextScene(obj.options[evt.target.dataset.num]);
            // console.log(evt.target.dataset.num);
            story.innerHTML += '<button onclick="+'nextScene(obj.options[evt.target.dataset.num])+'">Next</button>';
        }
    });
}

*/


/*
var req = new XMLHttpRequest();
console.log(req);
req.open('GET', 'http://localhost:3001');
console.log(req);
req.onload = function(){
    if(req.readyState == 4){
        console.log(req);
    }
}
req.send(null);

var dinos = [],
    names = ['Allosaurus', 'Ankylosaurus', 'Baryonyx', 'Brachiosaurus', 'Carnotaurus', 'Gigantosaurus', 'Megalosaurus', 'Spinosaurus', 'Stegosaurus', 'Triceratops', 'Tyrannosaurus'];
class Dino {
    constructor (name, sex, vores) {
        this.name = name;
        this.sex = sex;
        this.vores = vores;
    }
    sound() {
        console.log('roar!');
    }
}
*/
var players = [];

var playerStart = document.querySelector('nav input[type="submit"]');
playerStart.addEventListener('click', setPlayer);

function setPlayer(){
    var playerName = document.querySelector('nav input[type="text"]').value;
    if(!!localStorage.getItem('players')){
        var playerObj = JSON.parse(localStorage.getItem('players'))
        // for(var i = 0; i < localStorage.getItem('players').length; i++){
            
        // }
    }
    players.push(playerName);
    localStorage.setItem('players', players);
    
}

var avatarForm = `
    <form id="avatar">
        <label><input type="radio" name="avatar" checked><span>Player One</span></label>
        <label><input type="radio" name="avatar"><span>Player Two</span></label>
        <input type="submit" value="Choose">
    </form>
`;

var Avatar = function(name){
    this.name = name;
}

function displayAvatars(){
    if(!!localStorage.getItem('players')){
        

    }
}
displayAvatars();