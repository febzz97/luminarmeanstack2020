class Employee{
    constructor(eid,name,desig,join,resign){
        this.eid=eid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign
    }
    getemp=()=>{
        console.log(this.eid);
        console.log(this.name);
        console.log(this.desig);
        console.log(this.join);
        console.log(this.resign);
    }
}
var obj1=new Employee(100,"ajay","devop",1981,2003);
var obj2=new Employee(101,"vijay","devop",1992,2008);
var obj3=new Employee(102,"bijoy","ba",1999,2007);
var obj4=new Employee(103,"john","ba",1989,2010);
var obj5=new Employee(105,"lari","ba",1987,2010);

var arr=[];
arr.push(obj1);
arr.push(obj2);
arr.push(obj3);
arr.push(obj4);
arr.push(obj5);


//print all employee name and deignation only

var empname=arr.map(obj=>obj.name  + " = " +obj.desig);
console.log(empname );


//print all employee details whose designation equal to devops
var empdesigs=arr.filter(obj=>obj.desig==="devop");
console.log(empdesigs);

//print all employee deatils those who are working in 80ss [*(>1980 & <1990)]

var work=arr.filter(obj=>obj.join>1980 & obj.join<1990);
console.log(work)


//print all employee deatils those who have exp greater than 9 years
var exp=arr.filter(obj=>obj.resign-obj.join>9)
console.log(exp);

//sort all employees based on their joining year
var joinso=arr.map(obj=>obj.join).sort((obj1,obj2)=>obj1-obj2)
console.log(joinso)
