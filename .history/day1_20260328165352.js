/**
 * TOPIC: VARIABLE SCOPE & DECLARATIONS 🏗️
 * ---------------------------------
 * Understanding how JS handles memory and brackets.
 * Focus: var (Global/Function) vs let/const (Block scope).
 */

// --- 1. DATA RECAP (Quick Reference) ---
// Primitives: string, number, boolean, null, undefined, symbol, bigint (Stored by Value)
// Non-Primitives: Object, Array, Function (Stored by Reference)

let name = "Shahmeer"; 
let age = 22;


// --- 2. THE "VAR" PROBLEM (Legacy Code) ---
{
    var globalVar = "I leak out of brackets";
}
console.log(globalVar); 
// Output: "I leak out of brackets"
// Note: 'var' is functional/globally scoped. It's old and buggy—avoid using it.

globalVar = "Changed anywhere"; 
console.log(globalVar); // Dangerously easy to overwrite accidentally.


// --- 3. LET (Modern Standard) ---
{
    let blocked = "I stay inside these brackets";
}
// console.log(blocked); // Error: blocked is not defined (This is safe & clean!)


// --- 4. CONST (The Immutable Choice) ---
// Use this for values that should NEVER change (default values).
const GRAVITY = 9.8; 
const DB_URL = "mongodb://localhost:27017";

// GRAVITY = 10; // Error: Assignment to constant variable.
console.log(`Gravity is locked at: ${GRAVITY}`);


/**
 * My Progress:
 * [x] Primitive vs Reference storage
 * [x] Why 'var' is dangerous (Global Leaking)
 * [x] Block Scoping with 'let'
 * [x] Constant protection with 'const'
 */