var num=[1,2,3,4];
var inp=6;
for (num1 of num){
   
    for(num2 of num){
       var res=num1+num2;
        if(res==inp){
            console.log(inp+"sum"+num1+" "+num2);
        }
    }
}