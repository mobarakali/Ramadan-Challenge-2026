let userName  = "John Doe";
let userCity = "New York";
let userCountry = "USA";
let appName = "MyApp";
let courseName = "JavaScript Basics";
let orderID = "12345";
let amount = 99.99;


console.log("Welcome to " + appName ); // Welcome to MyApp
console.log("Welcome to " + appName + ", " + userName ); // Welcome to MyApp, John Doe

console.log(`Welcome to ${appName}, ${userName}!`); // welcome to MyApp, John Doe! - Using template literals to include variables in a string

console.log(`You selected course is ${courseName}`); // You selected course is JavaScript Basics - Using template literals to include variables in a string

console.log(`Order #${orderID} has been successfully placed.`); // Order #12345 has been successfully placed. - Using template literals to include variables in a string

console.log(`Your total amount is $${amount}.`); // Your total amount is $99.99. - Using template literals to include variables in a string

console.log("Order Details:\n" + `Course: ${courseName}\n` +
`Amount: $${amount}\n` +
`Order ID: ${orderID}`); // Order Details: Course: JavaScript Basics Amount: $99.99 Order ID: 12345 - Using template literals to create a multi-line string with variables  


console.log("Product name: \"JavaScript Basics\""); // Product name: "JavaScript Basics" - Using escape characters to include double quotes in a string

console.log('It\'s a great course!'); // It's a great course! - Using escape characters to include a single quote in a string

console.log("This is Rahim's Book."); // This is Rahim's Book. - Using escape characters to include a single quote in a string
console.log('This is Rahim\'s Book.'); // This is Rahim's Book. - Using escape characters to include a single quote in a string


let invoice  = `Invoice Summary
-------------------------------
Customer: ${userName}
City: ${userCity}
Order ID: ${orderID}
Course: ${courseName}
Amount: $${amount}
-------------------------------
Thank you for your purchase!`;

console.log(invoice); //- Using template literals to create a multi-line invoice summary with variables
/* 
Invoice Summary 
Customer: John Doe 
City: New York 
Order ID: 12345 
Course: JavaScript Basics 
Amount: $99.99 
Thank you for your purchase! 
*/
