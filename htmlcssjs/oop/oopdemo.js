//class- is a design pattern ,collection of objects
//object- realworld entity
//reference- operation performed over object

class Person{
    setPerson(nam,ag){
        this.age=ag;
        this.name=nam;
    }
    getPerson(){
        console.log("name="+this.name);
        console.log("age="+this.age);
    }
} 
var obj =new Person()
obj.setPerson("ajay",25);
obj.getPerson();

var obj1=new Person()
obj1.setPerson("vijay",26);
obj1.getPerson();
