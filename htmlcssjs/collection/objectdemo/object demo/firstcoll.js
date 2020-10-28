var names=["mumbai","delhi","punjab"]
//there is no  size limit
//elements can be accesed using index of array
console.log(names[0]);
console.log(names[1]);
console.log(names[2]);
//for adding new object to array we can use push(object)

names.push("csk");
console.log(names);
console.log(names[3]);
//for removing a object from array we can use pop(object)
names.pop();
console.log(names);


names.push(1500) //we can store diffrent types of objects
console.log(names);
 

var numbers=[ 10,11,12,13,14,15]
console.log(numbers);
for (data of numbers)
{
    console.log(data);
}