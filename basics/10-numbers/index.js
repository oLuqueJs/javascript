// A number can be int or float
let num1 = 1;
let num2 = 25;
let num3 = 10.77438473847;

// We can use JS functions on numbers
console.log(num1.toString() + num2); // concat string with number
console.log(num2.toString(2));       // get binary of num1
console.log(num3.toFixed(2));        // Round float
console.log(Number.isInteger(num1)); // Bool to check if num1 is integer

// Imprecision with (IEEE 754-2008)
let num4 = 0.7;
let num5 = 0.1;

num1 += num2; //0.79999999...
num1 += num2; //0.89999999...
num1 += num2; //0.99999999...

num1 = parseFloat(num1.toFixed(2)); // fix it