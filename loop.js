/**
 * TOPIC: JAVASCRIPT LOOPS & ITERATION 🔄
 * ---------------------------------
 * My notes on repeating tasks and controlling code flow.
 */

// --- 1. THE BASIC FOR LOOP (Counting) ---
// Task: Print 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(`Number: ${i}`);
}

// Task: Print Even numbers 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(`Even: ${i}`);
    }
}


// --- 2. ACCUMULATION (Sum of Numbers) ---
// Task: Sum of 1 to 5 (Expected output: 15)
let totalSum = 0;
for (let i = 1; i <= 5; i++) {
    totalSum += i;
}
console.log("Total Sum (1-5):", totalSum);


// --- 3. REVERSE COUNTING ---
// Task: 10 down to 1
for (let i = 10; i >= 1; i--) {
    console.log("Counting Down:", i);
}


// --- 4. LOOP CONTROL (Skip & Stop) ---
// Task: Print 1–10 but skip 5 (Continue)
for (let i = 1; i <= 10; i++) {
    if (i === 5) continue; // Skips the rest of the code for this iteration
    console.log("Value (Skipped 5):", i);
}

// Task: Stop Loop at 7 (Break)
for (let i = 1; i <= 10; i++) {
    if (i === 7) break; // Exits the loop completely
    console.log("Value (Stopped at 7):", i);
}


// --- 5. WHILE & DO-WHILE (Condition-based) ---
let count = 1;
while (count <= 5) {
    console.log("While Loop:", count);
    count++;
}

let x = 0;
do {
    console.log("Do-While (Runs at least once):", x);
    x++;
} while (x < 0);


// --- 6. ITERATING OBJECTS & ARRAYS ---
const person = { name: "Shahmeer", role: "Developer" };
for (let key in person) {
    console.log(`${key}: ${person[key]}`); // for...in iterates over keys
}

const techStack = ["React", "Node", "MongoDB"];
for (let tech of techStack) {
    console.log("Stack Item:", tech); // for...of iterates over values
}


/**
 * My Progress:
 * [x] Standard For-loops & Counting
 * [x] Reverse iteration logic
 * [x] Break vs Continue control
 * [x] While vs Do-While difference
 * [x] For...in (Objects) vs For...of (Arrays)
 */