


var course = ['boisson', 'chips', 'viandes','legumes'];
console.log(course);

function inserer(element)
{
    course.push(element);
}
var plus = window.prompt('que ajouter ?');
inserer(plus);
console.log(course);

function supprimer(element){
	 var index=course.indexOf(element);
	 course.splice(index,index);
}
var element = window.prompt('que supprimer ?');
supprimer(element);
console.log(course);



function supprimertout(){
	var colonne=course.length;
	course.splice(0,colonne);
}

console.log(course);

var reponse = window.prompt('tout supprimer oui ou non  ?');
if(reponse=='oui'){
	supprimertout();
}

console.log(course);


for (var i = 0; i <course.length; i++)
{

document.write("<p>"+course[i]+"<p>");
}


