// Function Param Arguments
function func() {
  console.log(arguments); 
}
func('value', 'value2'); 


// Undefined Params
function nums(a, b, c, d, e) {
  console.log(a,b,c,d,e);
}
nums(1,2,3)


function sum(a,b) {
  console.log(a + b); // NaN
}
sum(2)


// Param Overwrite
function sum2(a,b=2) {
    console.log(a + b)
}
sum2(2,10); // b=10
sum2(2,undefined); // b=2


// Assignment via Destructuring
function funcs({name, surname, age}) {
  console.log(name, surname, age);
}
let obj = { name:'cool name', surname:'cool surname', age:34 };
funcs(obj);


// Rest Operator in Function Params
function calculator(operator, accumulator, ...nums) {
  console.log(`operator: ${operator}, accumulator: ${accumulator}, nums: ${nums}`);
  for (let number of nums){
    switch (operator) {
      case ('+'): accumulator += number; break;
      case ('-'): accumulator -= number; break;
      case ('*'): accumulator *= number; break;
      case ('/'): accumulator /= number; break;
      default: throw new TypeError('Expected valid operator');
    };
  };
  console.log(accumulator);
};
calculator('+', 50, 20, 10, 5, 2 ,1);


// Function Expression
const Calculator = function (operator, accumulator, ...nums) {
  console.log(arguments) // Not available in arrow functions
  for (let number of nums){
    switch (operator) {
      case ('+'): accumulator += number; break;
      case ('-'): accumulator -= number; break;
      case ('*'): accumulator *= number; break;
      case ('/'): accumulator /= number; break;
      default: throw new TypeError('Expected valid operator');
    };
  };
  console.log(accumulator);
};
Calculator('-', 20, 10)