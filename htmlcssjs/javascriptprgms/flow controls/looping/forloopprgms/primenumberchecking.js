//check wheather the number is prime or not
var n = 10;
var i;
var flag=0;
for(i=2;i<n;i++){
    if(n%i==0){
        flag=flag+1;
        break;
        
    }else{
        flag=0;
        break;
        
    }
}
if(flag>0){
    console.log("not prime number");
}else{
    console.log(" prime number");
}

