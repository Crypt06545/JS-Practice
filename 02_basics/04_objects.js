// 🔥 JavaScript Objects Complete Notes & Examples
// ===============================================

// 👉 Object creation
// You can create an object in two ways:

// 1️⃣ Using the Object constructor (singleton)
const tinderUser1 = new Object(); // less common

// 2️⃣ Using object literal (non-singleton)
const tinderUser = {}; // most common way

// Adding properties to the object
tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);
// Output: { id: '123abc', name: 'Sammy', isLoggedIn: false }

// 👉 Nested Objects
const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userfullname: {
      firstname: "hitesh",
      lastname: "choudhary",
    },
  },
};

// Accessing nested properties
// console.log(regularUser.fullname.userfullname.firstname);
// Output: hitesh

// 👉 Merging multiple objects

const obj1 = { 1: "a", 2: "b" };
const obj2 = { 3: "a", 4: "b" };
const obj4 = { 5: "a", 6: "b" };

// ❌ Wrong: creates nested objects instead of merging
// const obj3 = { obj1, obj2 };

// ✅ Correct Way 1: Using Object.assign()
// The first parameter {} ensures merging into a new object
// const obj3 = Object.assign({}, obj1, obj2, obj4);

// ✅ Correct Way 2: Using Spread Operator (modern way)
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);
// Output: { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// 👉 Array of Objects (common in databases, APIs, etc.)
const users = [
  { id: 1, email: "h@gmail.com" },
  { id: 2, email: "h2@gmail.com" },
  { id: 3, email: "h3@gmail.com" },
];

// Accessing specific property
users[1].email; // "h2@gmail.com"

// 👉 Object Utility Methods

// console.log(Object.keys(tinderUser));
// Output: [ 'id', 'name', 'isLoggedIn' ]

// console.log(Object.values(tinderUser));
// Output: [ '123abc', 'Sammy', false ]

// console.log(Object.entries(tinderUser));
// Output: [ ['id', '123abc'], ['name', 'Sammy'], ['isLoggedIn', false] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// Output: true

// 👉 Object Destructuring
// Used to extract specific properties easily
const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

// Traditional way
// console.log(course.courseInstructor);

// Modern way with destructuring
const { courseInstructor: instructor } = course;
console.log(instructor); // Output: hitesh

// 👉 JSON-like Structure Example
// Often used in APIs, databases, or external files
// Note: JSON uses double quotes (" ") for keys and values

/*
{
    "name": "hitesh",
    "coursename": "js in hindi",
    "price": "free"
}
*/

// 👉 Array of Empty Objects Example (used as placeholders)
/*
[
    {},
    {},
    {}
]
*/

// ✅ Summary Notes:
// ----------------
// 🧩 Objects store data as key-value pairs.
// 🔗 Nested objects help structure complex data.
// 🧠 Object.assign() or spread syntax {...obj} merges multiple objects.
// 📦 Object.keys(), Object.values(), and Object.entries() are used to inspect objects.
// 🧰 hasOwnProperty() checks if a property exists directly in the object.
// ✂️ Destructuring makes code cleaner and more readable.
// 🧾 JSON looks similar to JS objects but uses double quotes for keys and values.
