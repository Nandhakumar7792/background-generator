var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementsByTagName("body")[0];
console.log(body);
color1.addEventListener("input",setBackgroundColor);

color2.addEventListener("input", setBackgroundColor);

function setBackgroundColor() {
    body.style.background = "linear-gradient(to right, " + color1.value + " , " + color2.value + ")";
    css.textContent = body.style.background;
}