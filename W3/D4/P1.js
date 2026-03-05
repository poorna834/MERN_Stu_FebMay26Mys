// Array Basics

console.log("Array Basics");
// Creating arrays
let emptyArray = [];
let numArray = [1, 2, 3, 4];
let mixedArray = [42, "Hello", true, null, {name:"Gola"},[5,6]];
console.log(emptyArray);
console.log(numArray);
console.log(mixedArray);

// Using Constructor
let fruits = new Array("Apple","Mango");
console.log(fruits);
console.log("Is fruits an Array?",Array.isArray(fruits));

// Push : Add
fruits.push("Cherry");
console.log(fruits);

// Pop : Remove
fruits.pop();
console.log(fruits);

// Unshift : Adds elements to the beginning
fruits.unshift("Orange");
console.log(fruits);

// Shift : Vice- Versa
fruits.shift();
console.log(fruits);