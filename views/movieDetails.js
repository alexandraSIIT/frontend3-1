/*global Movie */
window.addEventListener("load",function(){

    var url_string = window.location.href;
    url_string=getUrlParameter("id");
    console.log(url_string);
    
    var movie = new Movie();
    
    

    // url dinamic!!!
    movie.getMovieDetails("https://ancient-caverns-16784.herokuapp.com/movies/"+url_string)
    .then(displayMovie);
    // var container = document.getElementById("containermovies");
    // var template = document.getElementsByClassName("template")[0];
    // var pagination = document.getElementsByClassName("pagination")[0];
    
    // var movieTitle = document.getElementById("title");
    // var movieImg = document.getElementById("img");
    // var movieGenre = document.getElementById("genre");
    
    
   
    
    function displayMovie(movie){
        
        console.log(movie);
        var title=document.getElementById("title");
        title.innerHTML="<b>" + movie.Title + " (" + movie.Year +")" +'</b>' + '<span class="pull-right"> '+ movie.imdbRating  +' </span> ' + ' <span class="glyphicon glyphicon-star pull-right" aria-hidden="true"> </span> ';
       
        
        var image=document.getElementById("img");
        image.innerHTML="<img src="+movie.Poster+" />";
        
        
        var year =document.getElementById("year");
        year.innerHTML+=movie.Year;
       
        
        var rating = document.getElementById("rating");
        // rating.innerHTML+= movie.Ratings.Value;
        // console.log('hey', movie.Ratings.Source)
        
        
        var releaseDate=document.getElementById("releaseDate");
        releaseDate.innerHTML+=movie.Released;
        
        
        var runtime=document.getElementById("runtime");
        runtime.innerHTML+=movie.Runtime;
        
        
        var genre=document.getElementById("genre");
        genre.innerHTML+=movie.Genre;
        
        
        var director = document.getElementById("director");
        director.innerHTML+=movie.Director;
        
        
        var writer=document.getElementById("writer");
        writer.innerHTML+=movie.Writer;
        
        
        var actors=document.getElementById("actors");
        actors.innerHTML+=movie.Actors;
        
        
        var plot=document.getElementById("plot");
        plot.innerHTML+=movie.Plot;
        
        
        var language=document.getElementById("language");
        language.innerHTML+=movie.Language;
        
        
        var country=document.getElementById("country");
        country.innerHTML+=movie.Country;
        
        
        var awards=document.getElementById("awards");
        awards.innerHTML+=movie.Awards;
        
        
        var metascore = document.getElementById("metascore");
        metascore.innerHTML+=movie.Metascore;
        
        
        var ratings = document.getElementById("ratings");
        ratings.innerHTML+=movie.Ratings;
        
        
        var imdbId = document.getElementById("imdbId");
        imdbId.innerHTML+=movie.imdbID;
        
        
        var imdbrating = document.getElementById("imdbrating");
        imdbrating.innerHTML+=movie.imdbRating;
        
        
        var imdbvotes = document.getElementById("imdbvotes");
        imdbvotes.innerHTML+=movie.imdbVotes;
        
        
        var movietype = document.getElementById("movietype");
        movietype.innerHTML+=movie.Type;
        
        
        var dvd = document.getElementById("dvd");
        dvd.innerHTML+=movie.DVD;
        
        
        var boxoffice = document.getElementById("boxoffice");
        boxoffice.innerHTML+=movie.BoxOffice;
        
        
        var production = document.getElementById("production");
        production.innerHTML+=movie.Production;
        
        
        var website = document.getElementById("website");
        website.innerHTML+=movie.Website;
        
        
    }
    
})
   function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
};