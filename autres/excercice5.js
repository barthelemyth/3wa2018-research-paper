var a= parseFloat(window.prompt('entrez un chiffre'));
var b= parseFloat(window.prompt('entrez un chiffre'));
var operateur= window.prompt('saisissez un operateur');


if ((isNaN(a) == true) || isNaN(b)==true) {

	document.write('a ou b n est pas un chiffre');
}
else{
switch(operateur){
	case'+':
	var result=a+b;

	break;
	case'-':
	var result=a-b;
	break;
	case'/':
	if (b==0) 
	{document.write('on ne peut diviser par 0')}
    else{
	var result=a/b;
	}
	break;
	case'^':
	var result=a^b;
	break;

	default:
    document.write('operation inconnue');
    break;
}


document.write('le resultat est '+result+'');
}

var chiffre = Math.random();

console.log(chiffre);