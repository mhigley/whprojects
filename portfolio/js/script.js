// function toggleColors(){
//     document.getElementById('portfolio').style.backgroundImage = "linear-gradient(to top, hsl(0, 0%, 9%), hsla(0, 0%, 25%, 1))";
//     document.body.style.color = 'white';
// }

function xhrRequest(method, url){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.onload = function(){
        var responseText = xhr.responseText;
        console.log(responseText);
    };
    xhr.withCredentials = true;
    xhr.send(null);
}
xhrRequest('GET', 'https://files.mycloud.com/home.php?brand=webfiles&seuuid=3de8abc73f1c0055bb7b9322af43042f&name=github');