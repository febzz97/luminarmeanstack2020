//create student class (rolno,name,total,course)

class Student {
    constructor(rolno, name, total, course) {
        this.rolno = rolno;
        this.name = name;
        this.total = total;
        this.course = course;
    }

    getStudent = () => {
        console.log(this.rolno);
        console.log(this.name);
        console.log(this.total);
        console.log(this.course);

    }
}
var obj1 = new Student(1, "anu", 85, "bca");
var obj2 = new Student(2, "binu", 140, "mca");
var obj3 = new Student(3, "cinu", 150, "mca");
var obj4 = new Student(4, "amal", 88, "bca");

//print all students name & id those who have total >135
var stud=[];
stud.push(obj1);
stud.push(obj2);
stud.push(obj3);
stud.push(obj4);

// for (s of stud){
//     if(s.total>135){
//         console.log(s.name  +  s.rolno)
//     }
// }

//print all student name those course were bca

// for(s of stud){
//     if(s.course==="bca"){
//         console.log(s.name);
//     }
// }
// //print all student total sum with course = bca
// var sum=0;
// for(s of stud){
//     if(s.course==="bca"){
//         sum+=s.total
//     }console.log(sum);
// }

//print all students name & id those who have total >135
var fn=stud.filter(obj=>obj.total>135)
    for(item of fn){
              console.log(item.name)
    }
 //print all student name those course were bca
 var cfilter=stud.filter(obj=>obj.course=="bca")
 for(item of cfilter){
     console.log(item.name)
 }
 console.log(cfilter);
//print all students course ==bca and there total sum
 var total=cfilter.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
 console.log(total)
//print name of the student with highest total
 var high=stud.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2);
 console.log(high)

 var highest=stud.filter(obj=>obj.total==high)
for(item of highest){
    console.log(item.name)
}
 var srtstud=stud.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2)
console.log(srtstud)
