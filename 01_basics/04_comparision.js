// ===============================
// Comparison Operators in JS
// ===============================

// >  → greater than
// >= → greater than or equal to
// <  → less than
// == → equality (checks value only)
// != → not equal
// === → strict equality (checks both value & type)

// Basic numeric comparisons
// console.log(2 > 1);   // true
// console.log(2 >= 1);  // true
// console.log(2 < 1);   // false
// console.log(2 == 1);  // false
// console.log(2 != 1);  // true

// ===============================
// Type Coercion in Comparisons
// ===============================

// When comparing a string with a number,
// JS automatically converts string → number (type coercion)
console.log("2" > 1); // true  → "2" becomes 2
console.log("02" > 1); // true  → "02" becomes 2

// ===============================
// Comparisons with null
// ===============================
console.log(null > 0); // false
console.log(null == 0); // false
console.log(null >= 0); // true 😵

// ⚠️ Why?
// In JS, comparison (>, <, >=, <=) converts null to a number → 0.
// But equality (==) does NOT do numeric conversion.
// So:
// null > 0  → 0 > 0 → false
// null == 0 → false (special rule, null only equals undefined or itself)
// null >= 0 → 0 >= 0 → true

// ===============================
// Comparisons with undefined
// ===============================
console.log(undefined == 0); // false
console.log(undefined > 0); // false
console.log(undefined < 0); // false

// ⚠️ Explanation:
// undefined is not converted to number in == comparison.
// For relational comparisons (> < >= <=), undefined becomes NaN.
// Any comparison with NaN → always false.

// ===============================
// Strict Equality (===)
// ===============================
console.log("2" === 2); // false

/*
==  → checks value after type conversion (loose equality)
=== → checks both value & data type (strict equality)
Example:
"2" == 2  → true   (because "2" → 2)
"2" === 2 → false  (because string !== number)
*/

// ===============================
// 💡 Quick Notes for Revisi
