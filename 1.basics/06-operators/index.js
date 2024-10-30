const num1 = 5;
const num2 = 10;

//  Arithmetic Operators

// (*) & (/)
console.log(num1 * num2);    // 5 * 10 = 50
console.log(num1 / num2);    // 5 / 10 = 0.5

// (+) & (-)
console.log(num1 + num2);    // 5 + 10 = 15
console.log(num1 - num2);    // 5 - 10 = -5

// (**) & (%)
console.log(num1 ** num2);   // 5^10 = 9765625
console.log(num1 % num2);    // rest of 5/10 = 5


// Increment & Decrement Operator
let counter = 1;

// (++) & (--)
console.log(counter++);  // return actual counter value then add + 1 to counter | COUNTER = 1 now
console.log(++counter);  // add +1 to actual counter value then return counter  | COUNTER = 3 now
console.log(--counter);  // removes -1 from the actual counter value and then returns counter  | COUNTER = 2 now
console.log(counter--);  // returns counter and then removes -1 from the actual counter value  | COUNTER = 1 now
console.log(counter);    // returns counter value (1)


// Assignment Operator
let pace = 2;

// (+=) & (-=) & (*=) & (/=) & (%=) & (**=)
console.log(counter += pace);    // counter = counter + pace (1 + 2)
console.log(counter += pace);    // counter = counter + pace (3 + 2)
console.log(counter *= pace);    // counter = counter * pace (5 * 2)
console.log(counter /= pace);    // counter = counter / pace (10 / 2)
console.log(counter -= pace);    // counter = counter - pace (5 - 2)
console.log(counter **= pace);   // counter = counter ** pace (3^2)    
console.log(counter %= pace);    // counter = counter % pace  (9 % 2)
console.log(counter);            // counter = 1


// parseint & parsefloat & Number functions
let stringNum = '5'                     // string
let numberNum = Number(stringNum)       // string -> number
let floatNum = parseFloat(stringNum)    // string -> float
let intNum = parseInt(stringNum)        // string -> int 

console.log(num1 + stringNum);   // int (5) + string (5) = 55
console.log(num1 + numberNum);   // 5 + 5 = 10
console.log(num1 + intNum);      // 5 + 5 = 10
