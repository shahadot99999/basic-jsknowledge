//1. Template Strings
//What it is: Template strings allow you to embed expressions inside strings using backticks (`) and ${}.
 //Use case: Easily concatenate variables and strings without using +.

 //Easy:
const name = "Alice";
//console.log(`Hello, ${name}!`); // Output: Hello, Alice!

//Medium:
const a = 5;
const b = 10;
//console.log(`The sum of ${a} and ${b} is ${a + b}.`); // Output: The sum of 5 and 10 is 15.

//Hard:
const user = { name: "Bob", age: 30 };
//console.log(`User Info: Name - ${user.name}, Age - ${user.age}`); // Output: User Info: Name - Bob, Age - 30


   //2. Arrow Functions
     //What it is: A shorter syntax for writing functions using =>.

     //Use case: Concise functions, especially for callbacks and anonymous functions.

//Examples:
//Easy:
const greet = () => "Hello!";
//console.log(greet()); // Output: Hello!

//Medium:
const add = (a, b) => a + b;
//console.log(add(2, 3)); // Output: 5


//Hard:
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num);
//console.log(squared); // Output: [1, 4, 9, 16]


     //3. Spread Operator
      //What it is: The spread operator (...) allows you to expand elements of an array or object.

     //Use case: Copying arrays/objects, merging arrays/objects, or passing multiple arguments.

//Examples:
//Easy:
const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];
console.log(arr2); // Output: [1, 2, 3, 4, 5]

//Medium:
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };
console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

//Hard:
const sum = (a, b, c) => a + b + c;
const numbers1 = [1, 2, 3];
console.log(sum(...numbers1)); // Output: 6


//Summary:
//Template Strings: Use backticks and ${} for dynamic strings.
//Arrow Functions: Use => for concise functions.
//Spread Operator: Use ... to expand arrays or objects.