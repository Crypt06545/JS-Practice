// =============================================================
// 🚀 Immediately Invoked Function Expressions (IIFE)
// =============================================================

// 🔹 Definition:
// IIFE means a function that executes immediately after it is defined.
// You don’t have to call it separately.

// 🔸 Syntax:
// (function() { ... })()
// ---------------------------
//  (function expression)()
//  ↑ The parentheses make it an expression, not a statement.

// =============================================================
// 🔹 Example 1: Named IIFE
// =============================================================

(function chai() {
  // named IIFE → has its own name 'chai'
  console.log(`DB CONNECTED`);
})();
// Output: DB CONNECTED

// =============================================================
// 🔹 Example 2: Anonymous / Arrow IIFE
// =============================================================

((name) => {
  console.log(`DB CONNECTED TWO ${name}`);
})("hitesh");
// Output: DB CONNECTED TWO hitesh

// =============================================================
// 🧠 Why Use IIFE?
// =============================================================
/*
✅ 1. To avoid polluting the global scope:
   - Variables inside an IIFE are private and cannot be accessed outside.

✅ 2. To execute code immediately:
   - Useful for initialization, configuration, or setup logic.

✅ 3. To create isolated scopes:
   - Before ES6 (let/const), IIFEs were used to create new scopes.
*/

// =============================================================
// 🔹 Example 3: Multiple IIFEs
// =============================================================

(function one() {
  console.log("ONE");
})();

(() => {
  console.log("TWO");
})();

// 🔸 Always separate multiple IIFEs with a semicolon (;)
//    Otherwise, JS might think the second one is a continuation of the first.

// =============================================================
// 🔹 Example 4: IIFE with return value
// =============================================================

const result = (() => {
  const secret = "🗝️ Hidden variable";
  return `Access Granted: ${secret}`;
})();

console.log(result);
// Output: Access Granted: 🗝️ Hidden variable

// =============================================================
// 🧩 MEMORY & EXECUTION FLOW
// =============================================================
/*
1️⃣ When the JS engine encounters an IIFE:
    - It allocates memory for the function.
    - Immediately executes it.
    - Then destroys its local scope (unless you store the return value).

2️⃣ Variables inside an IIFE are private:
    - They exist only during function execution.
    - This makes IIFEs perfect for protecting data or config setup.
*/

// =============================================================
// 🧠 Quick Summary
// =============================================================
/*
🔹 IIFE = Immediately Invoked Function Expression
🔹 Syntax: (function(){})() or (() => {})()
🔹 Executes immediately after definition
🔹 Prevents global scope pollution
🔹 Can be named or anonymous
🔹 Must end with a semicolon if multiple IIFEs exist
🔹 Common use cases:
    - Initialization logic
    - Configuration setup
    - Creating private scopes
*/
