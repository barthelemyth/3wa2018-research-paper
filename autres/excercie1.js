

var tvaht = parseFloat(window.prompt('Montant declaré hors taxe'));

const taux=1.19;
var result=taux*tvaht;
document.write("<p> Le montant TTC est : "+result+"</p>")