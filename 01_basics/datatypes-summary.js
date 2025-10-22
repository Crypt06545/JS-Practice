// ===============================
// 🧠 JavaScript Data Types Overview
// ===============================

// JavaScript has two major categories of data types:
// 1️⃣ Primitive (call by value)
// 2️⃣ Reference / Non-Primitive (call by reference)

// ===============================
// 🔹 Primitive Types (7 types)
// ===============================

// These are copied *by value* — meaning, if you assign them to another variable,
// a completely new copy of the value is created.

const score = 100; // Number
const scoreValue = 100.3; // Number (no separate float type)

const isLoggedIn = false; // Boolean
const outsideTemp = null; // Null → represents empty or unknown value
let userEmail; // Undefined → declared but not assigned

// Symbol → used to create unique identifiers
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false → Symbols are always unique, even with same description

// BigInt → used for very large integers (beyond Number limit)
// const bigNumber = 3456543576654356754n;
// console.log(typeof bigNumber); // "bigint"

// ===============================
// 🔸 Reference (Non-Primitive) Types
// ===============================

// These are *call by reference* — when assigned to another variable,
// they share the same memory reference (change in one affects the other).

// Array → collection of items
const heros = ["shaktiman", "naagraj", "doga"];

// Object → key-value pairs
let myObj = {
  name: "mehadi",
  age: 22,
};

// Function → first-class citizens (can be stored in variables)
const myFunction = function () {
  console.log("Hello world");
};

// typeof operator for checking data type
console.log(typeof anotherId); // "symbol"

/*
📘 typeof Quick Reference:
----------------------------
typeof "hello"        → "string"
typeof 42             → "number"
typeof true           → "boolean"
typeof null           → ❌ "object" (historical bug)
typeof undefined      → "undefined"
typeof Symbol()       → "symbol"
typeof []             → "object"
typeof {}             → "object"
typeof function(){}   → "function"
*/

// ===============================
// Reference Link (Official Spec)
// ===============================
// https://262.ecma-international.org/5.1/#sec-11.4.3

/*
💡 Summary Notes:
------------------
1️⃣ Primitive types are immutable (values cannot be changed directly).
2️⃣ Reference types are mutable (their content can be changed).
3️⃣ typeof null → "object" is a legacy JS bug.
4️⃣ Symbols are always unique — great for creating unique object keys.
5️⃣ BigInt helps store numbers beyond 2^53 safely.
6️⃣ Primitives → stored in stack memory; References → stored in heap.
*/
