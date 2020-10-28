// //procedure binsrch(low,upp,mid,arr,element)

// //step1:array should be sorted
// var arr=[1,2,3,4,5,6,7,11];

// //step2: low <-0,upp <-8
// var low=0;
// var upp=(arr.length)-1;

// //step3:calculate mid . mid=(low+upp)/2
// //var mid=Math.floor((low+upp)/2);

// //3 caeses are there
// //case 1
// //element>arr[mid]


// //case2
// //element>arr[mid] 

// //case3
//element=arr[mid]


var arr = [1, 2, 3, 4, 5, 6, 7, 11];
var low = 0;
var element = 16;
var flag=0;
var upp = arr.length - 1;
while (low < upp) {
     mid = Math.floor((low + upp) / 2);
    if (element > arr[mid]) {
        low = mid + 1;
    } else if (element < arr[mid]) {
        upp = mid - 1;
    } else if (element == arr[mid]) {
        flag+=1;
        break;
    }


}if(flag>0){
    console.log("element found");
}else{
    console.log("element not found");
}