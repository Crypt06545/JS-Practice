// **************************************
// 📘 JavaScript Objects
// **************************************

// There are two main ways to create objects:
// 1️⃣ Singleton → using Object.create()
// 2️⃣ Object Literals → using { ... }

// Example of singleton (not used often for simple objects):
// const user = Object.create(null)

// **************************************
// 📗 Object Literals
// **************************************

// Declaring a Symbol (unique key)
const mySym = Symbol("key1");

// Creating an object
const JsUser = {
  name: "Hitesh",
  "full name": "Hitesh Choudhary", // property with space must use quotes
  [mySym]: "mykey1", // using Symbol as a key (computed property)
  age: 18,
  location: "Jaipur",
  email: "hitesh@google.com",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
};

// **************************************
// 📙 Accessing object properties
// **************************************

console.log(JsUser.email); // Dot notation → simpler
console.log(JsUser["email"]); // Bracket notation → needed when key has spaces
console.log(JsUser["full name"]); // Works only with bracket syntax
console.log(JsUser[mySym]); // Accessing Symbol key value

// **************************************
// 📘 Modifying object properties
// **************************************
JsUser.email = "hitesh@chatgpt.com"; // Update property
console.log(JsUser.email);

// 🔹 Object.freeze()
// Prevents any modification to the object
// Once frozen, no properties can be added, removed, or changed
// Object.freeze(JsUser)

JsUser.email = "hitesh@microsoft.com"; // ❌ No effect if object is frozen
console.log(JsUser.email);

// **************************************
// 📗 Adding methods to objects
// **************************************
JsUser.greeting = function () {
  console.log("Hello JS user");
};

JsUser.greetingTwo = function () {
  console.log(`Hello JS user, ${this.name}`);
  // 'this' refers to the current object (JsUser)
};

// **************************************
// 📙 Calling object methods
// **************************************
console.log(JsUser.greeting()); // Executes function, prints message
console.log(JsUser.greetingTwo()); // Accesses 'name' dynamically using 'this'

// Output:
// Hello JS user
// undefined
// (because console.log prin
// ts the return value, which is undefined)
// Hello JS user, Hitesh
// undefined

// 🧠 Tip:
// - Use `this` inside an object method to refer to properties of that same object
// - Avoid using arrow functions for methods if you need `this`,
//   because arrow functions don’t have their own `this`.
