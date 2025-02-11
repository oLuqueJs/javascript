// ABC -> BCA exercise
let a = 'A'; // -> B
let b = 'B'; // -> C
let c = 'C'; // -> A

console.log (a, b, c); // a,b,c 

[a, b, c] = [b, c, a]; // using arrays (assignment via destructuring)

console.log(a, b, c) // b,c,a


// Array Index + rest operator
// Index:       0 1 2 3 4 5
const numbers = [1,2,3,4,5,6];
const [firstNumber, secondNumber, ...rest] = numbers; // firstNumber = number[0] & secondNumber = number[1]

console.log(firstNumber, secondNumber) // 1,2
console.log(rest) // rest of the numbers array [3, 4, 5, 6]


// Array with specific positions example
const numbers2 = [1000, 2000, 3000, 4000, 5000, 6000]
const [one,  , three,  , five] = numbers2
console.log(one, three, five)


// Bidimensional array 
const numbers3 = [
    [1,2,3],    // 0 
    [4,5,6],    // 1
    [7,8,9]     // 2
]

console.log(numbers3[1][2]) // 6
console.log(numbers3[0][0]) // 1


// using assignment via destructuring...
const numbers4 = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]
const [, [,,six]] = numbers4 // This works, but please... don't use it.
console.log(six)
