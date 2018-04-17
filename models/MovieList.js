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
       method: 'GET'
           
        
    });
        
        

Movies.prototype.deleteMovie = function(id){
    return $.ajax({
        url:"https://ancient-caverns-16784.herokuapp.com/movies/"+ id,
        method:'DELETE',
        // headers:{'X-Auth-Token':'RWsfbuJLBUVb6_gYZxgy0fanS_2zeeBW'},
        headers: {
                'X-Auth-Token': getCookiesAsObject()
            },

        success:function(response){
            // console.log(elementToDelete);
            console.log('Hey' + response);
            elementToDelete.remove();
        }
    });
}
};

Movies.prototype.pagination = function Pagination(urlRoot) {
    this.currentPage = urlRoot.currentPage;
    this.nextPage = urlRoot.nextPage;
    this.prevPage = urlRoot.selfPage;
    
    console.log('hey',Pagination(urlRoot))
    
};

