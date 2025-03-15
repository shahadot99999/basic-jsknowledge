// 1. JSON (JavaScript Object Notation)
// JSON is a lightweight data format for storing and exchanging data.

// It is a string representation of JavaScript objects.

// Use JSON.parse() to convert a JSON string to a JavaScript object.

// Use JSON.stringify() to convert a JavaScript object to a JSON string.

//Easy Example:

// const obj = { name: "Alice", age: 25 };
// const jsonString = JSON.stringify(obj); // Convert object to JSON string
// console.log(jsonString); // '{"name":"Alice","age":25}'

// const parsedObj = JSON.parse(jsonString); // Convert JSON string back to object
// console.log(parsedObj.name); // "Alice"

//Medium Example:
// const data = '[{"name":"John"},{"name":"Jane"}]';
// const users = JSON.parse(data); // Convert JSON string to array of objects
// users.push({ name: "Alice" }); // Add a new object to the array
// console.log(JSON.stringify(users)); // '[{"name":"John"},{"name":"Jane"},{"name":"Alice"}]'



//Hard Example:

// const complexData = {
//   users: [{ id: 1, name: "Alice" }, { id: 2, name: "Bob" }],
//   meta: { page: 1, total: 2 }
// };
// const jsonString = JSON.stringify(complexData, null, 2); // Pretty-print JSON
// console.log(jsonString);
// /*
// {
//   "users": [
//     { "id": 1, "name": "Alice" },
//     { "id": 2, "name": "Bob" }
//   ],
//   "meta": { "page": 1, "total": 2 }
// }
// */


// 2. Fetch API
// Used to make HTTP requests (e.g., GET, POST).
// Returns a promise that resolves to the response object.
// Use .json() to parse the response as JSON.

//Easy Example:
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(data => console.log(data.title))
//   .catch(error => console.error('Error:', error));


  //Medium Example:
// async function fetchData() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//     const data = await response.json();
//     console.log(data[0].title);
//   } catch (error) {
//     console.error('Error:', error);
//   }
// }
// fetchData();



//Hard Example:
// async function postData(url = '', data = {}) {
//   const response = await fetch(url, {
//     method: 'POST',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(data)
//   });
//   return response.json();
// }

// postData('https://jsonplaceholder.typicode.com/posts', { title: 'foo', body: 'bar', userId: 1 })
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));


// 3. Keys and Values
// Use Object.keys() to get an array of keys from an object.
// Use Object.values() to get an array of values from an object.
// Use Object.entries() to get an array of key-value pairs.


//Easy Example:
// const obj = { a: 1, b: 2, c: 3 };
// console.log(Object.keys(obj)); // ['a', 'b', 'c']
// console.log(Object.values(obj)); // [1, 2, 3]


//Medium Example:
// const user = { name: "Alice", age: 25, city: "New York" };
// const keys = Object.keys(user);
// const values = Object.values(user);
// console.log(keys); // ['name', 'age', 'city']
// console.log(values); // ['Alice', 25, 'New York']


//Hard Example:
// const data = { a: 1, b: 2, c: 3 };
// const entries = Object.entries(data);
// const newObj = entries.reduce((acc, [key, value]) => {
//   acc[key.toUpperCase()] = value * 2;
//   return acc;
// }, {});
// console.log(newObj); // { A: 2, B: 4, C: 6 }


// 4. Array Manipulation
// Use push() to add an element to the end of an array.

// Use pop() to remove the last element of an array.

// Use unshift() to add an element to the beginning of an array.

// Use shift() to remove the first element of an array.

// Use splice() to add or remove elements at any position.

//Easy Example:

// const arr = [1, 2, 3];
// arr.push(4); // Add to end
// console.log(arr); // [1, 2, 3, 4]

// arr.pop(); // Remove from end
// console.log(arr); // [1, 2, 3]


//Medium Example:
// const arr = [1, 2, 3];
// arr.unshift(0); // Add to beginning
// console.log(arr); // [0, 1, 2, 3]

// arr.shift(); // Remove from beginning
// console.log(arr); // [1, 2, 3]


//Hard Example:
// const arr = [1, 2, 3, 4, 5];
// arr.splice(2, 1); // Remove 1 element at index 2
// console.log(arr); // [1, 2, 4, 5]

// arr.splice(2, 0, 3); // Add 3 at index 2
// console.log(arr); // [1, 2, 3, 4, 5]


// 5. Using Dots (Optional Chaining)
// Use ?. to safely access nested properties without causing errors if a property is null or undefined.

//Easy Example:
// const user = { name: "Alice" };
// console.log(user?.age); // undefined (no error)


//Medium Example:
// const user = { profile: { name: "Alice" } };
// console.log(user?.profile?.name); // "Alice"
// console.log(user?.address?.city); // undefined (no error)


//Hard Example:
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];
const thirdUser = users[2]?.name; // Safely access non-existent index
console.log(thirdUser); // undefined (no error)