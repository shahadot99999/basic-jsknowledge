// 37-1 Six JavaScript Fundamentals that you must know
// a.how to declare a variable using let and const
// b. basic conditions 6:>,<, ===, !==, <=, >=
// multiple conditon: &&, ||
// c.array declare...index, length, push
// d. loop for,while
// e. function
// f. object


//a. How to declare a variable using let and const
//Description: let is used for variables that can be reassigned, 
// while const is used for variables that cannot be reassigned.

//Easy: Declare a variable and log it.
let name = "Alice";
//console.log(name); // Alice

//Medium: Reassign a let variable and try to reassign a const variable (will throw an error).
let age = 25;
//age = 26; // Works
const PI = 3.14;
//PI = 3.15; // Error

//Hard: Use let and const in a block scope.
if (true) {
    let blockScoped = "I'm inside a block";
    const alsoBlockScoped = "Me too!";
  }
  //console.log(blockScoped); // Error: blockScoped is not defined


   //b. Basic conditions (>, <, ===, !==, <=, >=) and multiple conditions (&&, ||)
   //Description: Conditions are used to compare values and make decisions.

   //Easy: Check if a number is greater than 10.
let num = 15;
if (num > 10) {
    //console.log("Greater than 10");
}

//Medium: Use multiple conditions with && and ||.
let age1 = 20;
if (age1 >= 18 && age1 <= 30) {
 // console.log("You're eligible!");
}

//Hard: Nested conditions and complex logic.
// let score = 85;
// if (score >= 90) {
//   console.log("A");
// } else if (score >= 80 && score < 90) {
//   console.log("B");
// } else {
//   console.log("C");
// }

      //c. Array: Declare, index, length, push
      //Description: Arrays store multiple values in a single variable.

 // Easy: Declare an array and access its elements.
let fruits = ["apple", "banana"];
//console.log(fruits[0]); // apple

//Medium: Add an element to the array using push.
fruits.push("orange");
//console.log(fruits); // ["apple", "banana", "orange"]

//Hard: Manipulate arrays with loops and conditions.
let numbers = [1, 2, 3, 4, 5];
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    //console.log(numbers[i]); // 2, 4
  }
}



   //d. Loop: for, while
   //Description: Loops repeat a block of code until a condition is met.

   //Easy: Print numbers from 1 to 5 using a for loop.
for (let i = 1; i <= 5; i++) {
  //console.log(i);
}


  //Medium: Use a while loop to print numbers.
let i = 1;
while (i <= 5) {
  //console.log(i);
  i++;
}


   //Hard: Nested loops for complex patterns.
for (let i = 1; i <= 3; i++) {
  for (let j = 1; j <= 3; j++) {
   // console.log(`i: ${i}, j: ${j}`);
  }
}


    //e. Function
     //Description: Functions are reusable blocks of code.

     //Easy: Create a function to add two numbers.
function add(a, b) {
  return a + b;
}
//console.log(add(2, 3)); // 5

//Medium: Use default parameters.
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
//console.log(greet()); // Hello, Guest!

//Hard: Use arrow functions and higher-order functions.
const multiply = (a, b) => a * b;
//console.log(multiply(2, 3)); // 6

const numbers1 = [1, 2, 3];
const doubled = numbers1.map(num => num * 2);
//console.log(doubled); // [2, 4, 6]



     //f. Object
     //Description: Objects store key-value pairs.

     //Easy: Create an object and access its properties.
     let person = { name: "Alice", age: 25 };
     console.log(person.name); // Alice
     
     
     //Medium: Add a method to the object.
     person.greet = function() {
       return `Hello, my name is ${this.name}`;
     };
     console.log(person.greet()); // Hello, my name is Alice
    
    
     // Hard: Nested objects and dynamic property access.
     let car = {
       brand: "Toyota",
       details: {
         color: "red",
         year: 2020
       }
     };
     console.log(car.details.color); // red
     
     let key = "brand";
     console.log(car[key]); // Toyota