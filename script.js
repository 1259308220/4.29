
"use strict";

window.onload = function() {


//Navigation bar buttons
var about = document.querySelector("#navAbout");
var services = document.querySelector("#navServices");
var contact = document.querySelector("#navContact");

about.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}

services.onclick = function() {
  document.querySelector("#servicesRow").scrollIntoView();
  window.scrollBy(0, -50);
}

contact.onclick = function() {
  document.querySelector("#phoneContact").scrollIntoView();
  window.scrollBy(0, -50);
}

//Learn more jumbotron button jump to about div
var bannerBtn = document.querySelector("#bannerBtn");
bannerBtn.onclick = function() {
  document.querySelector("#aboutRow").scrollIntoView();
  window.scrollBy(0, -50);
}

//Clear input on click in the form
var formName = document.querySelector("#formName");
formName.onclick = function() {
  formName.value = "";
}

var formEmail = document.querySelector("#formEmail");
formEmail.onclick = function() {
  formEmail.value = "";
}

var formMessage = document.querySelector("#formMessage");
formMessage.onclick = function() {
  formMessage.value = "";
}
}
//4.26ZUOYE
function validateform(){  
      var Name=document.myform.firstname.value;  
      var Email=document.myform.lastname.value;
      var Mobilephone=document.myform.address.value;  
      var Message=document.myform.age.value;
     
      
      
      if (Name==null || Name==""){  
        alert("First name can't be blank");  
        return false;}
      else if (Email==null || mail==""){  
        alert("Last name can't be blank");  
        return false;}  
      else if (Mobilephone==null || Mobilephon==""){  
          alert("address can't be blank");  
          return false;}
      else if (isNaN( Message)){
        document.getElementById("numloc1").innerHTML="Please enter numeric digits only";
        return false;}
      
      }