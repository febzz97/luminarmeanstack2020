var arr=[2,3,1,5,4]
var sarr=arr.sort((num1,num2)=>num1-num2)
console.log(sarr)
var low=0
var upp=sarr.length-1;
var element=4;
while(low<upp){
    var res=sarr[low]+sarr[upp]
    if(res==element){
        console.log(sarr[low],sarr[upp])
        break;
    }else{
        low+=1;
    }
}