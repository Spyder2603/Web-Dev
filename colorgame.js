var numsquares = 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modebuttons = document.querySelectorAll(".mode");

init();

function init(){
	for(var i = 0; i < modebuttons.length; i++){
		modebuttons[i].addEventListener("click", function(){
			modebuttons[0].classList.remove("selected");
			modebuttons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
			reset();
			/*if(this.textContent ==="Easy"){
			numsquares = 3;
			} else{
				numsquares = 6;
		}*/
		});
	}
}




colorDisplay.textContent = pickedColor;

for(var i = 0; i < modebuttons.length; i++){
	modebuttons[i].addEventListener("click", function(){
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numsquares = 3: numsquares = 6;
		reset();
		/*if(this.textContent ==="Easy"){
			numsquares = 3;
		} else{
			numsquares = 6;
		}*/
	});
}


function reset(){
	colors = generateRandomColors(numsquares);
	//pick new random color
	pickedColor = pickColor();
	//change colord isplay to match pciked color
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];
		}else{
			squares[i].style.display = "none";
		}
	}
	squares[i].style.backgroundColor = colors[i];
}

/*easybtn.addEventListener("click", function(){
	easybtn.classList.add("selected");
	hardbtn.classList.remove("selected");
	numsquares = 3;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else{
			squares[i].style.display = "none";
		}
	}
});

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length ; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});*/

resetButton.addEventListener("click", function(){
/*	//generate all new colors
	colors = generateRandomColors(numsquares);
	//pick new random color
	pickedColor = pickColor();
	//change colord isplay to match pciked color
	colorDisplay.textContent = pickedColor;
	h1.style.backgroundColor = "steelblue";
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";



	//change colors of squares
	for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = colors[i];*/
	reset();
});

for(var i = 0; i < squares.length; i++){
	//add initial color to squares
	squares[i].style.backgroundColor = colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
	//grab color of clicked square
	var clickedColor = this.style.backgroundColor;
	//compare to picked color
	if(clickedColor === pickedColor){
		messageDisplay.textContent = "Correct!";
		changeColors(clickedColor);
		h1.style.backgroundColor = clickedColor;
		resetButton.textContent = "Play Again";
	} else {
		this.style.backgroundColor = "#232323";
		messageDisplay.textContent = "Try Again";
	}
	});
}

function changeColors(color){
	//loop through all squaraes
for(var i = 0; i < squares.length; i++){
	squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//add num random colors to array
	for(var i = 0; i < num; i++){
		arr.push(randomColor())
		//get random color and put into arr
	}
	//return that array
	return arr;
}

function randomColor() {
	//pick a red from 0 to 255
	var r = Math.floor(Math.random() * 256);
	//pick a blue from 0 to 255
	var g = Math.floor(Math.random() * 256);

	//pick a green from 0 to 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";

}




