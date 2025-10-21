// ===============================
// Variable Declaration and Scope
// ===============================

// 'const' => value cannot be changed after initialization (immutable)
const accountId = 144553;

// 'let' => block scoped variable, can be reassigned later
let accountEmail = "mehaid@google.com";

// 'var' => function scoped, avoid using due to hoisting and scope issues
var accountPassword = "12345";

// JS allows undeclared assignment (not recommended) → becomes a global variable
accountCity = "bd";

// declared but not initialized → value = undefined
let accountState;

// ===============================
// Trying to reassign const will cause an error
// ===============================
// accountId = 2; // ❌ Not allowed → TypeError

// ===============================
// Updating mutable variables
// ===============================
accountEmail = "me@ha.com";
accountPassword = "21212121";
accountCity = "dhaka";

// ===============================
// Output Section
// ===============================

// console.log() → prints single value or string to console
console.log(accountId); // shows 144553

/*
 Prefer not to use 'var'
 because it doesn't respect block scope.
 Example: inside if or for block, 'var' leaks outside.
 Always use 'let' or 'const' instead.
*/

// ===============================
// Display multiple values in a table format
// ===============================

// console.table() → prints array or object in tabular view for better readability
console.table([
  accountId,
  accountEmail,
  accountPassword,
  accountCity,
  accountState,
]);

/*
📘 Quick Notes:
-----------------
1️⃣ const → Use for fixed values that never change.
2️⃣ let   → Use for reassignable values, block scoped.
3️⃣ var   → Avoid (old JS feature, not safe for modern code).
4️⃣ console.table() → Great for debugging multiple values.
5️⃣ Always declare variables (no implicit globals like 'accountCity = ...').
*/
