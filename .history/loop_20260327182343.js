// 🔹 Task 1 — Print 1 to 10
//  for(let i = 1; i<=10; i++){
//     console.log(i);}

// 🔹 Task 1 — Print 1 to 10
// for(let i=1;i<=20;i++){
//     i % 2 === 0 ? console.log(i) : null;}


//  🔹 Task 3 — Sum of Numbers
    // 1–5 → output: 15
// let a=0;
//     for(let i=0;i<=5;i++){
//      a += i;
//     }
//     console.log(a);
    
// Task 4 — Reverse Counting
// for(let i=10;i>=1;i--){
//    console.log(i);
// }


// Print 1–10 but skip 5

// for (let i = 1;i < 10;i++){
//    if( i === 5) continue;
//  console.log(i);  
// }

// 🔹 Task 6 🔥 — Stop Loop
// for (let i = 1;i < 10;i++){
//    if( i === 7) break;
//  console.log(i);  
// }
 

// mini challange output
// 0
// 1
// 2
// 3
// 4

// ________________________LOOP + ARRAY_______________________________

// let arr = [1,2,3,4,5];
// for(let i = 0;i<arr.length;i++){
//     console.log(arr[i])}


// let arr = [10,20,30];
// let result =arr.reduce((sum,i )=>
//     sum+i
// )
// console.log(result);


// let arr = [5, 9, 2, 11, 3];
// let result = arr.reduce((acc,i) => Math.max(acc,i));

// console.log("Max value:", result); // 11


// Count EVEN NUMBERS
// let total = 0;
// let arr = [1,2,3,4,5,6];
// let result = arr.forEach((val)=>{
//     val % 2 === 0? total += 1: null;
    
// })
// console.log(total);



// // Reverse array
// let arr = [1,2,3];
// let newArr = [];
// for(let i=arr.length-1;i>=-0;i--){
//     newArr.push(arr[i])
// }
// console.log(newArr);
// console.log(arr.reverse());


// mini challange is:
// [2,4,6]



// _________________________________Array methods practice______________________________________________________

// let nums = [2, 4, 6, 8];
// let result = nums.map(x => x*x);
// console.log(result);

// let fruits = ["apple", "banana", "cherry"];
// let result = fruits.forEach((val,i)=> console.log(`index ${i}: ${val}`));

// let arr = [5, 7, 3, 9];
// let result = arr.reduce((sum,x) => sum+x,0);
// console.log(result);

// let arr = [12, 45, 7, 23, 89];
// let result = arr.reduce((acc,val)=>{
//    if(arr<val){
//     return acc;
// }else{
//      return val}
//      0})
// console.log(result);



// let ages = [12, 18, 25, 30, 15];
// let Adult = [];
// let result = ages.filter((val)=>{
//     if(val >= 18){
//         Adult.push(val);
//         return Adult
//     }
// })
// console.log(result);



// let words = ["hi", "hello", "world", "js"];
// let arr = [];
// let result = words.filter((v)=>{
//     if(v.length > 2){
//         arr.push(v.toUpperCase());
//         return arr;
//     }
// });
// console.log(arr);

function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function done() {
  console.log("Done");
}

greet("Shahmeer", done);