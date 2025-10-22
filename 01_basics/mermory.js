// ===============================
// 🧠 Stack and Heap Memory in JavaScript
// ===============================

// JavaScript stores data in two main memory areas:
// 1️⃣ Stack (for Primitive values)
// 2️⃣ Heap (for Reference values)

// -------------------------------
// 🔹 Stack Memory (Primitive Types)
// -------------------------------
// → Stores simple, fixed-size values (Number, String, Boolean, null, undefined, Symbol, BigInt)
// → Each variable gets its own copy (Value copy)

// Example:
let myYouTubeName = "MehadiCrypto";

let anotherName = myYouTubeName; // copy of the value is created
anotherName = "CodeMaster";

console.log(myYouTubeName); // "MehadiCrypto"
console.log(anotherName); // "CodeMaster"

// ⚙️ Explanation:
// Changing 'anotherName' does not affect 'myYouTubeName' because
// primitives are stored and copied by value in stack memory.

// -------------------------------
// 🔸 Heap Memory (Reference Types)
// -------------------------------
// → Stores complex objects (Array, Object, Function)
// → Variables hold *references (pointers)* to the actual data in the heap
// → Changes through one variable affect all references

// Example:
let userOne = {
  email: "user1@gmail.com",
  upi: "user1@ybl",
};

let userTwo = userOne; // ❗ both point to the same memory reference in heap

userTwo.email = "user2@gmail.com";

console.log(userOne.email); // "user2@gmail.com"
console.log(userTwo.email); // "user2@gmail.com"

// ⚙️ Explanation:
// 'userOne' and 'userTwo' share the same memory address (heap reference).
// So, modifying 'userTwo' also changes 'userOne'.

// ===============================
// 🧩 Memory Model Summary
// ===============================

/*
Stack:
-------
- Used for Primitive data
- Stores actual value
- Fast and lightweight
- Each variable has its own copy
- Example: Number, String, Boolean

Heap:
-------
- Used for Reference data (objects, arrays, functions)
- Stores reference (pointer) to memory address
- Changes reflect across all variables that share reference
*/

// ===============================
// 🧘 Visual Mental Model
// ===============================

/*

🟢 Stack Memory (Value Copy)
----------------------------
myYouTubeName ──▶ "MehadiCrypto"
anotherName  ──▶ "CodeMaster"

They hold their own copies.

🔵 Heap Memory (Reference Link)
-------------------------------
userOne ──┐
          │
          ▼
       { email: "user2@gmail.com", upi: "user1@ybl" } ◀── userTwo

Both variables point to same object in Heap.

*/

// ===============================
// 💡 Pro Tips for Developers
// ===============================

/*
✅ Use structuredClone(), spread operator {...obj}, or JSON.parse(JSON.stringify(obj))
   if you want to make a deep copy of an object.

✅ Remember:
   - Primitive → Value copy (safe)
   - Reference → Shared memory (be careful with mutations)

✅ When debugging unexpected changes,
   always check if you're dealing with a shared reference.
*/
