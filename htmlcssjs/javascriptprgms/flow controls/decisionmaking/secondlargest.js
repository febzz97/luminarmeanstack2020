var num1 = 4.7;
var num2 = 4.6;
var num3 = 4.8;

if(num1>=num2 & num1>num3)
{
    if(num2>=num3){
        console.log("second largest number is"+num2);
    }
    else
    console.log("second laegest number is"+num3);
}

else if (num2>=num1 & num2>=num3){
    if(num1>=num3){
        console.log("second largest number is"+num1);
    }else
    console.log("second largest number is"+num3);
}

else if (num3>=num1 & num3>=num2){
    if (num1>num2)
    {
        console.log("seccond largest number"+num1);
    }else
    console.log("second largest number"+num2)
}else{
    console.log("numbes are equal");
}