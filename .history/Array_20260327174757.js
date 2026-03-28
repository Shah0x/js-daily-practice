// Question: Print all elements of an array 
// Way 01
let arr = [1,3,2,5,4,6,7,9,10];
// for(let i = 0;i<=arr.length;i++){       for loop
//     console.log(arr[i]);}

// let i = 0;
// while (i <= arr.length){
//     console.log(arr[i]);                while loop [while condition is true its run]
//     i++;
// }

// let i = 0;
// do {
//     console.log(arr[i]);               Run once at least then check the condition
//     i++
// } while (i <= arr.length);

// const obj = {a: 1, b:2};
// for (let i in obj){               for in iterates over object keys.
//     console.log(i, obj[i]);
// }


// for (let i of arr){
//     console.log(i);       iterates over values (array,strings)
// }

// ___________________________________________________________________________________________________

// Array METHODS:
// let result = arr.map(x => x * 2);      MAP() Transforms array, return new array.
// console.log(result);

// let result = arr.filter(x => x % 2 === 0);
// console.log(result);                 Filter()  Returns array with elements passing test.

// let result = arr.reduce((sum,x)=> sum+x,0);
// console.log(result);                 reduces() array to single value

// arr.forEach(x => console.log(x + 1)); Execute callback for each element

// let result  =arr.find(x => x>2);      Return first element passing test 
// console.log(result)

// let result = arr.some(x => x > 10);        //True if any element passes test     
// console.log(result);

// let result = arr.every(x => x > 0);         // True if all elements pass test
// console.log(result);