var arr=[10,13,15,2,3,5,4,1,7];
var res=[];
var sum=0;
for(num of arr){
    if (num>5){
        sum=num+1;
       
    }else{
        sum=num-1;
      
    }res.push(sum);
}
console.log(res)