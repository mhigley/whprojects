// alert('test');

var options = document.getElementById('options');

var scene1 = [
    'As you open the door in front of you, a distant "popping" sound rings throughout the hall as all the lights go dark. You freeze and instinctively throw your hands out in front of you, waving them aimlessly to shield you from harm.',
    'flick on your lighter',
    'search for a light switch',
    'navigate through the dark'
];
var scene2 = [
    'You fumble through your pockets, frantically digging to find your lighter. As you rotate it in your hand feeling for the familiar clamshell lid, you properly orient it between your fingers, thumb the lid open with your left hand and instinctively flick your right thumb down creating a sudden burst of sparks. It lights and casts a shadowy glow around you.',
    'step into the dark room ahead',
    'close the door and backtrack down the hall',
    'toss the lighter ahead of you illumiating the room'
];

function scenePlay(scene){
    options.innerHTML = '';
    for(var i = 1; i < scene.length; i++){
        options.innerHTML += makeBtns(scene[i]);
    }
    setListeners();
}

scenePlay(scene1);

function makeBtns(str){
    return `<button type="button">${str}</button>`;
}

function setListeners(){
    document.addEventListener('click', function(e){
        if(e.target.type == 'button'){
            scenePlay(scene2);
        }
    });
}

