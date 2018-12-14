

var rectangle = document.querySelector('.rectangle');
var button = document.getElementById('toggle-rectangle');

button.addEventListener("click",onclicktoggle);

function onclicktoggle()
{
	rectangle.classList.toggle('hidden');
}

rectangle.addEventListener("mouseover",survole);

function survole()
{
	rectangle.classList.toggle('survole');

}

rectangle.addEventListener("mouseout",sortie);
function sortie (){
	rectangle.classList.remove('survole');
	rectangle.classList.remove('couleur');
}

rectangle.addEventListener("dblclick",doubleclick);

function doubleclick(){
	rectangle.classList.toggle('couleur');
}



