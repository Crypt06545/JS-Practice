// **************************************
// 📘 JavaScript Arrays
// **************************************

// ✅ Arrays store multiple values in a single variable
const myArr = [0, 1, 2, 3, 4, 5];
const myHeors = ["shaktiman", "naagraj"];

// Another way to declare an array using the Array constructor
const myArr2 = new Array(1, 2, 3, 4);

console.log(myArr[1]); // Access element by index → Output: 1

// **************************************
// 📗 Common Array Methods
// **************************************

// 🔹 push() → Adds element(s) at the end
myArr.push(6);
myArr.push(7);
console.log(myArr); // [0,1,2,3,4,5,6,7]

// 🔹 pop() → Removes last element
myArr.pop();
console.log(myArr); // [0,1,2,3,4,5,6]

// 🔹 unshift() → Adds element(s) at the beginning
myArr.unshift(9);
console.log(myArr); // [9,0,1,2,3,4,5,6]

// 🔹 shift() → Removes first element
myArr.shift();
console.log(myArr); // [0,1,2,3,4,5,6]

// 🔹 includes() → Checks if a value exists in array (returns true/false)
console.log(myArr.includes(9)); // false

// 🔹 indexOf() → Returns index of given element (-1 if not found)
console.log(myArr.indexOf(3)); // 3

// 🔹 join() → Converts array into string (comma separated by default)
const newArr = myArr.join();
console.log(newArr); // "0,1,2,3,4,5,6"
console.log(typeof newArr); // "string"

// **************************************
// 📙 Slice vs Splice
// **************************************
console.log("A ", myArr); // Original array → [0,1,2,3,4,5,6]

// 🔹 slice(start, end)
// Copies part of array (end not included) ✅
// Does NOT modify the original array
const myn1 = myArr.slice(1, 3);
console.log("slice result:", myn1); // [1,2]
console.log("B ", myArr); // Still same → [0,1,2,3,4,5,6]

// 🔹 splice(start, deleteCount)
// Removes or replaces elements ❌
// Changes the original array
const myn2 = myArr.splice(1, 3);
console.log("splice result:", myn2); // [1,2,3]
console.log("C ", myArr); // Modified → [0,4,5,6]

// 🧠 Summary:
// slice()  → non-destructive (copies part of array)
// splice() → destructive (removes part of array)
