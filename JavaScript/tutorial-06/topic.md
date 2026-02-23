# JavaScript Tutorial 06 - JavaScript Constant

Tutorial Link : https://www.youtube.com/watch?v=RkiZAQur5-E

## Topics Covered

### JavaScript Constant
constant.js ফাইলে আমারা যে কোড দেখতে পাই।

~~~js 
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
~~~

#### ১. Constant (ধ্রুবক) কী?

প্রোগ্রামিংয়ে **Constant** বা ধ্রুবক হলো এমন এক ধরনের ভেরিয়েবল যার মান একবার নির্ধারণ (Assign) করে দিলে সেটি আর পরিবর্তন করা যায় না। অর্থাৎ, এটি পুরো প্রোগ্রামে একই থাকে।

#### ২. জাভাস্ক্রিপ্টে `const` এর বৈশিষ্ট্য

`const` সম্পর্কিত তিনটি গুরুত্বপূর্ণ নিয়ম:

* **পুনরায় মান নির্ধারণ অসম্ভব:** একবার `const` দিয়ে ভেরিয়েবল ডিক্লেয়ার করলে সেটিতে নতুন কোনো মান বসানো যায় না। আপনার কোডে `PI = 3.14;` লাইনটি এরর (`TypeError`) তৈরি করবে।
* **ডিক্লেয়ারেশনের সময় মান দেওয়া বাধ্যতামূলক:** আপনি শুধু `const GRAVITY;` লিখে রেখে দিতে পারবেন না; ডিক্লেয়ার করার সময়ই তার একটি মান দিতে হবে (যেমন: `const GRAVITY = 9.8;`)। আপনার ফাইলে এটি `SyntaxError` হিসেবে দেখানো হয়েছে।
* **ব্লক স্কোপ (Block Scope):** `const` দিয়ে তৈরি ভেরিয়েবলগুলো নির্দিষ্ট ব্লকের `{ }` বাইরে কাজ করে না (ব্লক স্কোপ সম্পর্কে আমরা পরে জানবো)।

#### ৩. কখন `const` ব্যবহার করবেন?

আধুনিক জাভাস্ক্রিপ্টে (ES6+) একটি প্রচলিত নিয়ম হলো:

* সবসময় **`const`** ব্যবহার করার চেষ্টা করুন।
* শুধুমাত্র তখনই **`let`** ব্যবহার করুন যখন আপনি নিশ্চিত যে ভেরিয়েবলটির মান পরবর্তীতে পরিবর্তন করতে হবে (যেমন: লুপ বা কাউন্টার)।

#### একটি মজার বিষয় (Wit)

প্রোগ্রামিংয়ে `const` ব্যবহার করা অনেকটা আপনার নামের মতো। আপনি চাইলে আপনার পোশাক (`let`) প্রতিদিন বদলাতে পারেন, কিন্তু আপনার নাম (`const`) সাধারণত সারাজীবন একই থাকে। যদি কেউ জোর করে আপনার নাম বদলাতে চায়, তবে সেটি বাস্তব জীবনেও অনেকটা `TypeError` এর মতোই ঝামেলার!
