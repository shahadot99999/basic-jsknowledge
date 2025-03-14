//1. map()
//Purpose: Creates a new array by applying a function to each element of the original array.

//Returns: A new array with the results of the function applied to each element.

const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
//console.log(doubled);
// doubled: [2, 4, 6]

//2. forEach()
//Purpose: Executes a provided function once for each array element.

//Returns: undefined.
const numbers1 = [1, 2, 3];
//numbers1.forEach(num => console.log(num));
// Output: 1, 2, 3


//3. filter()
//Purpose: Creates a new array with all elements that pass a test (provided as a function).

//Returns: A new array with elements that satisfy the condition.

const numbers2 = [1, 2, 3, 4];
const evens = numbers2.filter(num => num % 2 === 0);
//console.log(evens);
// evens: [2, 4]

//4. find()
//Purpose: Returns the first element in the array that satisfies a provided testing function.
//Returns: The first matching element or undefined if no match is found.

const numbers3 = [1, 2, 3, 4];
const firstEven = numbers3.find(num => num % 2 === 0);
//console.log(firstEven);
// firstEven: 2


//Difficulty Levels: Examples
//Easy
//Use map() to create a new array where each number is squared.
const numbers4 = [1, 2, 3];
const squared = numbers4.map(num => num * num); // squared: [1, 4, 9]
//console.log(squared)


//Use forEach() to log each element of an array.
const fruits = ['apple', 'banana', 'cherry'];
//fruits.forEach(fruit => console.log(fruit));
// Output: apple, banana, cherry

//Medium
//Use filter() to create a new array with only even numbers.

const numbers5 = [1, 2, 3, 4, 5, 6];
const evens1 = numbers5.filter(num => num % 2 === 0); // evens: [2, 4, 6]
//console.log(evens1);


//Use find() to get the first string longer than 5 characters.
const words = ['apple', 'banana', 'cherry'];
const longWord = words.find(word => word.length > 5);// longWord: 'banana'
//console.log(longWord);

//Hard
//Use map() and filter() together to create a new array of squared even numbers.

const numbers6 = [1, 2, 3, 4, 5, 6];
const squaredEvens = numbers6
  .filter(num => num % 2 === 0)
  .map(num => num * num);
// squaredEvens: [4, 16, 36]
console.log(squaredEvens);


//Use find() and forEach() to find and log the first negative number in an array.

const numbers7 = [1, 2, -3, 4, -5];
const firstNegative = numbers7.find(num => num < 0);
console.log(firstNegative); // Output: -3


//Summary Table
//Method	Returns	    Modifies Original Array?     	Use Case
//map()	    New array	No	                            Transform each element
//forEach()	undefined	No	                            Execute a function for each element
//filter()	New array	No	                            Select elements based on a condition
//find()	First match	No	                            Find the first matching element