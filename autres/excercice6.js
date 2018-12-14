
var choix= (window.prompt('entrez pierre feuille ciseaux'));

var chiffre = Math.random()*2+1;
var nombre = Math.round(chiffre);
console.log(nombre);


switch(nombre){
	case 1:
	var result='pierre';
	break;
	case 2:
	var result='feuille';
	break;
	case 3:
	var result='ciseaux';
	break;
}

console.log(result);

if (result==choix) {

	document.write('<p>Vous êtes égalité.</p>');}

if	(result=='ciseaux' && choix=='feuille')
{document.write('<p> Ordinateur gagne.</p>');}

if	(result=='ciseaux' && choix=='pierre')
{document.write('<p> le joueur gagne.</p>');}

if	(result=='pierre' && choix=='feuille')
{document.write('<p> le joueur gagne.</p>');}

if	(result=='pierre' && choix=='ciseaux')
{document.write('<p> lordinateur gagne</p>');}

if	(result=='feuille' && choix=='pierre')
{document.write('<p> ordinateur gagne.</p>');}

if	(result=='feuille' && choix=='ciseaux')
{document.write('<p> le joueur gagne.</p>');}



