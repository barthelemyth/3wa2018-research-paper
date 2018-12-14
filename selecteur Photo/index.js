var count=0
var photo=document.getElementById('pic');

var photos = document.querySelectorAll('li');

console.log(photos);
for (var i = 0; i< photos.length; i++) {
	photos[i].addEventListener("click",clique);	
}

/*
photos.addEventListener("mouseover",survole);

photos.addEventListener("mouseout",quitter);
*/
function clique(){
	this.classList.toggle("cadre");
	this.classList.remove("grey");
	if (this.classList.toggle("cadre")="selected"){count++;}
	console.log(count);
}

/*
function survole(){
	photo.classList.toggle("grey");
}
function quitter(){
	photo.classList.remove("grey");
}

*/