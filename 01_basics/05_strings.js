// ===============================
// String Basics & Template Literals
// ===============================

const name = "hitesh";
const repoCount = 50;

// Traditional concatenation (old way)
// console.log(name + repoCount + " Value"); // hitesh50 Value

// ✅ Modern & cleaner way → Template Literals (ES6 feature)
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);
// Output: Hello my name is hitesh and my repo count is 50

// ===============================
// String Object & Properties
// ===============================
const gameName = new String("hitesh-hc-com");

// Accessing characters
// console.log(gameName[0]); // 'h'
// console.log(gameName.__proto__); // shows string prototype (object with methods)

// Common string properties and methods
// console.log(gameName.length); // 13
// console.log(gameName.toUpperCase()); // "HITESH-HC-COM"

// charAt() → returns character at given index
console.log(gameName.charAt(2)); // 't'

// indexOf() → returns index of first occurrence of character
console.log(gameName.indexOf("t")); // 2

// ===============================
// substring() & slice()
// ===============================

// substring(start, end) → extracts string from start to (end-1)
const newString = gameName.substring(0, 4);
console.log(newString); // "hite"

// slice(start, end) → similar to substring but supports negative indexes
const anotherString = gameName.slice(-8, 4);
console.log(anotherString); // "" → no overlap because -8 to 4 range invalid

// ===============================
// trim() → removes leading and trailing spaces
// ===============================
const newStringOne = "   hitesh    ";
console.log(newStringOne); // "   hitesh    "
console.log(newStringOne.trim()); // "hitesh"

// ===============================
// replace() & includes()
// ===============================

const url = "https://hitesh.com/hitesh%20choudhary";

// replace(old, new) → replaces first match
console.log(url.replace("%20", "-"));
// Output: "https://hitesh.com/hitesh-choudhary"

// includes() → returns true/false if substring exists
console.log(url.includes("sundar")); // false

// ===============================
// split() → converts string into array
// ===============================
console.log(gameName.split("-"));
// Output: [ 'hitesh', 'hc', 'com' ]

/*
📘 Quick Notes for Revision:
------------------------------
1️⃣ Template Literals → `${variable}` syntax, very clean and readable.
2️⃣ String object → gives access to many helper methods.
3️⃣ substring() → ignores negative index.
4️⃣ slice() → supports negative index (good for reverse slicing).
5️⃣ trim() → removes spaces at both ends (useful for user inputs).
6️⃣ replace() → replaces part of string (use regex for multiple).
7️⃣ includes() → boolean check if substring exists.
8️⃣ split() → separates string into array by a given delimiter.
*/

// ===============================
// ✅ Bonus Tip:
// ===============================
// Use template literals for dynamic HTML or logging:
// console.log(`User: ${name.toUpperCase()} | Repos: ${repoCount}`);
