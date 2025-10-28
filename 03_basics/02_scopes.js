// ⚡ JavaScript Scope Explained (Block, Function, Lexical, and Hoisting)
// ======================================================================

// 🔹 Scope মানে হচ্ছে — কোন ভ্যারিয়েবল কোথা থেকে অ্যাক্সেস করা যাবে

// var c = 300   // 'var' has function/global scope (NOT block-scoped)
let a = 300; // 'let' has block scope

if (true) {
  let a = 10; // new variable (block-scoped)
  const b = 20; // block-scoped
  // console.log("INNER:", a); // Output: 10
}

// console.log(a); // Output: 300 (outer scope variable)
// console.log(b); // ❌ ReferenceError: b is not defined (block-scoped)
// console.log(c); // 300 (if var c was used)

// ============================================================
// 🔹 Function Scope and Lexical Scope
// ============================================================

function one() {
  const username = "hitesh";

  function two() {
    const website = "youtube";
    console.log(username); // ✅ Accesses variable from parent function (lexical scope)
  }

  // console.log(website); ❌ Error: website not defined
  two();
}

one();
// Output: hitesh

// ============================================================
// 🔹 Nested if blocks (block scope example)
// ============================================================

if (true) {
  const username = "hitesh";
  if (username === "hitesh") {
    const website = " youtube";
    console.log(username + website); // ✅ Works
  }
  // console.log(website); ❌ Not accessible here
}
// console.log(username); ❌ Not accessible outside

// ============================================================
// 🔹 Function Hoisting
// ============================================================

console.log(addone(5)); // ✅ Works because function declarations are hoisted

function addone(num) {
  return num + 1;
}

// ⚠️ Important: Function Expression (Not Hoisted)
addTwo(5); // ❌ Error: Cannot access 'addTwo' before initialization

const addTwo = function (num) {
  return num + 2;
};

// ============================================================
// 🧠 MEMORY + EXECUTION CONTEXT + HOISTING EXPLAINED
// ============================================================

/*
1️⃣ **Compilation Phase**
   - JS scans all code before execution.
   - Function declarations are fully hoisted (moved to top).
   - Variable declarations (var/let/const) are hoisted but not initialized.

2️⃣ **Execution Phase**
   - JS runs line-by-line.
   - When function is called → new Execution Context created.

🔸 Example:
   console.log(addone(5)) ✅ Works
   Because during compilation → `addone` already known in memory.

   console.log(addTwo(5)) ❌ Error
   Because `addTwo` is a variable (const), only declared not initialized yet.

3️⃣ **Scope Chain (Lexical Scope)**
   - Inner functions can access variables of outer functions.
   - Outer cannot access inner ones.
   - This is called *lexical scoping*.

4️⃣ **Block Scope**
   - let and const → limited to { }
   - var → ignored block scope (only function/global)

5️⃣ **Memory Clean-up**
   - After each function finishes → its local memory is destroyed.
   - But if an inner function still references outer variables →
     those stay alive in memory (Closure concept).
*/

// ✅ Summary Notes:
// --------------------------------------
// 🔹 let, const → block scoped
// 🔹 var → function/global scoped
// 🔹 Inner functions can access outer variables (lexical scope)
// 🔹 Function declarations are hoisted
// 🔹 Function expressions are NOT hoisted
// 🔹 Each function call creates its own execution context
// 🔹 Memory is cleared after execution (unless closures exist)
