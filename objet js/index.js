var voiture1 = new Car();

console.log('voiture1', voiture1);


var voiture2 = new Car();

console.log('voiture2', voiture2);

voiture2.brand = "citroen";

console.log('voiture1', voiture1);
console.log('voiture2', voiture2);

var voiture3=new Car1('Renault', '1991', '21 nevada', 'diesel', '325000',50);
console.log('voiture3', voiture3);

var voiture4=new Car1('fiat', '1991', '21 nevada', 'diesel', '325000',60);
console.log('voiture4', voiture4);

document.write(voiture3.brand+' '+voiture3.year);

voiture3.affichage();
voiture4.affichage();

voiture3.piquerEssence(voiture4,25);
voiture4.piquerEssence(voiture3,50);