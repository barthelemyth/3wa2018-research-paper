var tvaht = parseFloat(window.prompt('Montant hors taxe '));
var remise= window.prompt('voulez vous une remise de tva');
const txs=1.20;

if (remise== "oui"){
	var montantr =parseFloat(window.prompt('combien de remise '));
	var result=tvaht*txs*montantr;
}
else{var result=tvaht*txs;
	}

document.write("<p> Le montant TTC est : "+result+"</p>");