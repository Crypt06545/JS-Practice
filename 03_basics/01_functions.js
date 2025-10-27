// ⚡ JavaScript Functions — Complete Explained with Memory Notes
// =============================================================

// ✅ Function Declaration
function sayMyName() {
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

// sayMyName();
// Output: H I T E S H

// ✅ Function with Parameters & Return Value
function addTwoNumbers(number1, number2) {
  // Step 1: JS creates a new execution context for this function
  // Step 2: Local memory (stack) stores number1 and number2
  // Step 3: Return value goes back to the caller (main execution context)

  // let result = number1 + number2
  // return result

  return number1 + number2;
}

const result = addTwoNumbers(3, 5);
// console.log("Result: ", result);  // Result: 8

// ✅ Function with Default Parameter & Validation
function loginUserMessage(username = "sam") {
  // If username is not provided or falsy (null/undefined/empty)
  if (!username) {
    console.log("Please enter a username");
    return; // exit function early
  }

  // Returning a template string
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"));  // hitesh just logged in
// console.log(loginUserMessage());          // sam just logged in (default value)

// ✅ Rest Parameter (...)
// Used when we don’t know how many arguments will be passed
function calculateCartPrice(val1, val2, ...num1) {
  // val1 = 200, val2 = 400, num1 = [500, 2000]
  return num1; // returns an array
}

// console.log(calculateCartPrice(200, 400, 500, 2000));
// Output: [500, 2000]

// ✅ Passing Object to Function
const user = {
  username: "hitesh",
  price: 199,
};

function handleObject(anyobject) {
  // Accessing object properties safely
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.price}`
  );
}

// handleObject(user);
handleObject({
  username: "sam",
  price: 399,
});
// Output: Username is sam and price is 399

// ✅ Passing Array to Function
const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  // Accessing array index 1 (second value)
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray)); // 400
console.log(returnSecondValue([200, 400, 500, 1000])); // 400

// 🧠 Memory Management (How JS Handles This)
// ------------------------------------------

// 🔹 When a function is called, JS creates a new "execution context"
//   → Stored temporarily in the **Call Stack**
//   → Contains local variables and parameters

// 🔹 Primitive data (number, string, boolean, etc.) are stored in the **stack**
//    Example: let x = 5;  // Stored directly in stack

// 🔹 Non-primitive data (object, array, function) are stored in the **heap**
//    Example: const obj = {name: "hitesh"};  // Reference in stack, data in heap

// 🔹 When function execution ends → its local context (stack memory) is cleared
//    But heap memory (for objects/arrays) stays as long as references exist

// 🔹 Garbage Collector (GC)
//    - JS automatically frees unused heap memory
//    - If no variable is referencing an object → it gets collected

// ✅ Example Memory Flow:
//    1. `addTwoNumbers(3,5)` → stack frame created → executes → returns 8 → stack cleared
//    2. `user` object → lives in heap → stays until overwritten or set to null
//    3. After script ends → unused memory is released by GC

// ⚡ Summary Notes
// ----------------
// 🧩 Functions group logic and make code reusable.
// 🧠 Each function call gets its own local memory (stack).
// 🔄 Rest parameters (`...`) let you handle dynamic arguments easily.
// 📦 Objects and arrays are reference types stored in heap memory.
// 🚀 Garbage Collector cleans unused memory automatically.
