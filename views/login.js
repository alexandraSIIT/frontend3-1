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
  })
  .catch(function(e) {
  console.log(e) ;
   loginContainer.innerHTML=e.status+ " You have to be registered in order to login";
  });
  });
  
});