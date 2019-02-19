'use strict';

/*************************************************************************************************/
/* ***************************************** FONCTIONS ***************************************** */
/*************************************************************************************************/



function lance() {
if ($('input[name=what]:checked').val()==1)
{
$.get('php/1-get-html-article.php', myFunction);
}
else if ($('input[name=what]:checked').val()==2)
{
$.getJSON('php/2-get-json-data.php', myFunction1);
}
else if ($('input[name=what]:checked').val()==3)
{
$.get('php/3-get-html-movies.php', myFunction);
}

};


function myFunction(response) {

	console.log(response);
	$('#target').html(response);

};

function myFunction1 (response){
	console.log(response);
	$('#target').empty();
	$('#target').append('<ul>')
	for (var i = 0; i < response.length; i++) 
	{

	$('#target').append('<li> Nom:  ' +response[i].firstName+'</li><br>')
	$('#target').append('<li> tel:  ' +response[i].phone+'</li><br>')

	}
		$('#target').append('</ul>')
	}