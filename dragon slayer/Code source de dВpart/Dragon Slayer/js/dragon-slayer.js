'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/



/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


function requestInteger(message, min, max)
{
	var integer;
    
    do
    {
    	integer = parseInt(window.prompt(message));
    
    }while(isNaN(integer) == true || integer < min || integer > max);
    
    return integer;
}

    function getRandomInteger(min, max) {

	return Math.floor(Math.random() * (max - min + 1)) + min;

}

var game = new Object();

game.difficulty=requestInteger("choisir ta difficulté",1,3);

if(game.difficulty==1){
 game.hpdragon=getRandomInteger(150,200);
 game.hpknight=getRandomInteger(200,250);
}

else if (game.difficulty==2){
	game.hpdragon=getRandomInteger(200,250);
	game.hpknight=getRandomInteger(200,250);
}
else if (game.difficulty==3){
	game.hpdragon=getRandomInteger(200,250);
	game.hpknight=getRandomInteger(200,250);

}

console.log(game);
  
 
    	var armure=(window.prompt("quelle armure ?"));
    
  
 if (armure=="cuivre"){
 	game.weapon=1;
 }
 else if (armure=="fer"){
	game.weapon=1.5;
}
else if (armure=="magique"){
	game.weapon=1.5;
	
}

console.log(game)

console.log(game);
  
 
    	var arme=(window.prompt("quelle arme ?"));
    
  
 if (armure=="bois"){
 	game.armus=0.5;
 }
 else if (armure=="fer"){
	game.armus=1;
}
else if (armure=="excalibur"){
	game.armus=2;
	
}

console.log(game);


function domagedragon(){

	if(game.difficulty==1){
 var domaged=getRandomInteger(10,20);
}

else if (game.difficulty==2){
	var domaged=getRandomInteger(20,30);
	
}
else if (game.difficulty==3){
	var domaged=getRandomInteger(40,50);

}

return domaged;

}

function domageknight(){

	if(game.difficulty==1){
 var domagek=getRandomInteger(10,20);
}

else if (game.difficulty==2){
	var domagek=getRandomInteger(20,30);
	
}
else if (game.difficulty==3){
	var domagek=getRandomInteger(40,50);

}
return domagek;

}


do{
var choix=getRandomInteger(0,1)
if(choix<=0.5){
var resultdragon=game.hpdragon-domageknight();
game.hpdragon=resultdragon;
console.log("chevalier tape la vie du dragon est"+resultdragon+"");
}
else{
var resultknight=game.hpknight-domagedragon();
game.hpknight=resultknight;
console.log("dragon tape la vie du chevalier est"+resultknight+"");
}
}while(game.hpknight>=0&&game.hpdragon>=0);

if(resultknight>resultdragon){
	document.write("victoire du chevalier");

}
else {document.write("victoire du dragon");
}

console.log(resultdragon);
console.log(resultknight);