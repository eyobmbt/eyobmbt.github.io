// const employee=(function(){
//     let name='';
//     let age=0;
//     let salary=0.0;

//     const getName=function(){
//         return this.name;
//     }
//     const getAge=function(){
//         return this.age;
//     }
//     const getSalary=function(){
//         return this.salary;
//     }
//     const setName=function(name){
//          this.name=name;
//     }
//     const setAge=function(age){
//          this.age=age;
//     }
//     const setSalary=function(salary){
//          this.salary=salary;
//     }
//     const increaseSalary=function(percentage){
//         this.salary=(percentage/100)*this.getSalary();
//    }
//    const increaseAge=function(){
//         this.age=this.getAge()+1;
//    }
// return{
//     setName:setName,
//     setSalary:setSalary,
//     setAge:setAge,
//     increaseSalary:increaseSalary,
//     increaseAge:increaseAge, 
// }
// })();
// employee.address='';
// employee.getAddress=function(){
//     return this.address;
// }
// employee.setAddress=function(address){
//     this.address=address;
// }

// const make_udder=function(inc){
// let count=0;
// return function (inc){
//     return count+=inc;
// }
// };

// let add5=make_udder();
// add5(5);add5(5);
// console.log(add5(5));
// let add7=make_udder();
// add7(7);add7(7);
// console.log(add7(5));

// animal has methods
// let animal = {
//     eats: true
//    };
//    let rabbit = {
//     jumps: true,
//     addkey:"eyob",
//     __proto__: animal
//    };
//    // Object.keys only return own keys
//    alert(Object.keys(rabbit)); // jumps
//    // for..in loops over both own and inherited keys
//    for(let prop in rabbit) alert(prop); // jumps, then eats
// let hamster = {
//     stomach: [],
  
//     eat(food) {
//       this.stomach.push(food);
//     }
//   };
  
//   let speedy = {
//     __proto__: hamster,
//     stomach: []
//   };
  
//   let lazy = {
//     __proto__: hamster,
//     stomach: []
//   };
  
  // Speedy one found the food
//   speedy.eat("apple");
//   speedy.eat("apple Seond");
//   alert( speedy.stomach ); // apple
  
//   // Lazy one's stomach is empty
//   alert( lazy.stomach ); // <nothing>

String.prototype.filter=function(band){
    let str=this.split(" ");
    console.log(str.length);
    let res="";
    for(let i=0;i<str.length;i++){
     str[i]!=band?res+=str[i]:res;
    res+=" ";
    }
    return res;
}
console.log("Hello World I am fine but not okay. I am not good at exam".filter("not"));