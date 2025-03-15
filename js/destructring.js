//Destructuring is a syntax in JavaScript that
//  allows you to unpack values from arrays or properties from objects into distinct variables.

//1. Array Destructuring
//Extracts values from arrays into variables.

//Order matters in array destructuring.



//Syntax: const [var1, var2, ...rest] = array;
//Example (Easy):
// const numbers = [1, 2, 3];
// const [a, b, c] = numbers;
// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 3


//Example (Medium):
// const numbers1 = [1, 2, 3, 4, 5];
// const [first, , third, ...rest] = numbers1;
// console.log(first); // 1
// console.log(third); // 3
// console.log(rest); // [4, 5]


//Example (Hard):
// const nestedArray = [1, [2, 3], 4];
// const [x, [y, z], w] = nestedArray;
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // 3
// console.log(w); // 4


  // Object Destructuring
     //Extracts properties from objects into variables.
     //Property names must match.

     //Syntax: const { prop1, prop2, ...rest } = object;

//Example (Easy):
// const person = { name: 'John', age: 30 };
// const { name, age } = person;
// console.log(name); // John
// console.log(age); // 30


// //Example (Medium):
// const person1 = { name1: 'John', age: 30, city: 'New York' };
// const { name1, ...rest1 } = person1;

// console.log(name1); // John
// console.log(rest1); // { age: 30, city: 'New York' }


// //Example (Hard):
// const user = {
//   id: 1,
//   info: {
//     name2: 'Alice',
//     address: {
//       city: 'London',
//       country: 'UK'
//     }
//   }
// };

// const { id, info: { name2, address: { city } } } = user;
// console.log(id); // 1
// console.log(name2); // Alice
// console.log(city); // London


//3. Default Values You can provide default values in case the value is undefined.

// const numbers = [1];
// const [a = 10, b = 20] = numbers;

// console.log(a); // 1 (takes from array)
// console.log(b); // 20 (default value)

// //Example with Objects:

// const person = { name: 'John' };
// const { name, age = 25 } = person;

// console.log(name); // John
// console.log(age); // 25 (default value)


//4. Renaming Variables You can rename variables while destructuring.

//Example:
// const person = { name: 'John', age: 30 };
// const { name: fullName, age: years } = person;

// console.log(fullName); // John
// console.log(years); // 30


// 5. Swapping Variables
// Destructuring can be used to swap variables easily.

//Example:
let a = 1, b = 2;
[a, b] = [b, a];

console.log(a); // 2
console.log(b); // 1




// Summary
// Array Destructuring: Order matters, use [].

// Object Destructuring: Property names must match, use {}.

// Default Values: Provide fallback values.

// Renaming: Use prop: newName syntax.

// Swapping: Swap variables easily with destructuring.
