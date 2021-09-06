window.addEventListener('load', init);
const timeDisplay = document.querySelector('#time');
const input = document.querySelector('#input');
let barWidth = 100;
let time = 0;
let i = 0;
let keyword = "";
const words = ["for", "each", "while", "java", "python", "int", "boolean", "double", "javascript", "for", "each", "while", "java", "python", "int", "boolean", "double", "javascript"];
const wordsDisplay = document.querySelector('#words');

function init(){
	setInterval(countUp, 1000); // for counter.
	input.addEventListener('input', checkMatch);
	wordDisplayAndKeyword(i);
	
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
	// if(i > 0){
	// 	var bar = document.getElementById('progress-bar');
	// 	var length = words.length;
	// 	var index = i;
	// 	var percentage = (i / 5) * 100;
	// 	console.log("percentage " + percentage);
	// 	bar.style.borderLeft = percentage + "px solid green";
	// 	bar.style.width = barWidth - percentage + "px";
	// 	barWidth = barWidth - percentage;
	// 	console.log(barWidth);
	// }
	
	if(i > 0){
		console.log("updating progress bar");
		let bar = document.getElementById('bar');
		percentageDone = (i / 18) * 100;
		bar.style.width = percentageDone + "%";
	}
}