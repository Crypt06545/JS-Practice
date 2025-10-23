// **************************************
// 📘 JavaScript Dates and Time
// **************************************

// ✅ Creating a new Date object
let myDate = new Date();

// Different ways to display date information
console.log(myDate.toString()); // Full date and time
console.log(myDate.toDateString()); // Only date (e.g. "Wed Jan 25 2023")
console.log(myDate.toLocaleString()); // Local date and time (depends on system)
console.log(typeof myDate); // "object" (Date is an object type)

// **************************************
// 📗 Creating custom Date values
// **************************************

// 🔹 Format 1: Year, Month (0-based), Day
let myCreatedDate = new Date(2023, 0, 23);
// Month starts from 0 → (0 = January, 11 = December)
console.log(myCreatedDate.toLocaleString()); // 23/1/2023, 12:00:00 am

// 🔹 Format 2: With time (hour, minute)
let myCreatedDate2 = new Date(2023, 0, 23, 5, 3);
console.log(myCreatedDate2.toLocaleString()); // 23/1/2023, 5:03:00 am

// 🔹 Format 3: Using ISO date string (YYYY-MM-DD)
let myCreatedDate3 = new Date("2023-01-14");
console.log(myCreatedDate3.toLocaleString()); // 14/1/2023, 12:00:00 am

// 🔹 Format 4: Using US date format (MM-DD-YYYY)
let myCreatedDate4 = new Date("01-14-2023");
console.log(myCreatedDate4.toLocaleString()); // 14/1/2023, 12:00:00 am

// **************************************
// 📙 Working with Time Stamps
// **************************************

// 🔹 Date.now() gives the current time in milliseconds since Jan 1, 1970
let myTimeStamp = Date.now();
console.log(myTimeStamp); // e.g. 1739999999999

// 🔹 Compare two timestamps
console.log(myCreatedDate4.getTime()); // Timestamp of that date

// 🔹 Convert milliseconds → seconds
console.log(Math.floor(Date.now() / 1000)); // Useful in APIs, JWT tokens, etc.

// **************************************
// 📒 Extracting parts of the date
// **************************************
let newDate = new Date();

console.log(newDate); // Full date and time
console.log(newDate.getMonth() + 1); // Month (1-12)
console.log(newDate.getDay()); // Day of week (0 = Sunday, 6 = Saturday)

// Template string example
// `${newDate.getDay()} and the time`

// **************************************
// 📅 Formatting Dates with toLocaleString()
newDate.toLocaleString("default", {
  weekday: "long", // Options: "long", "short", "narrow"
  year: "numeric",
  month: "long",
  day: "numeric",
});
// Example Output: "Wednesday, October 22, 2025"
