var number =parseFloat(window.prompt("entrez une table de multiplication ?"))

document.write("<table>");

for(var j = 1; j <= number; j++){
	document.write("<tr>");
	for(var i = 1; i <= number; i++){
	if (i==j){
	document.write("<td class='rouge'>"+i*j+"</td>");
	}
	else{
		document.write("<td class='vert'"+i*j+"</td>");
	}
	}
	document.write("</tr>");
}

document.write("</table>");