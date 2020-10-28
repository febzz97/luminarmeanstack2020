class Student{
    setStudent(rol,nam,cours,tot){
        this.roll=rol;
        this.name=nam;
        this.course=cours;
        this.total=tot;
    }
    printStudent(){
        console.log("roll no ="+this.roll);
        console.log("name ="+this.name);
        console.log("course ="+this.course);
        console.log("total ="+this.total);
    }
}var obj =new Student();
obj.setStudent(3,"ajay","mca",200);
obj.printStudent();
