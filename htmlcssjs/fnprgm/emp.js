//craete class for employee eid ename desig salary

class Employe{
    constructor (eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;
    }
    getEmploye=()=>{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);

    }
}
var obj=new Employe(1001,"anu","dev",25000);
var obj1=new Employe(1002,"binu","tester",10000);
var obj2=new Employe(1003,"cinu","dev",30000);

var emp=[];
emp.push(obj);
emp.push(obj1);
emp.push(obj2);


//print highest salary employee information
var high=emp.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(high)
//print lowest salary employee information
var low=emp.map(obj=>obj.salary).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2)
console.log(low)

//print employee salary in sorted order
var so=emp.map(obj=>obj.salary).sort((obj1,obj2)=>obj1-obj2)
console.log(so)
