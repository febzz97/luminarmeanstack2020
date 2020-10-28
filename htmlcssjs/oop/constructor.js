//check file employeee.js
//duty of setEmployee() is initilizing instance variable
//constructor()
//className
//duty of constructors is to initilize instance variable
//constructor name always constructor
//constructor will invoked at the time of object creation

class Employee{
    constructor(eid,ename){
          this.eid=eid;
          this.ename=ename;
      }
      getEmployee(){
          console.log("eid="+this.eid);
          console.log("ename="+this.ename);
      }
  }var emp=new Employee(100,"ajay")
  
  emp.getEmployee();
  