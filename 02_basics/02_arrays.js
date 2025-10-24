// **************************************
// 📘 Array Combination & Utility Methods
// **************************************

// ✅ Basic arrays
const marvel_heros = ["thor", "Ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];

// **************************************
// 📗 push() with array
// **************************************
// If we push one array into another, it becomes a nested array
marvel_heros.push(dc_heros);
console.log(marvel_heros);
// Output: [ 'thor', 'Ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

// Accessing inner array element
console.log(marvel_heros[3][1]); // "flash"

// **************************************
// 📙 concat() → Combines two arrays
// **************************************
const allHeros = marvel_heros.concat(dc_heros);
console.log(allHeros);
// Output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// concat() returns a **new array** and does NOT modify existing ones

// **************************************
// 📘 Spread Operator (...) → modern way to merge arrays
// **************************************
const all_new_heros = [...marvel_heros, ...dc_heros];
console.log(all_new_heros);
// Output: [ 'thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread is preferred because it’s cleaner and supports multiple merges

// **************************************
// 📗 Flattening nested arrays
// **************************************
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

// flat(depth)
// - Flattens nested arrays
// - depth = Infinity → completely flattens all levels
const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);
// Output: [1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

// **************************************
// 📙 Array utility methods
// **************************************

// 🔹 Array.isArray() → checks if the given value is an array
console.log(Array.isArray("Hitesh")); // false

// 🔹 Array.from() → converts array-like or iterable objects into an array
console.log(Array.from("Hitesh")); // ['H', 'i', 't', 'e', 's', 'h']

// ⚠️ If you pass an object without a length property, returns an empty array
console.log(Array.from({ name: "hitesh" })); // []

// **************************************
// 📘 Array.of()
// Creates array from a list of arguments (regardless of type)
let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
// Output: [100, 200, 300]

// 🔸 Difference between Array.of() and Array():
// Array.of(7) → [7]
// Array(7) → creates empty array of length 7
