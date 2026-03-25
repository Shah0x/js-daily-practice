// Tast 1
// let name = "Shahmeer";
// let age = "20";
// let isStudent = true;
// console.log(`Hello my name is ${name}`);
// console.log(`I am ${age} years old`);
// console.log(`I am ${isStudent} years old`);




// // Tast 2
// let a = "10";
// let b = 10;

// console.log(a == b) true
// console.log(a === b) false


// Task 3
// let num1 = "20";
// let num2 = 5;

// // Output:
// // 25  (using correct operator)
// console.log(num1 - false + num2);


// // Task 4
// let value = "";
// value = true ? "truthy" : "falsy";
// console.log(value); 

// Your method:
// let value = "";
// if(value = true){
//     console.log("truthy");
// }else {
//     console.log("falsy");
// }

// Task 5
console.log(false + "5"); 
console.log(true + "5"); 
The output is false5 & true5 why bcz js see plus means concatinate so they check both types it see first is boolean and sec is string they conver boolean into string and concate like "false5" & "true5"


let x = 0;
let y = "0";

// Check:
x == y
x === y