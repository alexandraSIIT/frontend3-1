window.addEventListener("load", function(){
   var movies = new Movies(); 
   movies.getAllMovies('https://ancient-caverns-16784.herokuapp.com/movies/')
   .then(displayMovies);
    var container = document.getElementById("containermovies");
     // var thumbnail = document.getElementsByClassName("col-lg-3 col-md-6 mb-4")[0];
    
    var pagination = document.getElementsByClassName("pagination")[0];

    function displayMovies(moviesContent){
    // var currentPage = moviesContent.pagination.currentPage;
    // var allPages = moviesContent.pagination.numberOfPages;
    // document.getElementById("current-page").innerHTML = "<b>Current Page:" + currentPage + "/"+ allPages;
    
    // var nextPage = moviesContent.pagination.links.next;
    // document.getElementById("next-page").innerHTML = "<a href=" + nextPage  + "/>" + "Next";
    var movieListEl = '';
    for (var i=0; i<moviesContent.results.length; i++){
        
        var index = i+1;
        var movieEntry = '';
        if (index === 1) {
            movieEntry+= '<div class="row">';
            
        }
        var movieContent = displayElements(moviesContent.results[i]);
        movieEntry += movieContent;
        if (index%4 === 0 && index !== 1 && index !== moviesContent.results.length) {
             movieEntry += '</div>';
             movieEntry+= '<div class="row">';
        }
        
        if (index === moviesContent.results.length) {
            movieEntry += '</div>';
        }
        
        movieListEl += movieEntry;
    }
        container.innerHTML += movieListEl;
}
    
    
    function displayElements(content){
    var template =  '<div class="col-lg-3 col-md-6 mb-4">';
        template += '<div class="thumbnail">';
        template += '<img class="img-test" + src='+content.Poster+' />';
        template += '<div class="caption">';
        template += "<h3><a href=" + "https://myimbd-antoniopatraska.c9users.io/frontend3-1/pages/movieDetails.html?id=" + content._id +">" + content.Title + " (" + content.Year + ") </a></h3>";
        template += "<p><b>Gender:</b> " + content.Genre + "</p>";
        template += "<p><b>Rating:</b>" + content.imdbRating + "</p>";
        template += '<p><a href="#" class="btn btn-primary" role="button">Edit</a> <a href="#" class="btn btn-danger" role="button">Delete</a></p>';
        template += "</div>";
        template += "</div>";
        template += "</div>";
    
        return template;
    
    // var buttonDelete=document.getElementById("deleteButton");
    // buttonDelete.addEventListener("click",function(event){
    //     movies.deleteMovie();
    // });
    }
});









