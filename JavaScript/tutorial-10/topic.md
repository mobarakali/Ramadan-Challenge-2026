# JavaScript Tutorial 10 - JavaScript String Methods Explained with Practical Examples

## Topics Covered

Tutorial Link : https://www.youtube.com/watch?v=P_yXkGEisow&t=11s

## আজকের কোড  ও তার ব‍্যাখ‍্যা

```js
let js = "JavaScript is a Programming Language";
console.log(js.length); // 36
console.log(js[16]); // P

console.log(js.charAt(4)); // S
console.log(js.substr(4, 6)); // Script - Not Recommended Methode
console.log(js.substring(4, 10)); // Script - Not Recommended Methode
console.log(js.slice(4, 10)); // Script - Not Recommended Methode

console.log(js.toUpperCase()); // JAVASCRIPT IS A PROGRAMMING LANGUAGE
console.log(js.toLowerCase()); // javascript is a programming language

console.log(js.split(" ")); // ["JavaScript", "is", "a", "Programming", "Language"]
console.log(js.trim()); // "JavaScript is a Programming Language" - No leading or trailing whitespace to remove

console.log(js.includes("Script")); // true
console.log(js.includes("Javascript")); // false - Case Sensitive
console.log(js.search("Script")); // 4 - Position of "Script"
console.log(js.search("script")); // -1 - Not found (case sensitive)
console.log(js.replace("Programming", "Scripting")); // JavaScript is a Scripting Language - First Occurrence Replacement
console.log(js.replace(/Programming/g, "Scripting")); // JavaScript is a Scripting Language - Global Replacement using Regular Expression   

console.log(js.charCodeAt(0)); // 74 - Unicode value of 'J'
console.log(js.charCodeAt(1)); // 97 - Unicode value of 'a'
console.log(js.charCodeAt(2)); // 118 - Unicode value of 'v'
console.log(js.charCodeAt(10)); // 32 - Unicode value of space

console.log(js.indexOf("J")); // 0 - First occurrence of 'J'
console.log(js.indexOf(" ")); // 10 - First occurrence of space
console.log(js.lastIndexOf(" ")); // 25 - Last occurrence of space
console.log(js.indexOf("x")); // -1 - Not found

console.log(js.startsWith("Java")); // true
console.log(js.endsWith("Language ")); // false - Missing space at the end
console.log(js.endsWith("Language")); // true

console.log(js.concat(" is awesome!")); // JavaScript is a Programming Language is awesome!
console.log(js + " is awesome!"); // JavaScript is a Programming Language is awesome!
console.log(`${js} is awesome!`); // JavaScript is a Programming Language is awesome!


console.log(js.repeat(2)); // JavaScript is a Programming LanguageJavaScript is a Programming Language
console.log(js.repeat(0)); // (empty string)
console.log(js.repeat(-1)); // RangeError: Invalid count value - Negative numbers are not allowed

```

## JavaScript String Methods - বাংলায় ব্যাখ্যা

প্রথমে একটি string variable তৈরি করা হয়েছে:
```javascript
let js = "JavaScript is a Programming Language";
```

---

### দৈর্ঘ্য ও নির্দিষ্ট Character বের করা

```javascript
console.log(js.length);  // 36
```
`.length` দিয়ে string-এর মোট character সংখ্যা বের করা হয়। এখানে ফলাফল `36`।

```javascript
console.log(js[16]);     // P
```
Array-এর মতো index ব্যবহার করে নির্দিষ্ট position-এর character বের করা যায়। `16` নম্বর index-এ আছে `"P"`।

```javascript
console.log(js.charAt(4)); // S
```
`.charAt(4)` দিয়ে `4` নম্বর index-এর character বের করা হয়, যেটি `"S"`।

---

### String কেটে নেওয়া (Substring Methods)

```javascript
console.log(js.substr(4, 6));      // Script
console.log(js.substring(4, 10));  // Script
console.log(js.slice(4, 10));      // Script
```

তিনটি method দিয়েই `"Script"` বের হয়, তবে কাজের ধরনে পার্থক্য আছে:

| Method | কিভাবে কাজ করে |
|---|---|
| `substr(4, 6)` | index `4` থেকে শুরু করে **৬টি** character নেয় |
| `substring(4, 10)` | index `4` থেকে `10`-এর **আগ পর্যন্ত** নেয় |
| `slice(4, 10)` | `substring`-এর মতোই, তবে **negative index** সাপোর্ট করে |

> `substr` deprecated তাই এটি এড়িয়ে চলা উচিত।

---

### Case পরিবর্তন

```javascript
console.log(js.toUpperCase()); // JAVASCRIPT IS A PROGRAMMING LANGUAGE
console.log(js.toLowerCase()); // javascript is a programming language
```
`.toUpperCase()` সব অক্ষর বড় হাতে এবং `.toLowerCase()` সব অক্ষর ছোট হাতে রূপান্তর করে।

---

### Split এবং Trim

```javascript
console.log(js.split(" ")); 
// ["JavaScript", "is", "a", "Programming", "Language"]
```
`.split(" ")` প্রতিটি **space** এর জায়গায় string কে ভেঙে একটি Array তৈরি করে।

```javascript
console.log(js.trim()); // "JavaScript is a Programming Language"
```
`.trim()` string-এর শুরু ও শেষের অতিরিক্ত **whitespace (ফাঁকা জায়গা)** মুছে দেয়।

---

### খোঁজাখুঁজি করা

```javascript
console.log(js.includes("Script"));    // true
console.log(js.includes("Javascript")); // false
```
`.includes()` দিয়ে string-এর ভেতর কোনো শব্দ আছে কিনা check করা হয়। এটি **case-sensitive**, তাই `"Javascript"` খুঁজলে `false` আসে কারণ original-এ `"JavaScript"` (বড় S আছে)।

```javascript
console.log(js.search("Script")); // 4
console.log(js.search("script")); // -1
```
`.search()` শব্দটি কোন **index-এ** আছে সেটি বলে দেয়। না পেলে `-1` রিটার্ন করে।

---

### Replace করা

```javascript
console.log(js.replace("Programming", "Scripting"));    
// JavaScript is a Scripting Language

console.log(js.replace(/Programming/g, "Scripting"));   
// JavaScript is a Scripting Language
```
`.replace()` দিয়ে একটি শব্দকে অন্য শব্দ দিয়ে বদলানো যায়। `/g` flag ব্যবহার করলে string-এ **সবগুলো occurrence** বদলায় (Global Replace)।

---

### Unicode Value বের করা

```javascript
console.log(js.charCodeAt(0));  // 74  → 'J'
console.log(js.charCodeAt(1));  // 97  → 'a'
console.log(js.charCodeAt(2));  // 118 → 'v'
console.log(js.charCodeAt(10)); // 32  → space
```
`.charCodeAt()` দিয়ে প্রতিটি character-এর **Unicode (ASCII) সংখ্যামান** বের করা যায়।

---

### Index খোঁজা

```javascript
console.log(js.indexOf("J"));      // 0  - প্রথম 'J' এর অবস্থান
console.log(js.indexOf(" "));      // 10 - প্রথম space এর অবস্থান
console.log(js.lastIndexOf(" ")); // 25 - শেষ space এর অবস্থান
console.log(js.indexOf("x"));     // -1 - পাওয়া যায়নি
```
`.indexOf()` প্রথম occurrence এবং `.lastIndexOf()` সর্বশেষ occurrence-এর index দেয়। না পেলে `-1`।

---

### শুরু ও শেষ চেক করা

```javascript
console.log(js.startsWith("Java"));      // true
console.log(js.endsWith("Language "));  // false - শেষে extra space আছে
console.log(js.endsWith("Language"));   // true
```
`.startsWith()` দিয়ে string কোন শব্দ দিয়ে শুরু এবং `.endsWith()` দিয়ে কোন শব্দ দিয়ে শেষ হয়েছে কিনা check করা যায়।

---

### String জোড়া লাগানো (Concatenation)

```javascript
console.log(js.concat(" is awesome!"));
console.log(js + " is awesome!");
console.log(`${js} is awesome!`);
// তিনটির ফলাফলই: JavaScript is a Programming Language is awesome!
```
তিনটি আলাদা পদ্ধতিতে string এর সাথে নতুন string যোগ করা যায়:
- `.concat()` method
- `+` operator
- **Template Literal** (backtick `` ` `` ব্যবহার করে)

---

### Repeat করা

```javascript
console.log(js.repeat(2));  // দুইবার পুনরাবৃত্তি হবে
console.log(js.repeat(0));  // খালি string আসবে
console.log(js.repeat(-1)); // ❌ RangeError - negative সংখ্যা দেওয়া যাবে না
```
`.repeat(n)` দিয়ে string-কে `n` বার পুনরাবৃত্তি করা যায়। `0` দিলে খালি string এবং **negative সংখ্যা দিলে Error** আসে।