
const add=function(a,b){
    return a+b;
}
const subtract=function(a,b){
    return a-b;
}
const multiply=function(a,b){
    return a*b;
}
const divide=function(a,b){
    if(b!=0){
        return a/b;
    } else{
        return "Division Zero not possible!";
    }
    
}
const pi=3.14;

module.exports={add,subtract,multiply,divide,pi};