var select=document.querySelector("#add-contact");
select.addEventListener("click",show);


var selecteur=document.getElementById("contact-form");


function show(){
selecteur.classList.remove("hide");
}


var save=document.querySelector("#save-contact");
save.addEventListener("click",lauchsaving);






var tabglobal=[];

function lauchsaving()
{
var titre=document.getElementById('title').value;
console.log(titre);

if (document.getElementById('title').value=1){
	titre='Madame'
}

else if(document.getElementById('title').value=2){
	titre='Mademoiselle'
}

else if(document.getElementById('title').value=3){
	titre='Monsieur'
}


var nom=document.getElementById('lastName').value;
console.log(nom);

var prenom=document.getElementById('firstName').value;
console.log(prenom);

var tel=document.getElementById('phone').value;
console.log(tel);

var tab={ civ:titre,Name:nom,firstname:prenom,telphone:tel};
console.log(tab);


tabglobal.push(tab);
console.log(tabglobal);

var jsonData = JSON.stringify(tabglobal)

window.localStorage.setItem('localst', jsonData);

var recup = window.localStorage.getItem('localst');

var recup1=JSON.parse(recup);

console.log(recup1[0].Name);

$('#affichage').empty();
$('#affichage').append('<ul>')
for (var i =0; i<recup1.length; i++) 

{
	$('#affichage').append('<li data-id="'+i+'">'+recup1[i].Name+' '+recup1[i].firstname+'</li>')
}

$('#affichage').append('</ul>')


}


$(document).on('click', 'li', myFunc);

function myFunc ()
{
$('#detail').empty();
var recup = window.localStorage.getItem('localst');

var recup1=JSON.parse(recup);
$('#detail').append('</ul>');
var id = $(this).data('id');
$('#detail').append('<li >'+recup1[id].Name+' '+recup1[id].firstname+'</li>')
$('#detail').append('<li >'+recup1[id].telphone+' '+recup1[id].civ+'</li>')

$('#detail').append('</ul>');

$('#editer').on('click', modifer);

function modifer(){

	$('#detail').empty();
var recup = window.localStorage.getItem('localst');

var recup1=JSON.parse(recup);
$('#detail').append('</ul>');
var id = $(this).data('id');
$('#detail').html('<li >'+recup1[id].Name+' '+recup1[id].firstname+'</li>')
$('#detail').html('<li >'+recup1[id].telphone+' '+recup1[id].civ+'</li>')

$('#detail').append('</ul>');

}



} 








