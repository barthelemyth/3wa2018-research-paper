



console.log('champs1');

function execute(event)
{   event.preventDefault();
	console.log('champs2');
	var champs=document.getElementById('champs').value;
	console.log(champs);
$.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query='+champs+'', myFunction1);

}

function myFunction1 (response)
{

	console.log(response);
	console.log(response.results[0].title);
	$('#target').empty();

 	$('#target').append('<ul>');
 	for (var i = 0; i <response.results.length; i++) 
	{

 		$('#target').append('<li data-id="'+response.results[i].id+'">'+response.results[i].title+'</li>');
 		console.log(id);


 	}

 	$('#target').append('</ul>');


 
};

$('#champs2').on('click', execute);







$(document).on('click', 'li', myFunc);

function myFunc ()
{
var id = $(this).data('id');	
$.getJSON('https://api.themoviedb.org/3/movie/'+id+'?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', myFunction2);
}

function myFunction2 (response)
{


	console.log(response);
	console.log(response.overview);
	$('#target').empty();
	const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';
	document.write('<img src="'+url_img+response.poster_path+'" />');
	document.write('<h1>'+response.title+'</h1>');
   document.write('<p>'+response.overview+'</p>');
    

    console.log('la solution est'+result+)
	
 		
 		
}
