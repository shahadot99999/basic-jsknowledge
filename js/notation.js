// JavaScript: Dot Notation vs. Bracket Notation

// Dot Notation
// Used to access object properties directly using the property name.
// Property name must be a valid identifier (no spaces, special characters, or reserved keywords).
// Syntax: object.property


// Bracket Notation
// Used to access object properties using a string or variable.
// Allows dynamic property access and can handle property names with spaces, special characters, or reserved keywords.
// Syntax: object["property"] or object[variable]




// Easy Level
// Question: Access the name property of the person object using both dot and bracket notation.

// const person = {
//   name: "Alice",
//   age: 25
// };

// // Dot Notation
// console.log(person.name); // Output: Alice

// // Bracket Notation
// console.log(person["name"]); // Output: Alice



// Medium Level
// Question: Dynamically access the age property of the person object using a variable.

// const person = {
//   name: "Bob",
//   age: 30
// };

// const property = "age";

// // Bracket Notation with a variable
// console.log(person[property]); // Output: 30


// Hard Level
// Question: Access a property with a special character (e.g., full-name) in the person object. 
// Also, update its value dynamically.


const person = {
  "full-name": "Charlie Brown",
  age: 35
};

// Bracket Notation for special characters
console.log(person["full-name"]); // Output: Charlie Brown

// Update the property dynamically
const newName = "Lucy Smith";
person["full-name"] = newName;

console.log(person["full-name"]); // Output: Lucy Smith



// Key Differences

// Feature	        Dot Notation	        Bracket Notation
// Syntax	        object.property    	    object["property"]
// Dynamic Access	 No	                     Yes
// Special Characters	Not allowed	        Allowed
// Variables	    Cannot use variables	Can use variables
// Performance   	Slightly faster	         Slightly slower


// When to Use Which?
// Use dot notation when the property name is known and is a valid identifier.
// Use bracket notation when the property name is dynamic, contains special characters, or is stored in a variable.