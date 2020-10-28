//least possible missing number after 0
var array=[2,-1,0,1,-3,-4,9,11]
var large=0,missing=1
for (number of array)
{
    if (number>large)
 
    {
        large=number
    }for(i=1;i<=large;i++){
        for(number of array){
            if(number==i & missing>=i){
                missing=i+1;
            }
        }
    }
}console.log("least positive missing number"+missing)