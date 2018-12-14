'use strict';

var firebuton=document.getElementById('firingButton');
var rocket=document.getElementById('rocket');
var board=document.querySelector('#billboard span');
var seconde=3;

firebuton.addEventListener("click",temps);


function temps(){
	timer = setInterval(timer,1000);
	rocket.src="images/rocket2.gif"
}

function timer(){
board.textContent=seconde;
seconde--;
if(seconde<0){
window.clearInterval(timer);
rocket.classList.add("tookOff")}
}
/*function lancementrocket(){
rocket.classList.toggle("#rocket.tookOff");
rocket.classList.toggle("#rocket");
}*/
