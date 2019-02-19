


	const API_KEY = '2ee2c5b569240ea2a2a879dd9c8a822c';
    const url_img = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

    
   // 'https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c'

	$.getJSON('https://api.themoviedb.org/3/movie/76341?api_key=2ee2c5b569240ea2a2a879dd9c8a822c', callBack);
    
    function callBack(response) {
    	
        console.log(response);
        console.log(response.id);
  		console.log(response.genres[1].name);
        
        document.write('<img src="'+url_img+response.backdrop_path+'" />');
  
    }
    
    /*
    'https://image.tmdb.org/t/p/w185_and_h278_bestv2'
    '/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg'
    
        'https://image.tmdb.org/t/p/w185_and_h278_bestv2/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg'*/
        
       
        
    //'https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query=avengers'
    
    
    $.getJSON('https://api.themoviedb.org/3/search/movie?api_key=2ee2c5b569240ea2a2a879dd9c8a822c&query=avengers', myFunc);
    
    function myFunc(response) {
    
    	console.log(response);
    
    }

    <!DOCTYPE html>
<html>
<head>
	<title>api</title>
	<meta charset="utf-8">
    <script src="http://code.jquery.com/jquery-2.1.4.min.js"></script>

</head>
<body>
	<h1>Je requête movie db</h1>
</body>
<script type="text/javascript" src="api.js"></script>
</html>


