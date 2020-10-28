
//addEventListener()accepts two argsuments
//1=> event 2=>function

// function clck(){
//     one.textContent="am.clicked";
//     one.style.color="red";
// }
// one.addEventListener("click",clck)

var one=document.querySelector("#one")
one.addEventListener("click",()=>{
    one.textContent="am.clicked";
    one.style.color="red";
})
var two=document.querySelector("#two")
two.addEventListener("dblclick",()=>{
    two.textContent="double clicked";
    two.style.color="green";
})

var three=document.querySelector("#three")
three.addEventListener("mouseover",()=>{
    three.style.color="blue";
    three.textContent="mouse curently over me";
})
three=document.querySelector("#three")
three.addEventListener("mouseout",()=>{
    three.style.color="black";
    three.textContent="mouse curently not over me";
})