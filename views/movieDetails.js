/*global Movie */
window.addEventListener("load",function(){

    
    var movie = new Movie();
    movie.getMovieDetails('https://ancient-caverns-16784.herokuapp.com/movies/5ac3c02177e45c002158e865')
    .then(displayMovie);
    var container = document.getElementById("containermovies");
    var template = document.getElementsByClassName("template")[0];
    var pagination = document.getElementsByClassName("pagination")[0];
    
    // var movieTitle = document.getElementById("title");
    // var movieImg = document.getElementById("img");
    // var movieGenre = document.getElementById("genre");
    
    
   
    
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
        movietype.innerHTML+=movie.Movietype;
        
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