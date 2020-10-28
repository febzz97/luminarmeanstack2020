//arrowfn,map(),filter()

var names=["anu","binu","abi","ajay","anoop"];
var upper=names.map(name=>name.toUpperCase());
console.log(upper);


//FETCH NAME STARTS WITH A
var starts=names.filter(name=>name.charAt(0)=='a');
console.log(starts)

//reduce()
var arr=[1,2,3,4,5]
var tot=arr.reduce((num1,num2)=>num1+num2);
console.log(tot);

var arr=[1,2,3,4,5]
var high=arr.reduce((num1,num2)=>num1>num2?num1:num2);//terinary operator
console.log(high);

