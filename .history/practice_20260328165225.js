/**
 * practice
 */

// --- 1. EVEN OR ODD ---
let num = 2;
let type = (num % 2 === 0) ? "EVEN" : "ODD";
console.log(`Number ${num} is: ${type}`);


// --- 2. AUTHENTICATION LOGIC (Login System) ---
let email = "shahmeerx002@gmail.com";
let password = "12345";

const isAuth = (email === "shahmeer@gmail.com" && password === "12345");
console.log(isAuth ? "Login Successful ✅" : "Invalid Credentials ❌");


// --- 3. GRADING SYSTEM ---
let score = 75;

if (score >= 90) {
    console.log("Grade: A+");
} else if (score >= 70) {
    console.log("Grade: A");
} else if (score >= 50) {
    console.log("Grade: B");
} else {
    console.log("Status: Fail");
}


// --- 4. FINDING THE MAXIMUM (Nested Ternary) ---
let a = 10, b = 20, c = 30;

// Logic: If a is bigger than b and c, it's a. Otherwise check b vs c.
let biggest = (a > b && a > c) ? a : (b > c ? b : c);
console.log("Biggest Number is:", biggest);


// --- 5. ACCESS CONTROL ---
let age = 10;
let hasID = false;

if (age >= 18 && hasID) {
    console.log("Access: Allowed");
} else if (age >= 18 && !hasID) {
    console.log("Access: ID Required");
} else {
    console.log("Access: Underage");
}


// --- 6. LOOP CONTROL ---
// Stop before reaching 9
for (let i = 0; i < 10; i++) {
    if (i === 9) break;
    console.log("Iteration:", i);
}

/**
 * Progress Tracker:
 * [x] Ternary Operators for simple checks
 * [x] Complex If/Else for grading/access
 * [x] Logical AND/NOT (&&, !)
 * [x] Break statements in Loops
 */