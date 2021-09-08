// next mvp: add a smoother ending
/*
no undefined
ends when it should
ideas: 
	have the last of the words be the empty string
	then add logic: if i = num words, stop?
*/

window.addEventListener('load', init);
const timeDisplay = document.querySelector('#time');
const input = document.querySelector('#input');
let time = 0;
let i = 0;
let keyword = "";
let timerGoing = false;
const words = ["for ", "each ", "while ", "java ", "python ", "int ", "boolean ", "double ", "javascript ", "for ", "each ", "while ", "java ", "python ", "int ", "boolean ", "double ", "javascript ", "", "", "", "", ""];
const wordsDisplay = document.querySelector('#words');

function init(){
	console.log("inside of init");
	input.addEventListener('input', checkMatch);
	input.addEventListener('input', startTimer)
	wordDisplayAndKeyword(i);
	
}

function startTimer(){
	if(!timerGoing){
		setInterval(countUp, 1000);
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
		percentageDone = (i / 18) * 100;
		bar.style.width = percentageDone + "%";
	}
}
