//map(),filter(),reduce()



//array square
var arr=[1,2,3,4,5]
var op=[];
var sum=0;
for(num of arr){
    sum=num*num;
    op.push(sum)
}console.log(op);


//map()-no of input equal to no of output then use map
//filter()-no of input is less than output then we can use filter
 

var arr=[1,2,3,4,5]
function square(num){
    return num*num;
}
var squares=arr.map(square);
console.log(squares)


var arr=[1,2,3,4,5]
a=num => num*num;
var squares=arr.map(a);
console.log(squares)


var arr=[1,2,3,4,5]
var squares=arr.map(num => num*num);
console.log(squares)