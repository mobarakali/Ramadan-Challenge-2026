var age;
age = 10;

console.log(age);

// JavaScript Variable Rules
// 1. Variable names are case-sensitive (age, Age, AGE are different)
// 2. Variable names must begin with a letter, underscore (_), or dollar sign ($)
// 3. Variable names cannot contain spaces
// 4. Variable names can contain letters, digits, underscores, and dollar signs
// 5. Variable names should be descriptive and follow camelCase convention
// 6. Reserved words cannot be used as variable names (let,var, const, for, while etc)

// Valid variable names:
var firstName = "John";
var lastName = "Doe";
var _privateVar = "private";
var $price = 100;
var user2 = "test";

// Invalid variable names (uncomment to see errors):
// var 2user = "test";           // Cannot start with a number
// var first-name = "test";      // Cannot contain hyphens
// var first name = "test";      // Cannot contain spaces
// var var = "test";             // Cannot use reserved words

// Variable Declaration Methods:
var x = 5;                        // Old way (function-scoped)
let y = 10;                       // Modern way (block-scoped)
const z = 15;                     // Constant (block-scoped, cannot be reassigned)

console.log("firstName: " + firstName);
console.log("_privateVar: " + _privateVar);
console.log("$price: " + $price);


// var বনাম let - আমরা কোনটা ব‍্যবহার করবো?
// Comparison: var vs let

// 1. SCOPE DIFFERENCE:
// var is function-scoped
// let is block-scoped

function scopeExample() {
  if (true) {
    var varVariable = "I am var";
    let letVariable = "I am let";
  }
  console.log(varVariable);  // Output: "I am var" (accessible outside if block)
  // console.log(letVariable);  // Error: letVariable is not defined (block-scoped)
}

// 2. RE-DECLARATION:
// var allows re-declaration
// let does not allow re-declaration

var name = "John";
var name = "Jane";  // OK - re-declared
console.log(name);  // Output: "Jane"

let city = "Dhaka";
// let city = "Chittagong";  // Error: Identifier 'city' has already been declared

// 3. HOISTING:
// var is hoisted and initialized with undefined
// let is hoisted but not initialized (Temporal Dead Zone)

console.log(hoistedVar);  // Output: undefined (not an error!)
var hoistedVar = "I am hoisted";

// console.log(hoistedLet);  // Error: Cannot access 'hoistedLet' before initialization
let hoistedLet = "I am not hoisted";

// 4. GLOBAL SCOPE:
// var in global scope adds to window object
// let in global scope does NOT add to window object

var globalVar = "I am in window";
let globalLet = "I am NOT in window";
// console.log(window.globalVar);  // Output: "I am in window"
// console.log(window.globalLet);  // Output: undefined

// RECOMMENDATION: USE LET (or CONST)
// - let is block-scoped (safer)
// - let prevents accidental re-declaration
// - let is the modern JavaScript standard
// - var should only be used in legacy code