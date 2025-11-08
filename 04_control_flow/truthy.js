// =============================================================
// 🚀 Truthy & Falsy Values, Nullish Coalescing, and Ternary Operator
// =============================================================

// ✅ Example 1: Checking if userEmail exists
const userEmail = [];

if (userEmail) {
  console.log("Got user email");
} else {
  console.log("Don't have user email");
}

// =============================================================
// 🧠 Falsy Values in JavaScript
// =============================================================
// These values are treated as 'false' in condition checks:
//
// false
// 0
// -0
// 0n  (BigInt zero)
// ""  (empty string)
// null
// undefined
// NaN
//
// Anything else is considered Truthy.

// =============================================================
// 🧩 Truthy Values Examples
// =============================================================
// "0", "false", " ", [], {}, function(){}
//
// Even empty arrays [] and empty objects {} are TRUTHY!

// =============================================================
// ✅ Example 2: Checking if an array is empty
// =============================================================

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

// =============================================================
// ✅ Example 3: Checking if an object is empty
// =============================================================

const emptyObj = {};

if (Object.keys(emptyObj).length === 0) {
  console.log("Object is empty");
}

// Object.keys(emptyObj) returns an array of property names.
// If length === 0 → object has no keys → empty object.

// =============================================================
// ⚙️ Nullish Coalescing Operator (??)
// =============================================================
//
// The Nullish Coalescing Operator is used to handle cases where a value
// might be null or undefined. It provides a fallback value.
//
// Syntax:
//    let value = a ?? b
//    → if 'a' is null or undefined, use 'b'
//    → otherwise, use 'a'
// =============================================================

let val1;

// val1 = 5 ?? 10         // Output: 5 (since 5 is not null/undefined)
// val1 = null ?? 10      // Output: 10 (since left side is null)
// val1 = undefined ?? 15 // Output: 15
val1 = null ?? 10 ?? 20; // Output: 10 (first non-null/undefined value)

console.log(val1);

// =============================================================
// 🎯 Ternary Operator
// =============================================================
//
// Used for short one-line conditional statements
//
// Syntax:
// condition ? expressionIfTrue : expressionIfFalse
// =============================================================

const iceTeaPrice = 100;

iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80");

// =============================================================
// 🧠 MEMORY NOTES
// =============================================================
//
// 🟢 Primitives like numbers, strings, and booleans are stored in Stack.
// 🟣 Objects, arrays, and functions are stored in Heap memory (reference type).
//
// During evaluation:
// - 'if' conditions check truthy/falsy conversions in Stack memory.
// - Object and Array references are stored in Heap; their truthiness depends
//   on whether a reference exists, not on their contents.
// =============================================================

// ✅ OUTPUT:
// Got user email
// Object is empty
// 10
// more than 80
