
//sum of array
var sum=0;
var arr=[10,11,12,13,14,15,16]
for(data of arr){
    sum=sum+data

}console.log(sum);

//even numbers of array

var sum=0;
var odd=[];
var even=[];
var arr=[10,11,12,13,14,15,16]
for(data of arr){
   if(data%2==0){
        even.push(data);
       
   }
   else {
      odd.push(data);
       
  }

}console.log(even);
console.log(odd);

