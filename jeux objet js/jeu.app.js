// $('#attaque').on('click', attaque);
// $('#def').on('click', defense);
// $('#sort').on('click', sort);


;




var Program = function(){

	this.gege = new Perso('Gégé', 300, 50, 7, 120);
	this.nanard = new Perso('Nanard', 280, 45, 18, 160);

	$('#attaquer').on('click', this.onClickAttaque);

}



Program.prototype.onClickAttaque = function(event) {
	event.preventDefault();

	console.log(this.gege);

}

var prog = new Program();


console.log(prog);