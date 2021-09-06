window.addEventListener('load', init);
const timeDisplay = document.querySelector('#time');
let time = 0;
//sconst words = ["for", "each", "while", "java", "python", "int", "boolean", "double", "javascript"];
//const wordsDisplay = document.querySelector('#words');

function init(){
	setInterval(countUp, 1000);
	//wordsDisplay.innerHTML = words[0];
}
function countUp(){
	time++;
	timeDisplay.innerHTML = time;
}