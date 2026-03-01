# JavaScript Tutorial 09 - JavaScript String Formatting, Concatenation and Template Literals

## Topics Covered

Tutorial Link : https://www.youtube.com/watch?v=xRwvYV6JP3o

## আজকের কোড  ও তার ব‍্যাখ‍্যা

```js
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

```

উপরের কোডে **JavaScript string concatenation**, **template literals**, এবং **escape characters** ব্যবহার দেখানো হয়েছে। নিচে অংশভাগ করে পরিষ্কার ব্যাখ্যা করা হলো।

---

## ভেরিয়েবল ডিক্লেয়ারেশন

```js
let userName  = "John Doe";
let userCity = "New York";
let userCountry = "USA";
let appName = "MyApp";
let courseName = "JavaScript Basics";
let orderID = "12345";
let amount = 99.99;
```

এগুলো শুধু ডেটা স্টোর করছে—পরে স্ট্রিং বানাতে ব্যবহার হবে।

---

## String Concatenation ( + দিয়ে জোড়া লাগানো )

```js
console.log("Welcome to " + appName );
console.log("Welcome to " + appName + ", " + userName );
```

`+` দিয়ে একাধিক স্ট্রিং ও ভেরিয়েবল জোড়া লাগানো হয়।
এটা পুরোনো কিন্তু এখনও ব্যবহৃত পদ্ধতি।

---

## Template Literals (Backticks ব্যবহার)

```js
console.log(`Welcome to ${appName}, ${userName}!`);
console.log(`You selected course is ${courseName}`);
console.log(`Order #${orderID} has been successfully placed.`);
console.log(`Your total amount is $${amount}.`);
```

👉 Backtick ( \` ) ব্যবহার করলে`${variable}` দিয়ে সরাসরি ভেরিয়েবল বসানো যায়।
👉 কোড পড়ার ক্ষেত্রে (code readability) এটি একটি পরিচ্ছন্ন ও আধুনিক পদ্ধতি।

---

## Multi-line String তৈরি

```js
console.log("Order Details:\n" +
`Course: ${courseName}\n` +
`Amount: $${amount}\n` +
`Order ID: ${orderID}`);
```

* `\n` → নতুন লাইনে যাওয়ার জন্য
* Template literal হলে আলাদা করে `\n` ছাড়াও multi-line লেখা যায়।

---

## Escape Characters

```js
console.log("Product name: \"JavaScript Basics\"");
console.log('It\'s a great course!');
console.log('This is Rahim\'s Book.');
```

👉 যখন স্ট্রিংয়ের ভেতরে একই quote ব্যবহার করতে হবে, তখন `\` দিয়ে escape করতে হয়।

**উদাহরণ:**

* `"Hello \"World\""`
* `'It\'s fine'`

---

## Template Literal দিয়ে পূর্ণ ইনভয়েস

```js
let invoice  = `Invoice Summary
-------------------------------
Customer: ${userName}
City: ${userCity}
Order ID: ${orderID}
Course: ${courseName}
Amount: $${amount}
-------------------------------
Thank you for your purchase!`;
```

এই template literal অনুযায়ী console-এ যে আউটপুট দেখা যাবে:

```html
Invoice Summary
-------------------------------
Customer: John Doe
City: New York
Order ID: 12345
Course: JavaScript Basics
Amount: $99.99
-------------------------------
Thank you for your purchase!
```

এটা multi-line formatted string — backtick ব্যবহার করার কারণে ঠিক এভাবেই লাইনে লাইনে প্রিন্ট হবে।


👉 Backtick ব্যবহার করলে multi-line format খুব সহজ হয়।
👉 ডাইনামিক ডেটা বসিয়ে সুন্দর formatted output পাওয়া যায়।

---

## বাস্তব ব্যবহার (Web Dev)

JavaScript এ নিম্নোক্ত ক্ষেত্রে আমরা আজকের যা শিখলাম তার বাস্তব প্রয়োগ করে থাকি।

✔ Dynamic UI message
✔ Order confirmation page
✔ Email template generation
✔ AJAX response formatting
✔ WooCommerce custom notice

---
