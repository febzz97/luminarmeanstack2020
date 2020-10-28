class Employee{
    constructor(eid,ename,desig,sal){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.sal=sal;
    }
    getEmp =()=>{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.sal);
    }
}
var obj1=new Employee(1001,"ajay","developer",25000);
var obj2=new Employee(1002,"vinu","manager",30000)
var obj3=new Employee(1003,"anu","developer",20000)
 
var emp=[];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);

//print employee having salary 20000
 for (e of emp){
     if(e.sal>22000){
         console.log(e.ename + e.sal);
     }

 }

 //print employee destination =developer
 for(e of emp){
     if (e.desig==="developer"){
         console.log(e.ename + e.desig)
     }
 }