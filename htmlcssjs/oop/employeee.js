class Employee{
    setEmployee(eid,ename){
        this.eid=eid;
        this.ename=ename;
    }
    getEmployee(){
        console.log("eid="+this.eid);
        console.log("ename="+this.ename);
    }
}var emp=new Employee
emp.setEmployee(1001,"ajay");
emp.getEmployee();


