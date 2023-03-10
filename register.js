function checkPassword(){
    let pw = document.getElementById("pswd").value;
    let pw2 = document.getElementById("cnpswd").value;
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }
    if(pw2==""){
        document.getElementById("message2").innerHTML="**Fill the confirm password please";
        return false;
    }  
    if(pw!=pw2){
        document.getElementById("message2").innerHTML="**Passwords doesn't match";
        return false;
    }
     
   //minimum password length validation  
    if(pw.length < 6) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 6 characters";  

       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else if(pw==pw2) {  
       alert("Password is correct");  
    }  
}