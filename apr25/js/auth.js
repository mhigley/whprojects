var searchBox = document.querySelector('header input');
searchBox.addEventListener('keyup', getStr);

var clientId = '',
    clientSecret = '';

getReq('./js/auth.json', getAuth);

function getAuth(auth){
    clientId = auth.clientId,
    clientSecret = auth.clientSecret;
}

function getReq(url, func){
    var req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function(){
        if(req.readyState === 4 && req.status === 200){
            func(JSON.parse(req.responseText));
        }
    }
    req.send(null);
}

function getStr(){
    var searchUrl = `https://api.github.com/search/users?q=${searchBox.value}&client_id=${clientId}&client_secret=${clientSecret}`;
    getReq(searchUrl, getUsers);
}

function getUsers(users){
    console.log(users);
}

