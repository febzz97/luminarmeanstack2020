var ar=[5,3,4]
var sum=0;
for (item of ar){
    sum=sum+item;
}
var op=[]
var element;
for(item of ar){
    element=sum-item;
    op.push(element);
}console.log(op)