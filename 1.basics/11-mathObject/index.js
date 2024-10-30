let num1 = 5;
let num2 = 9.534;

// Round Num2 with math.floor & math.ceil & math.roud
let num2floor = Math.floor(num2);
let num2ceil  = Math.ceil(num2); 
let num2round = Math.round(num2);
console.log(num2floor);
console.log(num2ceil);
console.log(num2round);

// Get the biggest & smallest number
console.log(Math.max(1,2,3,4,5,6,7,8,9,-10,50,1500,-5999,20));
console.log(Math.min(1,2,3,4,5,6,7,8,9,-10,50,1500,-5999,20));

// Get a random number
const randomnum = Math.round(Math.random() * (10 - 5) + 5);
console.log(randomnum)

// Other Math Functions
console.log(Math.PI);         // 3,141592...
console.log(Math.pow(2, 10)); // same as 2 ** 10 (2^10)
console.log(9 ** (1/2))       // 3