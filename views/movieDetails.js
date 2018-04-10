/*global Movie */
window.addEventListener("load",function(){

    var currentLocation = window.location.href;
    console.log(currentLocation);
    var currentid= currentLocation.substring(currentLocation.indexOf("=") +1,currentLocation.length);
    console.log(currentid);

    var movie = new Movie();
    movie.getMovieDetails('https://ancient-caverns-16784.herokuapp.com/movies/' + currentid)
    .then(displayMovie);
    var container = document.getElementById("containermovies");
    var template = document.getElementsByClassName("template")[0];
    var pagination = document.getElementsByClassName("pagination")[0];
    
    
    
    
    
    
    function displayMovie(movie){
        
        console.log(movie);
        var title=document.getElementById("title");
        title.innerHTML=movie.Title;
       
        
        var image=document.getElementById("img");
        image.innerHTML="<img src="+movie.Poster+" />";
        
        
        var year =document.getElementById("year");
        year.innerHTML+=movie.Year;
       
        
        var rating = document.getElementById("rating");
        rating.innerHTML+=movie.Rating;
        
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
        
        var ratings = document.getElementById("ratings");
        ratings.innerHTML+=movie.Ratings;
        
        var movietype = document.getElementById("movietype");
        movietype.innerHTML+=movie.movietype;
        
        var dvd = document.getElementById("dvd");
        dvd.innerHTML+=movie.dvd;
        
        var boxoffice = document.getElementById("boxoffice");
        boxoffice.innerHTML+=movie.boxoffice;
        
        var production = document.getElementById("production");
        production.innerHTML+=movie.Production;
        
        var website = document.getElementById("website");
        website.innerHTML+=movie.website;
        
        
    }
    
})