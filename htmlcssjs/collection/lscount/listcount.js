var arr=[10,10,20,20,30,31,32]
var obj={}
for (num of arr){
    if(num in obj){
        obj[num]+=1;
    }else{
        obj[num]=1;
    }
    
}console.log(obj)