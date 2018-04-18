var paras = document.querySelectorAll('p');
// paras.classList.contains('classname');


// ! == not
/*
for(var i = 0; i < paras.length; i++){
    // console.log(paras[i].classList.contains('para'));
    if(1){
        console.log('thats not true');
    }
}
*/

// console.log(3 === '3');

// console.log(typeof(3));
// console.log(typeof('3'));

// // == loose comparison
// // === strict comparison

// var usernum = parseInt(prompt('pick a number'));

// if(!usernum){
//     console.log(3 + usernum);
// }else{
//     console.log('please enter something');
// }

// XMLHttpRequest
var githubToken = '3557a74cc9e724140019';
var githubUser = 'mhigley';
var weatherKey = 'cef33648f8bd9f44cbe25da932f818f7';
var myUl = document.querySelector('ul');

// console.log(new XMLHttpRequest());
var req = new XMLHttpRequest();
req.open('GET', 'http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID=cef33648f8bd9f44cbe25da932f818f7');
req.open('GET', `https://api.github.com/user/?client_id=${githubToken}`);
req.onload = function(){
    if(req.readyState === 4){
        var apiData = JSON.parse(req.responseText);
        // console.log(apiData.emojis_url);
        processData(apiData);
    }
}
req.send(null);
// console.log(req.responseText);

function processData(data){
    console.log(data);
    // for(var i = 0; i < data.list.length; i++){
    //     var weatherDesc = data.list[i].weather[0].description;
    //     var timeOfDay;
    //     var myLi = `
    //     <li>
    //         <p>${weatherDesc}</p>
    //     </li>
    //     `;
    //     myUl.innerHTML += myLi;
    // }
}

