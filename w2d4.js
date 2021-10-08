String.prototype.filter=function(banned){
    let str=this.split(" ");
    let res="";
    for(let i=0;i<str.length;i++){
     str[i]!=banned?res+=str[i]+" ":res;
    }
    return res;
}
console.log("This house is not nice!".filter("not"));

Array.prototype.bubleSort=function(){
    
    for(let i=0;i<this.length;i++){
        for(let j=0;j<this.length-1;j++){
            if(this[j]>this[j+1]){
                let temp=this[j];
                this[j]=this[j+1];
                this[j+1]=temp;
            }
        }
    }
    return this;
}
console.log([-2,3,4,-3,0,3].bubleSort());

var Person=function(){};
Person.prototype.initialize=function(name,age){
    this.name=name;
    this.age=age;
}
Person.prototype.describe=function(){
    return "Name: "+this.name+" Age: "+this.age+" years old.";
}
var Teacher=function(){};

Teacher.prototype=new Person();

Teacher.prototype.teaches=function(subject){
    console.log(this.name+" teaches "+subject);
}
var teacher=new Teacher();
teacher.initialize("Professor Michael",30);
teacher.teaches("WAP");