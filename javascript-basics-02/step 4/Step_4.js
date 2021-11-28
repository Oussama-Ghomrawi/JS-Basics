var a=document.querySelector('#name');
var b=document.querySelector('#surname');
var c=document.querySelector('#city');
function fct1(){
    var answer=window.confirm("Do you wish to reset the fields?");
    if (answer === true) {
        a.value="";
        b.value="";
        c.value="";
    }
}