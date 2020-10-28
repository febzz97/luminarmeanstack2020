class Student{
    static get collegeName(){
        var clgname="luminar";
        return clgname;
    }
    static PrintCollegeName(){
        var clgname="luminar";
        console.log(clgname);
    }
    setStudent(rol,name){
        this.rol=rol;
        this.name=name;
    }
    getStudent(){
        console.log("rol=="+this.rol);
        console.log("name="+this.name);
        Student.PrintCollegeName();//static  methods can be accessecd through class name inside class
    }
}
class MyClass extends Student{};
var obj = new MyClass();
 obj.setStudent(1,"ajay");
 obj.getStudent()
 console.log(MyClass.collegeName)//static method accessed outside the class