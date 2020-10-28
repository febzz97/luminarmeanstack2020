var ar=[4,8,2]
var total=0;
for(item of ar){
    total+=item;
}
var element;
var op=[]
for(item of ar){
element=total-item;
op.push(element)
}console.log(op)