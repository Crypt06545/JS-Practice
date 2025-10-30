// ================================================================
// 🧠 JavaScript Functions, Arrow Functions, and 'this' Keyword Notes
// ================================================================

const user = {
  username: "hitesh",
  price: 999,

  // 🔹 Regular function inside object (method)
  welcomeMessage: function () {
    console.log(`${this.username}, welcome to website`);
    console.log(this); // refers to the current object 'user'
  },
};

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// ------------------------------------------------------------
// 🔹 Understanding 'this' in different contexts
// ------------------------------------------------------------

// console.log(this);
// 👉 In Node.js (global scope) => {}
// 👉 In browser => 'window' object

// 🔹 In regular function (non-arrow)
function chai() {
  let username = "hitesh";
  console.log(this.username);
  // ❌ undefined → because 'this' doesn’t refer to local variables
  // In non-arrow functions, 'this' depends on how the function is called.
}

// chai();

// 🔹 Function expression (same behavior)
const chai2 = function () {
  let username = "hitesh";
  console.log(this.username); // ❌ undefined
};
// chai2();

// 🔹 Arrow Function — special behavior
const chai = () => {
  let username = "hitesh";
  console.log(this);
  // ✅ In arrow functions, 'this' doesn’t create its own context.
  // It takes 'this' from the surrounding (lexical) scope.
};

// chai();

// ------------------------------------------------------------
// 🔹 Arrow Function Syntax Variations
// ------------------------------------------------------------

// 1️⃣ Normal syntax with return keyword
const addTwo1 = (num1, num2) => {
  return num1 + num2;
};

// 2️⃣ Implicit return (no 'return' keyword)
const addTwo2 = (num1, num2) => num1 + num2;

// 3️⃣ Parentheses version for implicit return
const addTwo3 = (num1, num2) => num1 + num2;

// 4️⃣ Returning an object (use parentheses!)
const addTwo = (num1, num2) => ({ username: "hitesh" });

console.log(addTwo(3, 4));
// ✅ Output: { username: "hitesh" }

// ------------------------------------------------------------
// 🔹 Array iteration example (forEach with arrow function)
// ------------------------------------------------------------

// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach((num) => console.log(num * 2));

// ------------------------------------------------------------
// 🧩 Important Concept Summary
// ------------------------------------------------------------

/*
🔸 1. 'this' keyword:
    - Inside an object method → refers to that object
    - Inside a regular function → refers to the global object (or undefined in strict mode)
    - Inside an arrow function → does NOT have its own 'this'; uses lexical scope

🔸 2. Arrow Functions:
    - Compact syntax
    - No 'this', no 'arguments', no 'prototype'
    - Useful for callbacks or one-liners

🔸 3. Returning Objects:
    - Must wrap object literals in parentheses → ({ key: value })

🔸 4. Best Practice:
    - Use regular functions when you need your own 'this'
    - Use arrow functions for callbacks, small computations, or functional code
*/

// ------------------------------------------------------------
// 🧠 Memory & Execution Notes
// ------------------------------------------------------------
/*
🔹 When an arrow function is defined, it doesn't create a new execution context for 'this'.
   Instead, it uses 'this' from its parent scope.
🔹 Regular functions, however, get their own 'this' depending on how they’re invoked.
🔹 Each function call still creates its own local execution context (memory + code).
🔹 Once finished, that context is popped off the call stack (memory cleared).
*/
