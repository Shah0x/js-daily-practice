/**
 * TOPIC: ARRAY MASTERY 🧪
 * ---------------------------------
 * My notes on data manipulation, transformation, and searching.
 */

// --- 1. THE BASICS & ITERATION ---
let arr = [1, 3, 2, 5, 4, 6, 7, 9, 10];

// for...of (Best for simple value iteration)
for (let num of arr) {
    console.log("Value:", num);
}

// for...in (Best for Object keys, but can show indices in arrays)
const obj = { name: "Shahmeer", role: "Dev" };
for (let key in obj) {
    console.log(`${key}: ${obj[key]}`);
}


// --- 2. TRANSFORMATION (Map & Filter) ---

// map() -> Returns a NEW array with modified values
const doubled = arr.map(x => x * 2); 

// filter() -> Returns a NEW array with elements that pass a test
const evens = arr.filter(x => x % 2 === 0);
const adults = [12, 18, 25, 30, 15].filter(age => age >= 18);


// --- 3. ACCUMULATION (Reduce) ---

// reduce() -> Boils down an array to a single value (sum, max, etc.)
const totalSum = arr.reduce((acc, val) => acc + val, 0);

const maxVal = [5, 9, 2, 11, 3].reduce((max, val) => Math.max(max, val));
console.log("Max found:", maxVal); // 11


// --- 4. SEARCHING & CHECKING ---

// find() -> Returns the FIRST element that matches
const firstLarge = arr.find(x => x > 5); // 6

// some() & every() -> Return Booleans
const hasNegative = arr.some(x => x < 0); // false (at least one)
const allPositive = arr.every(x => x > 0); // true (all must pass)


// --- 5. REVERSING ---
let original = [1, 2, 3];

// Option A: Manual reversal (Good for logic practice)
let reversedManual = [];
for (let i = original.length - 1; i >= 0; i--) {
    reversedManual.push(original[i]);
}

// Option B: Built-in (Changes the original array)
// original.reverse();


/**
 * Progress Tracker:
 * [x] Iteration (for...of, for...in)
 * [x] Transformation (Map, Filter)
 * [x] Accumulation (Reduce)
 * [x] Search Methods (Find, Some, Every)
 * [x] Array Reversal Logic
 */