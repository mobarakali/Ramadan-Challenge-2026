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