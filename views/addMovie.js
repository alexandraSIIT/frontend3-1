window.addEventListener("load",function (){
var title = document.getElementById("Title");
var year = document.getElementById("Year");
var id = document.getElementById("ImdbID");
var poster= document.getElementById("Poster");
var submit=document.getElementById("submitButton");
var auth =new Auth();
 submit.addEventListener("click",function (){
  
 var title = document.getElementById("Movie_Title").value;
 var year = document.getElementById("Movie_Year").value;
 var id = document.getElementById("Movie_Id").value;
 var type = document.getElementById("Movie_Type").value;
 var poster = document.getElementById("Movie_Poster").value;
 
function addMovie(title,year,id,type,poster){
 var articlesRootUrl = "https://ancient-caverns-16784.herokuapp.com/movies/";
    
    $.ajax({
        url: articlesRootUrl,
        method: 'POST',
  
  })
})
})