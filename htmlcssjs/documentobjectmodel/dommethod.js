var hom=document.getElementsByTagName("h1");
for(ho of hom){
    ho.style.color="green"
}
var f=document.getElementById("first")
f.style.color="red";

var classn=document.getElementsByClassName("two")
for(cls of classn){
    cls.style.color="blue"
}

var qu=document.querySelectorAll("li")
//var let const in es6

for(let it of qu){
    it.style.color="yellow";
}
 var ones=document.querySelector("#one")
 ones.style.color="green";
 

var clslist=document.querySelectorAll(".lis")
for(let ls of clslist){
    ls.style.color="cyan"
}

var hone=document.querySelector("#first")
var data=hone.textContent;
alert(data)

//hone.textContent="helloworld"
//textContent is used to take html content