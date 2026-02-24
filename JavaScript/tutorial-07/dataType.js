/**
 * Data Types
 * 1. Premitive Data Types (Immutable - ভ‍্যালু পরিবর্তন করা যায় না)
 *  - Number = 123, 3.14 (numeric value) Integer and Float
 *  - String = "Hello World" (text)
 *  - Boolean = true, false (logical value)
 *  - Null = null (empty value)
 *  - Undefined = undefined (value not assigned)
 *  - Symbol = Symbol('description') (unique identifier)
 *  - BigInt = 1234567890123456789012345678901234567890n (Very large integer)
 * 2. Non-Primitive Data Types (Mutable - ভ‍্যালু পরিবর্তন করা যায়)
 *  - Object
 *  - Array
 *  - Function
*/

// Primitive Data Types

// Number
let num = 42;
let price = 19.99;

// String
let name = "John Doe";
let greeting = 'Hello, World!';

// Boolean
let isStudent = true;
let isAdmin = false;

// Null
let emptyValue = null;

// Undefined
let notAssigned;

// Symbol
let uniqueId = Symbol('id');

// BigInt
let bigNumber = 1234567890123456789012345678901234567890n;

// Non-Primitive Data Types

// Object
let person = {
    name: "Alice",
    age: 30,
    isStudent: false
};
let product = {
    name: "Mobile",
    price: 99999,
    inStock: true
};

// Array
let numbers = [1, 2, 3, 4, 5];

let fruits = ["Mango", "Banana", "Orange"];

console.log(fruits[0]); // Output: Mango

fruits[0] = "Apple"; // Changing the first element of the array

console.log(fruits); // Output: ["Apple", "Banana", "Orange"]

// String is immutable, so we cannot change individual characters in a string.
// We can only create a new string if we want to change it.

let text = "Hello, World!";

console.log(text[0]); // Output: H

text[0] = "h"; // This will not change the string as strings are immutable

console.log(text); // Output: Hello, World!


let numOne = 10;
let numTwo = 10; 

console.log(numOne === numTwo); // Output: true (because they have the same value)

let userOne = { name: "Ali" };
let userTwo = { name: "Ali" };

console.log(userOne === userTwo); // Output: false (because they are different objects in memory)



// Function
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet("Ali")); // Output: Hello, Alice!
