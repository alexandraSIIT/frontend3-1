/*global $ */
window.addEventListener("load", function(){
    var movies = new Movies();
    var deleteButton = document.getElementById("btn btn-danger bottom");
    var searchList=document.getElementById("searchList");
    var search=document.getElementById("search");
    var searchButton=document.getElementById("searchButton");
   movies.getAllMovies('https://ancient-caverns-16784.herokuapp.com/movies/')
   .then(displayMovies);
    var container = document.getElementById("containermovies");
    
    
    
    // var pagination = document.getElementsByClassName("pagination")[0];

    function displayMovies(moviesContent){
    
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
    var template =  '<div class="col-lg-3 col-md-3 col-sm-6">';
        template += '<div class="thumbnail">';
        template += '<img class="img-test" + src='+content.Poster+' />';
        template += '<div class="caption">';
        template += "<h3><a href=" + "https://myimbd-antoniopatraska.c9users.io/frontend3-1/pages/movieDetails.html?id=" + content._id +">" + content.Title + " (" + content.Year + ") </a></h3>";
        template += "<p><b>Genre:</b> " + content.Genre + "</p>";
        template += "<p><b>Rating:</b> " + '<span class="glyphicon glyphicon-star" aria-hidden="true"> </span>' +  content.imdbRating + "</p>";
        template += '<p><a href="#" class="btn btn-danger bottom" id='+content._id+' onclick="deleteTest()" role="button">Delete</a></p>';
        // template += "<button type='button' onclick='deleteMovie()'>Delete!</button>";
        template += "</div>";
        template += "</div>";
        template += "</div>";
    
        return template;
    }
   
    var settings = {
  "url": "https://ancient-caverns-16784.herokuapp.com/movies/" + content._id, /*global content */
  "method": "DELETE",
  "headers": {
    "x-auth-token": getCookie('accessToken'),    
  }
}
function deleteTest(){
$.ajax(settings).done(function (response) {
  console.log(response);
});

function getCookie(name) {
  var value = "; " + document.cookie;
  var parts = value.split("; " + name + "=");
  if (parts.length == 2) {
      return parts.pop().split(";").shift();
  }      
}
}

    // delete
//   function deleteMovie(_id){
//     return $.ajax({
//         url:"https://ancient-caverns-16784.herokuapp.com/movies/"+ '5ad0ddd8c0c6fc0021bb128d',
//         method:'DELETE',
//         // headers:{'X-Auth-Token':'RWsfbuJLBUVb6_gYZxgy0fanS_2zeeBW'},
//         headers: {
//                 // 'X-Auth-Token': getCookiesAsObject()
//             },

//         success:function(response){
//             // console.log(elementToDelete);
//             console.log('Hey' + response);
//             elementToDelete.remove();
//         }
//     });
// }
   
    // add 
    
    // function addMovie() {
    //     var addbutton = document.getElementById('#addmovie');
    //     console.log('hey');
    // }
    
    //  deleteButton.addEventListener("click", function() {
    //         alert (test);
    //     });
    //Search
    
    searchList.addEventListener("change",function(){
                var selected=this.selectedOptions[0];
                
                searchButton.addEventListener("click",function(){
                    if (selected.id != "defOption"){
                    var value=search.value;
                    console.log(value);
                    
                    movies.getAllMovies('https://ancient-caverns-16784.herokuapp.com/movies?'+selected.id+"="+value)
                    .then (function(response){
                        console.log(response);
                        container.innerHTML="";
                        displayMovies(response);
                        if (response.results.length==0){
                            container.innerHTML='<p class="text-center">No result</p>';
                        }
                    });
                    }
                    
                });
                if (selected.id == "defOption"){
                    container.innerHTML="";
                    movies.getAllMovies('https://ancient-caverns-16784.herokuapp.com/movies/')
                        .then(displayMovies);
                }
                
    }); 
    
    
});

window.addEventListener("load",function (){
var username = document.getElementById("Username");
var password = document.getElementById("Password");
 var submit=document.getElementById("submitButton");
 var messageContainer=document.getElementById("Login");
 var auth =new Auth();
 
 

 submit.addEventListener("click",function (){
  
 var username = document.getElementById("User_name").value;
 var password = document.getElementById("Pwd").value;


auth.Login(username,password)
  .then(function(response){
  const token=response.accessToken;
  auth.token=token;
  document.cookie="accessToken="+token;
  console.log(response.accessToken);
  });
  
  });
 
});








