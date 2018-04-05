window.addEventListener("load",function (){
 var auth=  new Auth();
 var logoutButton=document.getElementById("logoutButton");
 var messageContainer=document.getElementById("logoutMessage");
 var registerButton = document.getElementById("registerButton");
 var form= document.getElementById("registerForm");
 var okRegister=document.getElementsByName("okButton")[0];
 var registerContainer=document.getElementById("registerMessage");

 registerButton.addEventListener("click",function(){
  form.style.display="block";
   
 });
 okRegister.addEventListener("click", function(){
  var userName=document.getElementsByName("userName")[0].value;
  var password=document.getElementsByName("password")[0].value;
  var email=document.getElementsByName("email")[0].value;
  
auth.register(userName,password)
  .then(function(response){
  const token=response.accessToken;
  auth.token=token;
  document.cookie="accessToken="+token;
  console.log(response.accessToken);
  })
  .catch(function(e) {
  console.log(e) ;
   registerContainer.innerHTML=e.status+ " Username already existing. Please login";
  });
 });
 
logoutButton.addEventListener("click",function (){
  console.log(auth.token);
  auth.logOut(auth.token)
  .then(function(response){
  console.log(response);
  messageContainer.innerHTML=response.message;
  document.cookie="accessToken=";
  auth.token="";
  })
  .catch(function(e) {
   messageContainer.innerHTML=e.status+ " You have to be logged in in order to log out";
  console.log(e)})
 
 });




})
function Auth(){
 this.token="";
}
Auth.prototype.logOut=function(token){
  var root = 'https://ancient-caverns-16784.herokuapp.com';
  console.log(token);
 return $.ajax({
  url:root+"/auth/logout",
   method: 'GET',
   headers:{'X-Auth-Token':token},
 
 })
}
Auth.prototype.register=function(userName,Password){
  var root = 'https://ancient-caverns-16784.herokuapp.com';
 return $.post(root+"/auth/register",{
    username: userName,
	   password: Password
   })
   
  }



   