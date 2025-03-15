// 1. Truthy and Falsy Values
// Truthy: Values that evaluate to true in a boolean context.
// Falsy: Values that evaluate to false in a boolean context.

// Falsy Values:
// false
// 0
// "" (empty string)
// null
// undefined
// NaN

// Truthy Values:
// Everything else is truthy, including:
// "0" (string with zero)
// "false" (string with false)
// [] (empty array)
// {} (empty object)
// function() {} (empty function)

//Example (Easy):
// let value = "Hello";
// if (value) {
//     console.log("Truthy!"); // This will run
// } else {
//     console.log("Falsy!");
// }

//Example (Medium):
// let value = 0;
// if (value) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!"); // This will run
// }

//Example (Hard):
// let value = NaN;
// if (value) {
//     console.log("Truthy!");
// } else {
//     console.log("Falsy!"); // This will run
// }


// 2. Ternary Operator
// A shorthand for if-else statements.

// Syntax: condition ? exprIfTrue : exprIfFalse
// Example (Easy):
// let age = 18;
// let canVote = age >= 18 ? "Yes" : "No";
// console.log(canVote); // Output: "Yes"


//Example (Medium):
// let isRaining = true;
// let activity = isRaining ? "Stay inside" : "Go outside";
// console.log(activity); // Output: "Stay inside"


//Example (Hard):
// let score = 85;
// let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
// console.log(grade); // Output: "B"

// 3. Shortcut AND (&&) and OR (||)
// AND (&&): Returns the first falsy value or the last value if all are truthy.
// OR (||): Returns the first truthy value or the last value if all are falsy.

//Example (Easy):
// let a = true;
// let b = false;
// console.log(a && b); // Output: false
// console.log(a || b); // Output: true

//Example (Medium):
// let name = "";
// let defaultName = "Guest";
// let displayName = name || defaultName;
// console.log(displayName); // Output: "Guest"

//Example (Hard):
// let user = { name: "John", age: 25 };
// let userName = user && user.name || "Anonymous";
// console.log(userName); // Output: "John"

//4. Advanced Example: Combining Concepts
// let user = { name: "Alice", age: 22, isAdmin: false };
// // Check if user is an admin, if not, check if they are an adult
// let message = user.isAdmin ? "Welcome Admin" : user.age >= 18 ? "Welcome Adult" : "Access Denied";
// console.log(message); // Output: "Welcome Adult"



// Summary
// Truthy/Falsy: Understand which values are considered true or false in boolean contexts.
// Ternary Operator: A concise way to write if-else statements.
// Shortcut AND/OR: Useful for conditional assignments and checks.