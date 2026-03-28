// Js is a Hight-level Language Easy, human-like

// Types:

// String
// Number
// Boolean
// Undefined
// Null
// Object
// Array

// JavaScript has 2 categories:

// Primitive (Simple Data)

//  Stored directly in memory
//  Independent copy

// Types:
// string
// number
// boolean
// undefined
// null
// bigint
// symbol

// Non-Primitive (Reference Data)

//  Stored by reference (address)
//  Shared memory

// Types:
// Object
// Array
// Function

let name = "Shahmeer";    // let is changable & block scope
let age = 22;

console.log(name, age);

{
    var a = 10;
}
console.log(a);         // Output is 10  var is old, buggy, not recommand to use its not respect bracket.
                        //  and its globally access dangerous

a = 20;                 // see this line i change the var val outside bracket and 
console.log(a);         // output is 20

const gravity = 9.8;       // const is locked | like default | block scope & its use to not change values,
                           //  like gravity by-defauly 9.8 
console.log(gravity);      // we no reassign its value 


