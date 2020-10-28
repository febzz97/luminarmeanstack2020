var arr=[1,2,3,4,5,6,7,8];
function even(num){
    return num%2==0;
}
var evens=arr.filter(even)
console.log(evens)





var arr=[1,2,3,4,5,6,7,8];

var evens=arr.filter(num=>num%2==0)
console.log(evens)