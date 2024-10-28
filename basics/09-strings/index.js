// we can use "" inside ''
let oneString = 'This is a "string"';
console.log(oneString);

// we can use \ inside the string
let anotherString = 'This is another \\string';
console.log(anotherString);

// every string in JS have a index and have functions 
//                0123456789
let coolString = 'Cool text!'

console.log(coolString[3])                       // -> l
console.log(coolString.length)                   // -> 10
console.log(coolString.slice(-6, -1));           // start at index 4 and remove '!'
console.log(coolString.indexOf('text'));         // Start Index of "text" (left to right)
console.log(coolString.lastIndexOf('text'));     // Start Index of "text" (right to left)
console.log(coolString.toLocaleLowerCase());     // cool text!
console.log(coolString.toUpperCase());           // COOL TEXT!

// Regular Expressions
console.log(coolString.match(/[a-z]/g))          // Returns every lowercase letter
console.log(coolString.search(/[o]/g))           // Returns the index of "o"
console.log(coolString.replace('Cool', 'Bad'))   // Replace Cool to bad
console.log(coolString.replace(/o/g, '#'));      // Replaces Every o to #

// w3schools to learn more about regular expressions.