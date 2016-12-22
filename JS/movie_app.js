$(document).ready(function(){
	console.log("test");
	// MAKE AN API REQUEST for ALL API CALLS 
	var apiBaseUrl = "http://api.themoviedb.org/3/";
	var imageBaseUrl = "http://image.tmdb.org/t/p/";
	const nowPlayingUrl = apiBaseUrl+"movie/now_playing?api_key="+apiKey;
	var np = [];
	$.getJSON(nowPlayingUrl, function(nowPlayingData){
		np = nowPlayingData.results;
		console.log(nowPlayingUrl);
		console.log(nowPlayingData);
		var nowPlayingHTML ="";
		for(let i=0;i<nowPlayingData.results.length;i++){
			var poster = imageBaseUrl+"w300"+nowPlayingData.results[i].poster_path;
			nowPlayingHTML += '<button type="button" class="btn btn-primary" movieID='+nowPlayingData.results[i].id+' data-toggle="modal" data-target="#myModal">';
				nowPlayingHTML += "<div class='col-sm-12 movie-tile'>";
					nowPlayingHTML+= '<img src= "'+poster+'">';
					nowPlayingHTML += "<div></div>";
				nowPlayingHTML += '</div>';
			nowPlayingHTML += '</button>';
		}
		// Populate the movie 
		$("#movie-grid").html(nowPlayingHTML);
		

		$('button').click(function(){
			console.log(this);
			var movieId = $(this).attr("movieid");
			console.log(movieId);
			// filtered JSON request

		});
	});
	// $(data-toggle="modal").click(function(){
	// 	console.log("It Works")
	// });


});

 