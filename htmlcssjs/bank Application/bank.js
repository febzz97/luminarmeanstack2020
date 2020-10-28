class Bank{
    static getAccountDetails(){
        let data={
            test1:{username:"test1",password:"abc",balance:5000,acno:1001},
            feba:{username:"feba",password:"testone",balance:50000,acno:1002},
            test2:{username:"test2",password:"testone",balance:6000,acno:1003},
            test3:{username:"test3",password:"testone",balance:7000,acno:1004}
        }
        return data;
    }
static login(){
    
    let usname=document.querySelector("#uname").Value;
    let pwd=document.querySelector("#pwd").Value;
    //check username is present in data
    let data=Bank.getAccountDetails()
    if(usname in data ){
       let password=data[usname]["password"];
       if(pwd==password){
        swal("login success!", "You provided correct data data", "success")
        setTimeout(()=>window.location.href="userhome.html",5000);
    }else{
        swal("login failed!", "You provided incorrect data", "success")
       }
    } 
}




}