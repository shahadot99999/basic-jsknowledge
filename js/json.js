// Working with LocalStorage
// LocalStorage:

// localStorage allows you to store data in the browser with no expiration time.

// Data is stored as key-value pairs, and both keys and values must be strings.


// Storing data
// localStorage.setItem("name", "Alice");

// // Retrieving data
// let name = localStorage.getItem("name");
// console.log(name); // Outputs: Alice

// // Removing data
// localStorage.removeItem("name");

// // Clearing all data
// localStorage.clear();


//Medium
//Storing and Retrieving an Object in LocalStorage
//Since localStorage only stores strings, you need to convert objects to JSON strings.


// let person = {
//     name: "Alice",
//     age: 25
// };

// // Convert object to JSON string and store
// localStorage.setItem("person", JSON.stringify(person));

// // Retrieve and convert back to object
// let storedPerson = JSON.parse(localStorage.getItem("person"));
// console.log(storedPerson.name); // Outputs: Alice



// 3. Hard: Advanced LocalStorage with JSON
// Example: Managing a List of Objects in LocalStorage

// // Initial data
// let users = [
//     { id: 1, name: "Alice", age: 25 },
//     { id: 2, name: "Bob", age: 30 }
// ];

// // Store the list in localStorage
// localStorage.setItem("users", JSON.stringify(users));

// // Retrieve the list from localStorage
// let storedUsers = JSON.parse(localStorage.getItem("users"));

// // Add a new user
// storedUsers.push({ id: 3, name: "Charlie", age: 35 });

// // Update localStorage with the new list
// localStorage.setItem("users", JSON.stringify(storedUsers));

// // Retrieve and log the updated list
// let updatedUsers = JSON.parse(localStorage.getItem("users"));
// console.log(updatedUsers);

// // Remove a user by id
// let userIdToRemove = 2;
// updatedUsers = updatedUsers.filter(user => user.id !== userIdToRemove);

// // Update localStorage again
// localStorage.setItem("users", JSON.stringify(updatedUsers));

// // Retrieve and log the final list
// let finalUsers = JSON.parse(localStorage.getItem("users"));
// console.log(finalUsers);


// 4. Exploration: Error Handling and Edge Cases
// Error Handling:

// Always check if the data exists in localStorage before trying to parse it.

// let data = localStorage.getItem("nonExistentKey");
// if (data) {
//     let parsedData = JSON.parse(data);
//     console.log(parsedData);
// } else {
//     console.log("No data found for the given key.");
// }
// Edge Cases:



// Handle cases where localStorage might be full or inaccessible (e.g., in private browsing mode).
// try {
//     localStorage.setItem("test", "data");
// } catch (e) {
//     console.error("Failed to store data in localStorage:", e);
// }



// Conclusion
// Easy: Basic JavaScript syntax and concepts.
// Medium: Working with localStorage and JSON for simple data storage.
// Hard: Managing complex data structures like arrays of objects in localStorage.
// Exploration: Handling errors and edge cases to ensure robust code.