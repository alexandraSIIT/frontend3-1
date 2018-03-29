function Movies() {
    this.id="";
    this.title="";
    this.image="";
    this.details="";
}

Movies.prototype.getAllMovies = function(urlRoot) {
    
    var root = urlRoot;
    return fetch(
        root, {
        method: 'GET',
        }).then(function(response){
        return response.json();
        });
};


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

};

