var num1=10;
var num2=10.5;
var num3="hello";
var bol=true;
console.log(typeof(num1));
console.log(typeof(num2));
console.log(typeof(num3));
console.log(typeof(bol));
//datatypes number,string,boolean ,undefined,object


var num1=10;
var num2="10";
if( num1== num2)//== is used for content matching
{
    console.log("number are equal");
}else
{
    console.log("number not equal");
}

var num1=10;
var num2="10";
if( num1=== num2)//=== type of is used for checking the datatype
{
    console.log("number are equal");
}else
{
    console.log("number not equal");
}

var num1=10;
var num2="10";
if((typeof num1)==(typeof num2) ){//type of is used for checking the datatype
    console.log("number are equal");
}else
{
    console.log("number not equal");
}