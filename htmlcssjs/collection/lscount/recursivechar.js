var pattern="ABBABABC"

var obj={}
for(char of pattern){
    if(char in obj){
        console.log("first recursive character"  +char)
        break;
    }else{
        obj[char]=1
    }
}