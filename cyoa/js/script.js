var start = document.querySelector('button[class="start"]');
start.addEventListener('click', startGame);

var story = document.getElementById('story');
var options = document.getElementById('options');

var scene1 = {
    options: [
        {
            title: 'one',
            action: 'you open the left door',
            outcome: 'the door swings open revealing a rat'
        },
        {
            title: 'two',
            action: 'you open the middle door',
            outcome: 'the door swings open and youre blasted with fire'
        },
        {
            title: 'three',
            action: 'you open the right door',
            outcome: 'the door swings open and you walk iinto the next room'
        }
    ],
    story: function(){
        return '<p>you enter a room and see ' + this.options.length + ' doors.</p>'
    },
    decision: function(x){
        return '<p>you walk forwards ' + x + '.</p>';
    }
};

function startGame(){
    printBoard(scene1);
}

function printBoard(obj){
    story.innerHTML = obj.story();
    
    obj.options.forEach(function(btnText, index){
        options.innerHTML += '<button data-num="'+ index +'">'+ btnText.title +'</button>';
    });

    options.addEventListener('click', function(evt){
        if(evt.target.nodeName == 'BUTTON'){
            story.innerHTML += obj.decision( obj.options[ parseInt( evt.target.dataset.num ) ].outcome );
        }
    });
}