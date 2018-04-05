window.addEventListener("load", function(){
   var movies = new Movies(); 
   movies.getAllMovies('https://ancient-caverns-16784.herokuapp.com/movies/')
   .then(displayMovies);
    var container = document.getElementById("containermovies");
    var template = document.getElementsByClassName("template")[0];
    var paginationn = document.getElementsByClassName("pagination")[0];

    function displayMovies(moviesContent){
    var currentPage = moviesContent.pagination.currentPage;
    var allPages = moviesContent.pagination.numberOfPages;
    document.getElementById("current-page").innerHTML = "<b>Current Page:" + currentPage + "/"+ allPages;
    
    var nextPage = moviesContent.pagination.links.next;
    document.getElementById("next-page").innerHTML = "<a href=" + nextPage  + "/>" + "Next";
    
    for (var i=0; i<moviesContent.results.length; i++){
        displayElements(moviesContent.results[i]);
    }
}
    
    function displayElements(content){
    var templateClone = template.cloneNode(true); 
    var title = templateClone.querySelector("#title");
    var genre = templateClone.querySelector("#genre");
    var image = templateClone.querySelector("#img");
    var rating = templateClone.querySelector("#rating");
    var type = templateClone.querySelector("#type");
   var testing = templateClone.querySelector("#testing");
    testing.innerHTML = "serus";
    image.innerHTML = "<img src=" + content.Poster+" />";
    title.innerHTML= "<h2><a href=" + "https://myimbd-antoniopatraska.c9users.io/frontend3-1/pages/movieDetails.html?id=" + content._id +" />" + content.Title + " (" + content.Year + ")</h2>";
    genre.innerHTML= "<b>Gender:</b> " + content.Genre;
    rating.innerHTML="<b>Rating:</b> " + content.imdbRating;
    type.innerHTML="<b>Type:</b> " + content.Type;
    container.appendChild(templateClone);
    
    var buttonDelete=document.getElementById("deleteButton");
    buttonDelete.addEventListener("click",function(event){
        movies.deleteMovie();
    });
    }
});









