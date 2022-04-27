//intro into Arrays
let fruits = ["apple", "mango", "grapes"]; // it can store strings
let numbers = [1, 2, 3, 4]; // it can store numbers
let mixed = [1, 2, 3, 4, 4.5, "APPLE", "mango"]; //it can store mixed data types  like numbers float and string etc
console.log(mixed);
console.log(numbers);
console.log(fruits);

fruits[1] = "banana"; // it will replace mango with the banana
console.log(fruits); // it will print the array with banana  like apple banana grapes

let man = ["ritish", "rishabh", "snajeev"];
let obj = {}; // object literal
console.log(typeof man); // it will print object
console.log(typeof obj); // it will print object

console.log(Array.isArray(man)); // it will print true;
console.log(Array.isArray(obj)); // it will print false;
