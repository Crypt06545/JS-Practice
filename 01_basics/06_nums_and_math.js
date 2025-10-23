// // **************************************
// // 📘 Numbers and Math in JavaScript
// // **************************************

// // ✅ Basic Number usage
// const score = 400;
// console.log(score); // Output: 400 (simple number)

// // ✅ Using Number object
// const balance = new Number(100);
// console.log(balance); // Output: [Number: 100]

// // 🔹 toString() converts number to string
// console.log(balance.toString().length); // "100" => length = 3

// // 🔹 toFixed(n) fixes decimal places (used in currency formatting)
// console.log(balance.toFixed(1)); // "100.0"

// // ---------------------------------------
// // 🔹 toPrecision(n)
// // Used to set total number of significant digits
// const otherNumber = 123.8966;
// console.log(otherNumber.toPrecision(4)); // "123.9"

// // ---------------------------------------
// // 🔹 toLocaleString()
// // Adds commas based on locale (formatting numbers)
// const hundreds = 1000000;
// console.log(hundreds.toLocaleString("en-IN")); // "10,00,000" (Indian format)
// console.log(hundreds.toLocaleString("en-US")); // "1,000,000" (US format)

// // **************************************
// // 📗 Math Object (Built-in global object)
// // **************************************

// console.log(Math); // Shows all available Math methods

// // 🔹 abs() → converts negative to positive
// console.log(Math.abs(-4)); // 4

// // 🔹 round() → normal rounding (4.5 → 5, 4.4 → 4)
// console.log(Math.round(4.6)); // 5

// // 🔹 ceil() → always round up
// console.log(Math.ceil(4.2)); // 5

// // 🔹 floor() → always round down
// console.log(Math.floor(4.9)); // 4

// // 🔹 min() and max()
// console.log(Math.min(4, 3, 6, 8)); // 3
// console.log(Math.max(4, 3, 6, 8)); // 8

// // **************************************
// // 📙 Random Numbers
// // **************************************

// // Math.random() gives a random number between 0 and 1 (like 0.12345)
// console.log(Math.random());

// // Multiply by 10 to get between 0 - 10
// console.log(Math.random() * 10 + 1); // Always +1 to avoid 0

// // Use floor() to get integer values
// console.log(Math.floor(Math.random() * 10) + 1);

// // ---------------------------------------
// // 📏 Random number between a range (min → max)
// const min = 10;
// const max = 20;

// // Formula:
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);
// // Explanation:
// // 1️⃣ (max - min + 1) → defines range size
// // 2️⃣ Math.random() * range → random float within that range
// // 3️⃣ Math.floor() → converts to integer
// // 4️⃣ + min → shifts start point to 'min'

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
