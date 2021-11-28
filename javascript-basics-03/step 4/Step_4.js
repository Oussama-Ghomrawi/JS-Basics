var pass1=document.getElementById("password");
var pass2=document.getElementById("confirmation");

function fct(){
    if (pass1.value === pass2.value){
        pass1.style.border= "green 3px solid";
        pass2.style.border= "green 3px solid";
    }
    else if (pass1.value != pass2.value) {
        pass1.style.border= "red 3px solid";
        pass2.style.border= "red 3px solid";
    }
}