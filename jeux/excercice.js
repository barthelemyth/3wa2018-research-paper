


var chiffre =Math.round(Math.random()*1000);
document.write(chiffre);

do{
var choix= parseFloat(window.prompt('entrez un chiffre'));
if(chiffre<choix){
	document.write("vous etes trop haut");
}
else if(chiffre>choix){
	document.write("vous etes trop bas");
}} while(choix!=chiffre)

document.write('<p>Victoire<p>');