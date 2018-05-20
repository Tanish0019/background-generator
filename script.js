var h3 = document.querySelector("h3");
var color1 = document.querySelector("#color1");
var color2 = document.querySelector("#color2");
var body = document.querySelector("body");
var random = document.querySelector("#random");
var colors = [color1, color2];

function setGradient(){
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	h3.textContent = body.style.background + ";";
};

function randomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for(var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    };
    return color;
};

function setRandom() {
	color1.value = randomColor();
	color2.value = randomColor();
	setGradient();
};

random.addEventListener("click", setRandom);

colors.forEach(function(color) {
	color.addEventListener("input", setGradient)
});


