// function c(val)
// {
// document.getElementById("d").value=val;
// }
// function v(val)
// {
// document.getElementById("d").value+=val;
// }
// function e() 
// { 
// try 
// { 
//   c(eval(document.getElementById("d").value)) 
// } 
// catch(e) 
// {
//   c('Error') 
// } 
// }  

var d=document.querySelector("#d");
function display(num){
    d.value+=num
}
clrscr=()=>{
    d.value=""
}

ev=()=>{
let data=eval(d.value);
d.value=data;
}