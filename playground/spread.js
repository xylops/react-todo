// function add (a,b){
//     return a + b;
// }
//
// console.log(add(3,1))
//
// var toAdd = [9,5]
//
// console.log(add(...toAdd))
//
//
// var groupA=['Jane', 'John'];
// var groupB=['Doe']
// var finial=[...groupB, 3, ...groupA];
//
// console.log(finial)

 var person = ['Ring', 27];
 var personTwo = ['Helen', 21];
 //Hi Andrew you are 25
 function greeting(name, age){
     return 'Hi ' + name + ', you are ' + age;
 }

 console.log(greeting(...person));
 console.log(greeting(...personTwo));



var names = ['Mike', 'Ben'];
var final = ['Rankine', ...names];
console.log(final);

final.forEach(function(name){
    console.log('Hi ' + name)
})
