
var str = '';
var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', userStr);

function githubUsers(data){
    console.log(data);
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }else{
            console.log('error: ', req.statusText);
        }
    }
    req.send(null);
}

callGetReq('env.json');

function callGetReq(env){
    console.log(env);
}

function userStr(evt){
    console.log(searchBox.value);
    console.log();
    // getReq(`https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}&client_secret=${clientSecret}`, githubUsers);
    // if(
    //     evt.key !== 'undefined' &&
    //     evt.key !== 'Backspace' &&
    //     evt.key !== 'Tab'
    // )
    // str += evt.key;

    // console.log(str, searchBox.value);
    
    // getCharacter(userSearch);
}