//have to create bank application
//with following functionality createAccount(),deposit(),withdraw();balancenq();
class Bank{
    static bankname="sbi";
    
    CreateAccount(nam,acno,bal,b_nam){
    this.personAccount=nam;
    this.accountno=acno;
    this.balance=bal;
    //this.bankname=b_nam;
    }
deposit(amt){
    this.balance+=amt;
    console.log("balance"+Bank.bankname +"account credited with"+amt +"your balance="+this.balance)
}
withdraw(amtt){
    if(amtt>this.balance){
        console.log("inscifient balance in your account")
    }
    else{
        this.balance-=amtt;
        console.log("balance"+Bank.bankname +"withdraw amt"+amtt +"your balance="+this.balance)
}
}balanceEnq(){
    console.log("your balance="+this.balance)
}
}
var obj=new Bank()
    obj.CreateAccount("ajay",123,2000,"sbi")
    obj.withdraw(500);
    obj.deposit(10000);
    obj.balanceEnq()
    console.log("name="+obj.personAccount)

//different types of variables
//local variable (nam,acno,bal,b_nam)
//instance variable are always prepent with this key word (personAccount,accountno,bankname,balance)
// we can access instance variable by using this key word inside class
//outside class we can acess by using refrence name

//different types of methods
//1)instance method
//2)static method