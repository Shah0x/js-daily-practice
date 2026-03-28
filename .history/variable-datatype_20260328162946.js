/**
 * JS CORE: VARIABLES & DATA TYPES 
 * ---------------------------------
 * JS is High-level (human-like). 
 * Main thing to remember: Primitive vs Reference memory.
 */

// --- 1. PRIMITIVES (Simple Data) ---
// string, number, boolean, undefined, null, bigint, symbol
// Logic: Stored directly in memory (Stack). Independent copies.

let myName = "Shahmeer";
let backupName = myName; 

backupName = "Pro Developer"; 

// Result: 'myName' stays "Shahmeer". Changes to 'backupName' don't touch it.


// --- 2. NON-PRIMITIVE (Reference Data) ---
// Object, Array, Function
// Logic: Stored by address (Heap). Shared memory.

let skills = ["MongoDB", "Express"];
let currentSkills = skills; // Points to the same address

currentSkills.push("React"); 

// Result: Both 'skills' and 'currentSkills' now have "React". 
// Changing one changes the other because they point to the same "box" in memory.


// --- 3. IMPORTANT "QUIRKS" ---
// Always check types when debugging
console.log(typeof null);      // returns "object" (Common JS bug)
console.log(typeof skills);    // returns "object" (Arrays are objects)

// Type Coercion (JS guessing types)
let check1 = "5" + 10;   // "510" (String concatenation)
let check2 = "10" - 5;   // 5 (Mathematical subtraction)


// My Progress:
// [x] Primitive vs Reference behavior
// [x] Memory storage (Stack vs Heap)
// [x] Type checking with 'typeof'