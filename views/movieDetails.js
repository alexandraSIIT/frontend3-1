/*global Movie */
window.addEventListener("load",function(){

    
    var movie = new Movie();
    movie.getMovieDetails('https://ancient-caverns-16784.herokuapp.com/movies/5ac3c02177e45c002158e865')
    .then(displayMovie);
    var container = document.getElementById("containermovies");
    var template = document.getElementsByClassName("template")[0];
    var paginationn = document.getElementsByClassName("pagination")[0];
    
    // var movieTitle = document.getElementById("title");
    // var movieImg = document.getElementById("img");
    // var movieGenre = document.getElementById("genre");
   

    

    
   
    
    
    
    function displayElements(content){
    var templateClone = template.cloneNode(true); 
    var title = templateClone.querySelector("#title");
    var year = templateClone.querySelector("#year");
    var rating = templateClone.querySelector("#rating");
    var releaseDate = templateClone.querySelector("#releaseDate");
    var runtime = templateClone.querySelector("#runtime");
    var genre = templateClone.querySelector("#genre");
    var director = templateClone.querySelector("#director");
    var writer = templateClone.querySelector("#writer");
    var actors = templateClone.querySelector("#actors");
    var plot = templateClone.querySelector("#plot");
    var language = templateClone.querySelector("#language");
    var country = templateClone.querySelector("#country");
    var awards = templateClone.querySelector("#awards");
    var image = templateClone.querySelector("#img");
    var type = templateClone.querySelector("#type");
    image.innerHTML = "<img src=" + content.Poster+" />";
    title.innerHTML= content.title + "(" + content.year + ")";
    genre.innerHTML= "<b>Gender:</b> " + content.Genre;
    rating.innerHTML="<b>Rating:</b> " + content.imdbRating;
    type.innerHTML="<b>Type:</b> " + content.Type;
    container.appendChild(templateClone);

}

    console.log(movie);
    function displayMovie(){
        
        var title=document.getElementById("title");
        title.innerHTML=movie.title;
        
        var image=document.getElementById("img");
        image.innerHTML="<img src="+movie.image+" />";
        
        var year =document.getElementById("year");
        year.innerHTML+=movie.year;
        
        var rating = document.getElementById("rating");
        rating.innerHTML+=movie.rating;
        
        var releaseDate=document.getElementById("releaseDate");
        var date=movie.releaseDate;
        
        var runtime=document.getElementById("runtime");
        var runtime=movie.runtime;
        
        var genre=document.getElementById("genre");
        genre.innerHTML+=movie.genre;
        
        var director = document.getElementById("director");
        director.innerHTML+=movie.director;
        
        var writer=document.getElementById("writer");
        writer.innerHTML+=movie.writer;
        
        var actors=document.getElementById("actors");
        actors.innerHTML+=movie.actors;
        
        var plot=document.getElementById("plot");
        plot.innerHTML+=movie.plot;
        
        var language=document.getElementById("language");
        language.innerHTML+=movie.language;
        
        var country=document.getElementById("country");
        country.innerHTML+=movie.country;
        
        var awards=document.getElementById("awards");
        awards.innerHTML+=movie.awards;
        
        var ratings = document.getElementById("ratings");
        ratings.innerHTML+=movie.ratings;
        
        var movietype = document.getElementById("movietype");
        movietype.innerHTML+=movie.movietype;
        
        var dvd = document.getElementById("dvd");
        dvd.innerHTML+=movie.dvd;
        
        var boxoffice = document.getElementById("boxoffice");
        boxoffice.innerHTML+=movie.boxoffice;
        
        var production = document.getElementById("production");
        production.innerHTML+=movie.production;
        
        var website = document.getElementById("website");
        website.innerHTML+=movie.website;
        
        var ratings = document.getElementById("ratings");
        ratings.innerHTML+=movie.ratings;
    }
    
})