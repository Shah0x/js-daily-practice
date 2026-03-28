/**
* TOPIC: JAVASCRIPT OPERATORS 
 * ---------------------------------
 * My notes on how to manipulate variables and build logic.
 * Focus: Clean code and "Strict" comparisons.
 */

// --- 1. ARITHMETIC (The Basic Math) ---
let a = 10;
let b = 3;

console.log(a + b);  // 13 (Addition)
console.log(a - b);  // 7  (Subtraction)
console.log(a * b);  // 30 (Multiplication)
console.log(a / b);  // 3.33 (Division)
console.log(a % b);  // 1  (Remainder - Perfect for checking Even/Odd)
console.log(a ** 2); // 100 (Exponentiation: 10 to the power of 2)


// --- 2. ASSIGNMENT (Shorthand) ---
let score = 10;
score += 5; // Result: 15 (Same as score = score + 5)
score *= 2; // Result: 30 (Same as score = score * 2)


// --- 3. COMPARISON (Strict vs Loose) ---
// Note: Always use === to avoid bugs. == is risky.
let num = 10;
let strNum = "10";

console.log(num == strNum);  // true  (Loose: JS ignores the type)
console.log(num === strNum); // false (Strict: Checks Value AND Type)
console.log(num !== 20);     // true  (Not Equal)


// --- 4. LOGICAL OPERATORS (AND, OR, NOT) ---
let isUser = true;
let hasPaid = false;

// && (AND): Both must be true
console.log(isUser && hasPaid); // false

// || (OR): At least one must be true
console.log(isUser || hasPaid); // true

// ! (NOT): Flips the boolean
console.log(!isUser); // false


// --- 5. THE "MODERN" MOVES (Used in React/MERN) ---

// Short-circuiting (&&): If the first is true, it returns the second.
let name = "Shahmeer";
console.log(name && "User is active"); // "User is active"

// Nullish Coalescing (??): Safe fallback for null/undefined only.
let dbData = null;
let result = dbData ?? "No Data Found"; 
console.log(result); // "No Data Found"


/**
 * My Progress Tracker:
 * [x] Arithmetic & Exponents
 * [x] Comparison (=== vs ==)
 * [x] Logical Operators (&&, ||, !)
 * [x] Nullish Coalescing (??)
 * [x] Assignment Shorthands (+=, *=)
 */