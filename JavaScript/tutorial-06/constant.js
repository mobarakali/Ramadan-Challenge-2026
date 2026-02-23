// JavaScript Constants

// A constant is a variable that cannot be reassigned after it has been declared. 
// In JavaScript, you can declare a constant using the `const` keyword.

const PI = 3.1416;
console.log(PI); // Output: 3.1416

let radius = 5; // ব্যাসার্ধ
let circumference = 2 * PI * radius; // পরিধি = 2 * π * ব্যাসার্ধ
console.log(circumference); // Output: 31.416


// Attempting to reassign a constant will result in an error
// PI = 3.14; // This will throw an error: TypeError: Assignment to constant variable.

// Constants must be initialized at the time of declaration
// const GRAVITY; // This will throw an error: SyntaxError: Missing initializer in const declaration

