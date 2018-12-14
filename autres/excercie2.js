var date=new Date();
console.log(date);


/*document.write("Nous sommes le : ");
document.write(date.getDate()+"/"+(date.getMonth())+"/"+date.getFullYear());*/

var today=date.getDay();
var mois=date.getMonth();
console.log(today);

var week = new Array(); 

week[1] = "Lundi";
week[2] = "Mardi";
week[3] = 'Mercredi'
week[4] = 'Jeudi';
week[5] = 'Vendredi';
week[6] = 'Samedi';
week[0] = 'Dimanche';

var month = new Array ()
month[1]= "janvier";
month[2]="fevrier";
month[3]="mars";
month[4]= "avril";
month[10]="Novembre";

document.write("Nous sommes le  ");
document.write(week[today]+" ");
document.write(date.getDate()+" ");
document.write(month[mois]);



/*+ date.getDate()+(month[mois])+date.getFullYear();*/