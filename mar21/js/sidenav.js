var navBtn = document.getElementById("navBtn");
var nav = document.getElementById("nav");
// TARGET ELEMENT BY DECLARED VARIABLE
// navBtn.style.color = "red";
// navBtn.style.fontSize = "32px";

/*
    EVENT LISTENER NEEDS 2 THINGS:
    - WHAT EVENT (ie: click, hover, etc)
    - WHAT FUNCTION TO RUN
*/
navBtn.addEventListener("click", showNav);

function showNav() {
    navBtn.classList.toggle("active");
    nav.classList.toggle("viewNav");
}