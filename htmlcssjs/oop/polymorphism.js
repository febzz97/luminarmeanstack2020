//polymorphism -> many forms
//1)method overloading
//2)method overriding
/////////////---------method overloading---/////
class Math{
    add(){
        console.log(10+20);
    }
    add(num1){
        console.log(num1+20);
    }add(num,num1){
        console.log(num+num1)
    }
}var calc=new Math();

calc.add(10,20);
//same method name but different argument but in javascript only recently implemmented method excecuted
//method overloading in class 