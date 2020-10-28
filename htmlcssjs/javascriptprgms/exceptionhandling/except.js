//exception is an abnormal code
//eg   var num1=10;
//     var num2=0;
//     var res=num1/num2;
//     console.log(res)//zero division error


//exception handling
//try catch finally throw 

//try{
    //doubtfull code
//}
//catch(){
    //handling code
//}

var num1=10;
var num2=0;
try{
    if(num2==0) throw "division by zero"
    var res=num1/num2;
    console.log(res);
}
catch(err){
    console.log(err); 
}

//try doubtful code
//catch handling code
//finally cleanup code
//