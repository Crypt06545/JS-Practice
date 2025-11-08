// =============================================================
// 🚀 switch Statement in JavaScript
// =============================================================
//
// ✅ The 'switch' statement is used to perform different actions
//    based on different conditions (like multiple if-else blocks).
//
// ✅ Syntax:
// switch (key) {
//     case value1:
//         // code block
//         break;
//     case value2:
//         // code block
//         break;
//     default:
//         // code block if no case matches
//         break;
// }
//
// The 'break' statement stops further case checking once a match is found.
// If 'break' is missing, execution will continue to the next case (called "fall-through").
// =============================================================


// Example:
const month = "march";

switch (month) {
    case "jan":
        console.log("January");
        break;

    case "feb":
        console.log("February");
        break;

    case "march":
        console.log("March");
        break;

    case "april":
        console.log("April");
        break;

    default:
        console.log("Default case matched — no valid month found");
        break;
}

// =============================================================
// 🧠 How it works in memory
// =============================================================
/*
1️⃣ The 'month' variable is stored in the Stack (since it's a primitive string).
2️⃣ When the switch executes, JS compares the 'month' value with each 'case' label.
3️⃣ The comparison uses strict equality (===).
4️⃣ When a match is found, that block runs until a 'break' statement is reached.
5️⃣ If no case matches, the 'default' block executes.
*/

// =============================================================
// 🧩 Key Notes
// =============================================================
/*
🔹 Use 'switch' when you have multiple conditions for the same variable.
🔹 'break' is very important — without it, all cases below the matched one will execute.
🔹 'default' acts as the fallback case (similar to 'else').
🔹 Comparison is case-sensitive ("March" ≠ "march").
🔹 Works best when handling enums, user input options, or fixed categories.
*/

// Example output for the given code:
// 👉 "March"
