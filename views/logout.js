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
  
  if (validPass(password)&&validMail(email)) {
  
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
    }else if(validPass(password)==false){
     console.log("The password is not correct");
    }
    else if(validMail(email)==false){
     console.log("The email is not correct");
    }
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

    messageContainer.innerHTML=e.status+ " You have to be logged-in in order to log out";
    console.log(e)})

 });

})


function validPass(myInput){
 var valid=false;
 var lowerCaseLetters = /[a-z]/g;
 var numbers = /[0-9]/g;
 var upperCaseLetters = /[A-Z]/g;
 if(myInput.match(lowerCaseLetters)&&myInput.match(upperCaseLetters)&&myInput.match(numbers)&&myInput.length >= 8){
  valid=true;
 }else{
  valid=false;
 }
 
 return valid;
}

function validMail(myInput){
   var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
   return re.test(myInput.toLowerCase());
 }  