// * Return: Return a value -> Finish function
function sum(a,b) {
  return a + b;
}
const result = sum(10,20);
console.log(result); //30


// * Void Returns
function voidSum(a,b) {
  console.log(a+b);
  return;
}
voidSum(10,20)
const result2 = voidSum(14,12);
console.log(result2); // undefined


// * Return Object
function createPersonObject(name, surname) {
  return { name: name, surname: surname };
}
const person = createPersonObject("Edward", "Newgate");
console.log(person); // { name: 'Edward', surname: 'Newgate' }


// * Return Function 
function createMultiplier(multiplier) {
  function multiply(n) {
    return n * multiplier;
  };
  return multiply;
};

const duplicates = createMultiplier(2);
const triples = createMultiplier(3);
const quadruples = createMultiplier(4);

console.log(duplicates(2)); // 4 
console.log(triples(2));    // 6
console.log(quadruples(2));  // 8

