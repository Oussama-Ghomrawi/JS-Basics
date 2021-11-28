var x = document.querySelector("#newdiv");
var y= document.querySelector("#name");

y.onkeyup = function(){
    x.innerHTML = y.value;
}