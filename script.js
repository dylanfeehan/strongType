window.addEventListener('load', init)
const timeDisplay = document.querySelector('#time');
function init(){
	setInterval(countUp, 1000);
}
function countUp(){
	time++;
	timeDisplay.innerHTML = time;
}
