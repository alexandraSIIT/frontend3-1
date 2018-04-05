function Movies() { 
    this.id="";
    this.title="";
    this.image="";
    this.details="";
    
}

function Movie() { 
    this._id="";
    this.title="";
    this.image="";
    this.year="";
    this.rating="";
    this.releaseDate="";
    this.runtime="";
    this.genre="";
    this.director="";
    this.writer="";
    this.actors="";
    this.plot="";
    this.language="";
    this.country="";
    this.awards="";
}




Movies.prototype.getAllMovies = function(urlRoot) {
    
    var root = urlRoot;
    return fetch(
        root , {
        method: 'GET',
        }).then(function(response){
        return response.json();
        });
};

Movie.prototype.getMovieDetails = function(urlRoot) {
    
    var root = urlRoot;
    return $.ajax({
       url: root,
       success:function(response){
            // console.log(elementToDelete);
            console.log("hey testing" + response);
            // elementToDelete.remove();
        }
    });
        

Movies.prototype.deleteMovie = function(){
    return $.ajax({
        url:"https://ancient-caverns-16784.herokuapp.com/movies/"+'5ab9dc750e1fe40021c138e0',
        method:'DELETE',
        headers:{'X-Auth-Token':'RWsfbuJLBUVb6_gYZxgy0fanS_2zeeBW'},

        success:function(response){
            // console.log(elementToDelete);
            console.log('Hey' + response);
            // elementToDelete.remove();
        }
    });
}
};

