// ===============================
// Type Conversion (Casting) in JS
// ===============================

let score = "mehadi"; // string

// typeof → check the type of a variable
// console.log(typeof score); // "string"
// console.log(typeof(score)); // same as above

// Number() → convert value to number
let valueInNumber = Number(score);
// console.log(typeof valueInNumber); // "number"
// console.log(valueInNumber); // NaN because "mehadi" is not numeric

/*
Examples:
"33"      => 33
"33abc"   => NaN (Not a Number)
true      => 1
false     => 0
*/

// Boolean conversion
let isLoggedIn = "mehadi";
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn); // true

/*
Boolean conversion rules:
1 => true, 0 => false
"" => false, non-empty string => true
*/

// String conversion
let someNumber = 33;
let stringNumber = String(someNumber);
// console.log(stringNumber); // "33"
// console.log(typeof stringNumber); // "string"

// ===============================
// Unary Operators & Arithmetic
// ===============================
let value = 3;
let negValue = -value; // negates the number → -3
// console.log(negValue);

// Basic arithmetic operators
// + , - , * , / , ** (exponent), % (modulus)
console.log(2 + 2); // 4
console.log(2 - 2); // 0
console.log(2 * 2); // 4
console.log(2 ** 3); // 8 → 2 power 3
console.log(2 / 3); // 0.666666...
console.log(2 % 3); // 2 → remainder

// String concatenation
let str1 = "hello";
let str2 = " mehadi";
let str3 = str1 + str2; // "hello mehadi"
// console.log(str3);

// Type coercion in JS (automatic conversion)
console.log("1" + 2);      // "12" → string concatenation
console.log(1 + "2");      // "12"
console.log("1" + 2 + 2);  // "122"
console.log(1 + 2 + "2");  // "32" → 1+2=3, then + "2" → "32"

// Arithmetic with precedence
console.log((3 + 4) * 5 % 3); // 2 → parentheses > * > %

// Unary plus operator → converts to number
console.log(+true); // 1
console.log(+"");   // 0

// ===============================
// Chained Assignment
// ===============================
let num1, num2, num3;
num1 = num2 = num3 = 2 + 2; // all = 4

// ===============================
// Increment Operator
// ===============================
let gameCounter = 100;
++gameCounter; // pre-increment → increases first, then returns value
console.log(gameCounter); // 101

// ===============================
// Useful Link for Type Conversion
// ===============================
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion
