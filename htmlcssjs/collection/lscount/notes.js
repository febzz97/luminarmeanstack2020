//datas are strored as key value pairs 
var arr={roll:1001, name:"feba", cours:"mca"}
//keys are roll,name,course
//values are 1001,feba,mca
console.log(arr)
//to fecth the value we can use corresoonding keys
console.log(arr.name)
//or
console.log(arr["name"])


//to add new item to the list
arr["total"]=150;
console.log(arr)


//searching for key  in this object
console.log("gender" in arr)
console.log("cours" in arr)


//updating

arr["total"]+=25;
console.log(arr)