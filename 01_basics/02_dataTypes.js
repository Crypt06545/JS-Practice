// ===============================
// Strict Mode & Basic Syntax
// ===============================

// "use strict" → enables strict mode in JS
// It makes JS more secure, prevents using undeclared variables, and enforces better coding practices.
"use strict"; // treat all JS code as newer (ES6+) version

// ===============================
// Execution Context
// ===============================

// alert(3 + 3); // ❌ 'alert' works only in browser, not in Node.js environment

console.log(3 + 3); // ✅ prints 6 to the console
// Always keep your code clean and readable — avoid writing multiple statements on one line

console.log("Mehadi"); // prints a string value

// ===============================
// Variable Declaration
// ===============================

// Declare variables with meaningful names
let name = "mehadi"; // string type
let age = 18; // number type
let isLoggedIn = false; // boolean type
let state; // declared but not assigned → value = undefined

// ===============================
// Primitive Data Types (7 types)
// ===============================

// 1️⃣ Number   → integer or floating point (2^53 limit for precision)
// 2️⃣ BigInt   → for very large integers
// 3️⃣ String   → sequence of characters, written inside " " or ' '
// 4️⃣ Boolean  → true / false
// 5️⃣ Null     → intentional empty value (standalone)
// 6️⃣ Undefined → variable declared but not initialized
// 7️⃣ Symbol   → unique identifier (used mostly in advanced JS, like React keys)

// Non-primitive (Reference) Type → Object, Array, Function, etc.

// ===============================
// Type Checking
// ===============================

console.log(typeof undefined); // ➡️ "undefined" (data type of undefined)
console.log(typeof null); // ⚠️ "object" → known JS bug since the beginning

/*
📘 Quick Notes:
-----------------
1️⃣ "use strict" helps catch silent errors → always use it.
2️⃣ typeof → operator to check data type of any variable/value.
3️⃣ null is actually an object (historical bug in JS).
4️⃣ undefined means variable is declared but not assigned.
5️⃣ Always write code in a readable and consistent format.
6️⃣ JS is dynamically typed → variable types can change at runtime.
*/
