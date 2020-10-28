class Parent{
    m1(){
        console.log("inside parent");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside child");
    }
} 
class SubChild extends Child{
    m3(){
        console.log("inside sub child");
    }
} 
var sb=new SubChild();
sb.m3();
sb.m2();
sb.m1();
