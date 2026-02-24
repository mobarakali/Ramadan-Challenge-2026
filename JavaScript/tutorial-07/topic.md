# JavaScript Tutorial 07 - JavaScript Data Types

## Topics Covered

Tutorial Link : https://www.youtube.com/watch?v=3GH4gjW-WTs

উপরের ভিডিওর উপর ভিত্তি করে এখানে জাভাস্ক্রিপ্ট ডাটা টাইপের একটি সারসংক্ষেপ নিচে বর্ণনা করা হলো।

### 📘 **জাভাস্ক্রিপ্ট ডাটা টাইপস**

এই টিউটোরিয়ালে জাভাস্ক্রিপ্টের সবচেয়ে মৌলিক একটি বিষয় নিয়ে আলোচনা করা হয়েছে: **ডাটা টাইপ**। এটি ব্যাখ্যা করে যে জাভাস্ক্রিপ্ট কিভাবে বিভিন্ন ধরনের ডাটা সংরক্ষণ এবং ব্যবহার করে, যা সঠিক ও কার্যকরী কোড লেখার জন্য খুবই জরুরি।

#### 🧩 **ডাটা টাইপ আসলে কী?**
ডাটা টাইপ নির্ধারণ করে যে একটি ভেরিয়েবলে কি ধরনের মান (যেমন সংখ্যা, টেক্সট, বা জটিল সংগ্রহ) রাখা যাবে। জাভাস্ক্রিপ্ট একটি **ডাইনামিক্যালি টাইপড** ভাষা, অর্থাৎ আপনাকে ডাটার ধরণ আগে থেকে বলে দিতে হয় না; এটি নিজে নিজেই নির্ধারণ করে নেয়।

#### ⚡ **প্রিমিটিভ ডাটা টাইপ (Primitive Types)**
এগুলো হলো সবচেয়ে মৌলিক ডাটা টাইপ। এগুলো **অপরিবর্তনীয় (immutable)** , অর্থাৎ একবার তৈরি হয়ে গেলে এদের মান পরিবর্তন করা যায় না এবং এরা সরাসরি মেমোরিতে সংরক্ষিত হয়।

*   **Number**: পূর্ণসংখ্যা ও দশমিক উভয় ধরনের সংখ্যা বোঝাতে ব্যবহৃত হয় (যেমন: `১০`, `৩.১৪`)।
*   **String**: টেক্সট বা লেখা সংরক্ষণ করতে ব্যবহৃত হয় (যেমন: `"হ্যালো"`, `'বাংলাদেশ'`)।
*   **Boolean**: এটি একটি লজিক্যাল সত্তা, যার মান শুধুমাত্র **`true`** (সত্য) অথবা **`false`** (মিথ্যা) হতে পারে।
*   **Null**: ইচ্ছাকৃতভাবে কোনো অবজেক্টের অনুপস্থিতি বোঝাতে `null` ব্যবহার করা হয়।
*   **Undefined**: যখন একটি ভেরিয়েবল ডিক্লেয়ার করা হয় কিন্তু তাকে কোনো মান দেওয়া হয় না, তখন তার টাইপ হয় `undefined`।
*   **Symbol (ES6+)**: এটি একটি অনন্য এবং অপরিবর্তনীয় প্রিমিটিভ মান, যা সাধারণত অবজেক্টের 'কী' হিসেবে ব্যবহৃত হয়।

#### 🏗️ **নন-প্রিমিটিভ (রেফারেন্স) ডাটা টাইপ (Non-Primitive / Reference Types)**
এগুলো ডাটার জটিল সংগ্রহ এবং অন্যান্য সত্তা ধারণ করতে পারে। এগুলো **পরিবর্তনীয় (mutable)** , অর্থাৎ এদের মান পরিবর্তন করা যায় এবং এরা মেমোরিতে রেফারেন্স হিসেবে সংরক্ষিত হয়।

*   **Object**: সবচেয়ে মৌলিক নন-প্রিমিটিভ টাইপ। এটি বিভিন্ন ডাটা এবং ফাংশন সংরক্ষণের জন্য 'কী' ও 'ভ্যালু' জোড়ায় ব্যবহৃত হয়।
*   **Array**: এক ধরনের অবজেক্ট, যা সাজানো তালিকা আকারে ডাটা সংরক্ষণ করতে ব্যবহৃত হয়। তালিকার প্রতিটি আইটেমকে তার অবস্থান (index) দিয়ে চিহ্নিত করা যায়।
*   **Function**: ফাংশনও জাভাস্ক্রিপ্টে এক ধরনের অবজেক্ট এবং এদের মান হিসেবেও ব্যবহার করা যায়।

#### ⚖️ **মূল পার্থক্য ও জাভাস্ক্রিপ্টের আচরণ**
এই ভিডিওতে প্রিমিটিভ এবং নন-প্রিমিটিভ টাইপগুলোর মধ্যে গুরুত্বপূর্ণ কয়েকটি পার্থক্য তুলে ধরা হয়েছে:

| বৈশিষ্ট্য | প্রিমিটিভ টাইপ | নন-প্রিমিটিভ টাইপ |
| :--- | :--- | :--- |
| **সংরক্ষণ পদ্ধতি** | ভেরিয়েবলের মধ্যে সরাসরি মানটি জমা থাকে। | ভেরিয়েবলে মেমোরির একটি **অবস্থানের ঠিকানা (reference)** জমা থাকে, যেখানে আসল ডাটা রাখা আছে। |
| **পরিবর্তনীয়তা** | **অপরিবর্তনীয় (Immutable)**। মান একবার সেট করলে সেটি বদলানো যায় না। | **পরিবর্তনীয় (Mutable)**। ভিতরের ডাটা বা গঠন বদলানো সম্ভব। |
| **তুলনা** | **মান দিয়ে তুলনা** হয়। দুটি ভিন্ন স্ট্রিং ভেরিয়েবলের অক্ষর একই হলে তারা সমান বলে গণ্য হবে। | **রেফারেন্স দিয়ে তুলনা** হয়। দুটি আলাদা অবজেক্টের ভিতরের গঠন বা মান হুবহু একই হলেও তারা **সমান নয়**, কারণ তারা মেমোরির ভিন্ন ভিন্ন জায়গায় অবস্থিত। |
| **কপি করার আচরণ** | প্রিমিটিভ কপি করলে মানটির একটি **পৃথক কপি** তৈরি হয়। | অবজেক্ট কপি করলে মূল অবজেক্টের **রেফারেন্সটি কপি** হয়। ফলে দুটি ভেরিয়েবলই একই অবজেক্টকে নির্দেশ করে। |

#### 💡 **এটা কেন শিক্ষানবিশদের জন্য গুরুত্বপূর্ণ**
কন্ডিশন, লুপ, ফাংশনের মতো আরও জটিল বিষয়গুলো শেখার আগে এই পার্থক্যটা বোঝা খুব জরুরি। কারণ:
*   **কন্ডিশন ও লুপ**: তুলনার ফলাফল ডাটা টাইপের উপর নির্ভর করে।
*   **ফাংশন**: ফাংশনে প্রিমিটিভ আর অবজেক্ট আর্গুমেন্ট পাঠালে তার প্রভাব ভিন্ন হয়।
*   **DOM ম্যানিপুলেশন**: এখানে সব সময় অবজেক্ট নিয়ে কাজ করতে হয়।


## আজকের কোড

```js
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

```
এটা একটি JavaScript ফাইল যেখানে **data types** (ডাটা টাইপ) এবং তাদের আচরণ উদাহরণসহ দেখানো হয়েছে। নিচে সহজভাবে ব্যাখ্যা করা হলো।

---

## ১️⃣ Primitive Data Types (Immutable)

এগুলোতে ভ্যালু সরাসরি সংরক্ষণ হয় এবং পরিবর্তন করা যায় না (নতুন ভ্যালু তৈরি করতে হয়)। 

### ✔ Number

সংখ্যা সংরক্ষণ করে।

```js
let num = 42;
let price = 19.99;
```

### ✔ String

টেক্সট বা লেখা সংরক্ষণ করে।

```js
let name = "John Doe";
let greeting = 'Hello, World!';
```

### ✔ Boolean

সত্য বা মিথ্যা নির্দেশ করে।

```js
let isStudent = true;
let isAdmin = false;
```

### ✔ Null

ইচ্ছাকৃতভাবে খালি ভ্যালু।

```js
let emptyValue = null;
```

### ✔ Undefined

ভ্যালু এখনো সেট করা হয়নি।

```js
let notAssigned;
```

### ✔ Symbol

প্রতিটি Symbol ইউনিক হয়।

```js
let uniqueId = Symbol('id');
```

### ✔ BigInt

খুব বড় পূর্ণসংখ্যা সংরক্ষণ করে।

```js
let bigNumber = 12345678901234567890n;
```

---

## ২️⃣ Non-Primitive Data Types (Mutable)

এগুলোর ভ্যালু পরিবর্তন করা যায়। 

### ✔ Object

কী-ভ্যালু জোড়া আকারে ডাটা রাখে।

```js
let person = {
  name: "Alice",
  age: 30,
  isStudent: false
};
```

### ✔ Array

একাধিক ভ্যালু তালিকা আকারে রাখে।

```js
let fruits = ["Mango", "Banana", "Orange"];
console.log(fruits[0]); // Mango

fruits[0] = "Apple"; // পরিবর্তন করা যায়
```

👉 Array পরিবর্তনযোগ্য (mutable)

---

## ৩️⃣ String কেন Immutable

স্ট্রিংয়ের নির্দিষ্ট অক্ষর পরিবর্তন করা যায় না।

```js
let text = "Hello, World!";
text[0] = "h"; // কাজ করবে না
```

কারণ স্ট্রিং পরিবর্তনযোগ্য নয়।

---

## ৪️⃣ Primitive vs Object তুলনা

Primitive ভ্যালু তুলনা করলে ভ্যালু দেখা হয়।

```js
let numOne = 10;
let numTwo = 10;
console.log(numOne === numTwo); // true
```

Object তুলনা করলে মেমোরি লোকেশন দেখা হয়।

```js
let userOne = { name: "Ali" };
let userTwo = { name: "Ali" };
console.log(userOne === userTwo); // false
```

👉 একই ডাটা হলেও আলাদা অবজেক্ট → false

---

## ৫️⃣ Function (Non-Primitive)

Function একটি reusable কোড ব্লক।

```js
function greet(name) {
  return `Hello, ${name}!`;
}
```

ডাকা হলে নির্দিষ্ট কাজ করে।

---

## সারাংশ

* Primitive → immutable, ভ্যালু ভিত্তিক
* Non-primitive → mutable, reference ভিত্তিক
* String পরিবর্তন করা যায় না
* Object/Array পরিবর্তন করা যায়


