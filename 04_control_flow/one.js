// =============================================================
// 🚀 IF Statements and Logical Conditions in JavaScript
// =============================================================

// 🔹 Basic if condition
const isUserloggedIn = true;
const temperature = 41;

// The 'if' statement executes a block of code if the condition is true.
if (temperature === 40) {
  console.log("Temperature is 40°C");
} else {
  console.log("Temperature is not 40°C");
}
console.log("Program Executed");

// =============================================================
// 🔹 Comparison Operators
// =============================================================
//
// <   → Less than
// >   → Greater than
// <=  → Less than or equal to
// >=  → Greater than or equal to
// ==  → Equal to (checks only value, not type)
// === → Strict equal (checks value + type)
// !=  → Not equal (value only)
// !== → Strict not equal (value + type)
// =============================================================

// =============================================================
// 🔹 Example: Variable Scope inside if-block
// =============================================================

const score = 200;

if (score > 100) {
  let power = "fly"; // 'let' has block scope
  console.log(`User power: ${power}`);
}
// console.log(`User power: ${power}`); ❌ Error → 'power' is not defined here

// =============================================================
// 🔹 Single Line if Statement
// =============================================================

const balance = 1000;

// ✅ You can use a single line if statement (not recommended for long code)
if (balance > 500)
  console.log("Balance is greater than 500"), console.log("Extra check passed");

// =============================================================
// 🔹 if...else if...else Chain
// =============================================================

if (balance < 500) {
  console.log("Less than 500");
} else if (balance < 750) {
  console.log("Less than 750");
} else if (balance < 900) {
  console.log("Less than 900");
} else {
  console.log("Less than 1200");
}

// =============================================================
// 🔹 Logical Operators
// =============================================================
//
// &&  → Logical AND   → All conditions must be true
// ||  → Logical OR    → At least one condition must be true
// =============================================================

const userLoggedIn = true;
const debitCard = true;
const loggedInFromGoogle = false;
const loggedInFromEmail = true;

// AND (&&): executes only if all conditions are true
if (userLoggedIn && debitCard && 2 == 3) {
  console.log("Allow to buy course");
} else {
  console.log("Not allowed to buy course");
}

// OR (||): executes if at least one condition is true
if (loggedInFromGoogle || loggedInFromEmail) {
  console.log("User logged in successfully");
}

// =============================================================
// 🧠 Memory and Execution Concept
// =============================================================
/*
1️⃣ The JS engine stores all variables in memory (Heap for objects, Stack for primitives).
2️⃣ When 'if' executes:
    - It evaluates the condition in the Call Stack.
    - If true, executes its block.
    - If false, skips that block.
3️⃣ Variables declared inside 'if' using 'let' or 'const' live only inside that block.
   (They are garbage collected after the block finishes.)
*/

// =============================================================
// 🧩 Quick Summary
// =============================================================
/*
🔹 'if' executes code only if a condition is true.
🔹 'else' runs when the condition is false.
🔹 'else if' checks multiple conditions in sequence.
🔹 Use '===' for strict comparison (value + type).
🔹 Use '&&' for multiple true conditions.
🔹 Use '||' to check if at least one condition is true.
🔹 Variables inside if-blocks with let/const are block-scoped.
*/
