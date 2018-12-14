'use strict';   // Mode strict du JavaScript



var barre=document.querySelector(".hid");
var ap=document.querySelector(".show");

barre.addEventListener("click",montrer);

function montrer()
{
	ap.classList.toggle('rouge');	
}

var droite=document.querySelector(".fa-arrow-right");
droite.addEventListener("click",suivant);

var myArray = ['images/1.jpg', 'images/2.jpg', 'images/3.jpg', 'images/4.jpg', 'images/5.jpg'];
var position=0;
var photo=document.querySelector(".image")

function suivant(){
	photo.src=myArray[position];
	if(position>3){
		position=0;
	}
	else {
		position++;
	}
}

var droite=document.querySelector(".fa-arrow-left");
droite.addEventListener("click",precedent);

function precedent(){
	photo.src=myArray[position];
	if(position<1){
		position=4
	}
	else {
		position--;
	}
 }


//var droite=document.querySelector(".fa-caret-right");
//droite.addEventListener("click",intervalle);
var isPlaying = false;

function intervalle(){
	
	if (isPlaying ==false) {
		timer = setInterval(inter,1000);
		isPlaying = true;
	} else {
		window.clearInterval(timer);
		isPlaying = false;
	}
	iframe.classList.toggle('fa-play');
	iframe.classList.toggle('fa-pause');
}

function inter(){
	photo.src=myArray[position];
	if(position>3){
		position=0
	}
	else {
		position++;
	}
 }

var p=document.querySelector("#diapo");
var iframe = document.querySelector("#diapo i");
var timer
p.addEventListener("click",intervalle);



var rand=document.querySelector(".fa-caret-right");
rand.addEventListener("click",int);

var alternance=false
function int()
{
	if (alternance==false)
	{timer = setInterval(aleatoi,1000);
	alternance=true;
	}
	else{window.clearInterval(timer);
		alternance=false;
	}
}

function aleatoi()
{
	photo.src=myArray[position];
	position=getRandomInteger(1,4);
}


function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventlistener('keyup', onPushButtons);

function onPushButtons(event) {
	
    console.log(event);
    
    switch(event.keyCode) {
    	case 39:
        suivant();
        break;
        
        case 37:
        precedent();
        break
        
        case 82:
        goToRandom();
        break;
        
        case 32:
        goToPlay();
        break
    }

}