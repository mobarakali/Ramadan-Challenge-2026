# JavaScript Tutorial 08 - JavaScript Math Object & it's Number Methods Explained

## Topics Covered

Tutorial Link : https://www.youtube.com/watch?v=2-VJNNQN88U


## আজকের কোড

```js
console.log(Math.PI); // 3.141592653589793

let num = 3.555;
console.log(Math.round(num)); // 4 - rounds to the nearest integer
console.log(Math.floor(num)); // 3 - rounds down to the nearest integer
console.log(Math.ceil(num)); // 4 - rounds up to the nearest integer

console.log(Math.random()); // random number between 0 and 1
console.log(Math.random() * 10); // random number between 0 and 10
console.log(Math.floor(Math.random() * 10)); // random integer between 0 and 9

console.log(Math.max(1, 5, 3, -6)); // 5 - returns the largest number
console.log(Math.min(1, 5, 3, -6)); // -6 - returns the smallest number

console.log(Math.pow(2, 3)); // 8 - 2 raised to the power of 3
console.log(Math.sqrt(16)); // 4 - square root of 16
console.log(Math.cbrt(125)); // 5 - cube root of 125

console.log(Math.log(1)); // 0 - natural logarithm of 1
console.log(Math.sin(90 * Math.PI / 180)); // 1 - sine of 90 degrees

console.log(Math.abs(-5)); // 5 - absolute value of -5
console.log(Math.sign(-10)); // -1 - returns the sign of a number (-1 for negative, 0 for zero, 1 for positive)     

```
আজকের কোডে JavaScript এর **Math object**-এর বিভিন্ন built-in ফাংশন ব্যবহার করা হয়েছে। এগুলো সংখ্যা নিয়ে গণিতের কাজ করতে কাজে লাগে। নিচে লাইন ধরে ধরে সেগুলোর ব্যাখ্যা দেওয়া হলো।

---

### 🔢 ধ্রুবক (Constant)

**`Math.PI`**
π (পাই) এর মান দেয় → `3.141592653589793`
বৃত্ত, কোণ, ট্রিগনোমেট্রি ইত্যাদিতে লাগে।

---

### 🔄 রাউন্ডিং ফাংশন

```js
let num = 3.555;
```

* **`Math.round(num)`** → 4
  কাছের পূর্ণসংখ্যায় রাউন্ড করে।

* **`Math.floor(num)`** → 3
  নিচের পূর্ণসংখ্যায় নামায় (down)।

* **`Math.ceil(num)`** → 4
  উপরের পূর্ণসংখ্যায় তোলে (up)।

---

### 🎲 র‍্যান্ডম নাম্বার

* **`Math.random()`** → 0 থেকে 1 এর মধ্যে দশমিক সংখ্যা (1 ছাড়া)
* **`Math.random() * 10`** → 0 থেকে 10 এর মধ্যে দশমিক
* **`Math.floor(Math.random() * 10)`** → 0–9 এর মধ্যে পূর্ণসংখ্যা

👉 সাধারণত random index বা OTP টাইপ জিনিসে ব্যবহার হয়।

---

### 📊 বড়/ছোট মান বের করা

* **`Math.max(1, 5, 3, -6)`** → 5 (সবচেয়ে বড়)
* **`Math.min(1, 5, 3, -6)`** → -6 (সবচেয়ে ছোট)

---

### 🧮 পাওয়ার ও রুট

* **`Math.pow(2, 3)`** → 8 (2³)
* **`Math.sqrt(16)`** → 4 (square root)
* **`Math.cbrt(125)`** → 5 (cube root)

---

### 📐 লগ ও ট্রিগনোমেট্রি

* **`Math.log(1)`** → 0
  Natural logarithm (base e)

* **`Math.sin(90 * Math.PI / 180)`** → 1
  JavaScript এ trig ফাংশন radians নেয়, তাই degree → radian কনভার্ট করা হয়েছে।

---

### ➕ অন্যান্য

* **`Math.abs(-5)`** → 5
  ঋণাত্মক হলে ধনাত্মক বানায়।

* **`Math.sign(-10)`** → -1
  সংখ্যা ধনাত্মক/ঋণাত্মক/শূন্য — তা বোঝায়।
