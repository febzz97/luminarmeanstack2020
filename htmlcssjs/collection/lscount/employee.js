var employee={eid:1001,ename:"rahul",desig:"devops"}
console.log(employee)
console.log(employee.desig);
console.log(employee["ename"]);
console.log( "salary" in employee);
employee["salary"]=25000;
console.log(employee)
employee["salary"]+=5000;
console.log(employee)


//for taking key 1 by 1
 for(key in employee)
 {
    console.log(key)  
 }


 //for taking key and value
 for(key in employee)
 {
    console.log(key+","+employee[key])  
 }