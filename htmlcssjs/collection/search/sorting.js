var arr=[10,2,4,11];

for(var i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if (arr[i]>arr[j]){
            var temp=arr[i];
            arr[i]=arr[j];
            arr[j]=temp;
        }
    


    }
}console.log(arr)


// ascending order Sort
// var arr=arr.sort((i,j)=>i-j)//i comes before j
// console.log(arr)

// descending order Sort
// var arr=arr.sort((i,j)=>j-i)//j comes before i
// console.log(arr)