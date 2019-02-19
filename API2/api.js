$.ajax({
    url: "https://api.internationalshowtimes.com/v4/movies/52340",
    type: "GET",
    dataType: "json",
    data: {
        "countries": "FR",
    },
    headers: {
        "X-API-Key": "nce8u3Rq5yNq0jL9FjpmxZ8jWCzv9xvw",
    },
})
.done(function(response) {
    console.log("HTTP Request Succeeded! ");
    console.log(response);
    console.log(response.movie.original_title);
    // document.write('<h1>'+response.movie.original_title+'</h1>');
    $('#titre').append(response.movie.original_title);
    $('#image').append('<img id="img" src="'+response.movie.poster_image_thumbnail+'" />');
    
      $('#resume').append('<span> Avec:</span>')
    for (var i = 0; i <5; i++) {
    $('#resume').append(response.movie.cast[i].name);

    }
    $('#resume').append('<p style="color:red"> Synopsis</p>');
    $('#resume').append('<p>'+response.movie.synopsis+'</p>');

     var url = response.movie.trailers[0].trailer_files[0].url;
     var youtube = url.split('=');
        var embed = 'https://www.youtube.com/embed/';
    $('#film').attr('src', embed+youtube[1]);

  function position(pos) {

    console.log(pos);
    var location = pos.coords.latitude.toFixed(2)+','+pos.coords.longitude.toFixed(2);
    console.log(location); 

}



if(navigator.geolocation) {
    
    console.log('il y a la géoloc');
    
    navigator.geolocation.getCurrentPosition(position);
    
} else {

  console.log('Pas de geoloc');
}


    // document.write('<img src="'+response.movie.poster_image_thumbnail+'" />');
})
.fail(function(error) {
    console.log("HTTP Request Failed");
})
