var arr=[1,2,3,4,5,6,7,8,9]
// var element=prompt("enter the element for searching")
// alert(element)
var element=11;
var flag=0;
for(data of arr){
    if (element==data)
    {   flag+=1;
        break;
       
    }
        
    
}if(flag>0){ 
console.log(" found");
}else{
    console.log(" not found");

}