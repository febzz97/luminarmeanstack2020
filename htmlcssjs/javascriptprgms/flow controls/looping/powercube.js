var number = 123; 


var rev = 0;

while(number!=0)
{
    var digit=number%10;
    rev=rev+(digit*digit*digit);

    number =Math.floor(number/10);
    

}
console.log(rev)





