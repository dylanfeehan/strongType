window.addEventListener('load', init);
const timeDisplay = document.querySelector('#time');
const input = document.querySelector('#input');
const resetButton = document.querySelector('#reset');
let time = 0;
let i = 0;
let keyword = "";
let timerGoing = false;
const wordsa = ["for ", "each ", "while ", "java ", "python ", "int ", "boolean ", "double ", "javascript ", "for ", "each ", "while ", "java ", "python ", "int ", "boolean ", "double ", "javascript", "", "", "", "", ""];
const words = ["python ", "int ", "boolean ", "double ", "javascript", "", "", "", "", ""];
const wordsDisplay = document.querySelector('#words');
const gameOver = document.querySelector('#game-over-message');
let timer = setInterval(countUp, 10000000000000000);


function init(){
	console.log("inside of init");
	input.addEventListener('input', checkMatch);
	input.addEventListener('input', startTimer)
	wordDisplayAndKeyword(i);
	
}

function startTimer(){
	if(!timerGoing){
		timer = setInterval(countUp, 1000);
		timerGoing = true;
	}
}

function countUp(){
	time++;
	timeDisplay.innerHTML = time + "s";
}
function checkMatch(){
	if(input.value === keyword){
		input.value = "";
		updateWords();
		if(i === words.length - 5){
			clearInterval(timer);
			//timerGoing = false;
			gameOver.innerHTML = "Score: " + time + ", WPM: " + Math.floor(((words.length - 5)/(time/60)));
			resetButton.style.visibility = 'visible';
		}
	}
}
function updateWords(){
	wordDisplayAndKeyword(++i);
}
function wordDisplayAndKeyword(i){
	wordsDisplay.innerHTML = words[i] + " " + words[i + 1] + " " + words[i + 2] + " " + words[i + 3]; // words 
	keyword = words[i]; // to match
	if(i > 0){
		console.log("updating progress bar");
		let bar = document.getElementById('bar');
		console.log(words.length);
		percentageDone = (i / (words.length - 5)) * 100;
		bar.style.width = percentageDone + "%";
	}
}
function resetGame(){
	console.log('reset called');
	
	time = 0;
	i = 0;
	wordDisplayAndKeyword(i);
	timeDisplay.innerHTML = time + "s";
	timerGoing = false;
}