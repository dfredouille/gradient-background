var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var color4 = document.querySelector(".color4");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("randomButton");

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setGradient() {
  
	body.style.background = 
  `linear-gradient(to top left, ${color1.value}, rgba(255, 153, 150, 0),  ${color2.value}), `
  + `linear-gradient(to top right,  ${color3.value}, rgba(255, 153, 150, 0),  ${color4.value}) rgba(255, 153, 150, 1)`

	css.textContent = body.style.background + ";";
}

function generateAndSetGradient() {
        console.log('IN generateAndSetGradient')
        color1.value = getRandomColor()
        color2.value = getRandomColor()
        color3.value = getRandomColor()
        color4.value = getRandomColor()
        setGradient();
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
color3.addEventListener("input", setGradient);
color4.addEventListener("input", setGradient);

randomButton.addEventListener("click", generateAndSetGradient);

setGradient() 
