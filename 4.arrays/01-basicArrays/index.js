// * Basic Array
// * Arrays are values by reference!
const names = ['James', 'Ruy', 'Bravo']

// * Changing value by index
names[2] = 'John'

// * Deleting Value by index
delete names[2] // ! <Empty item>

// * Using Array Object
const names2 = new Array('Marc', 'Louis') // ! ['Marc', 'Louis']

// * Array References
const newNames2 = names2;                 // ! references names2
const newNames3 = [...names2];            // ! Using Spread Operator
console.log(names)

// * Array Lenght
console.log(names.length)                 // ! 3

// * Manipulating Arrays
const names4 = ['James', 'Ruy', 'Bravo']
const names5 = ['jamez', 'Thiago', 'Oliver']
const stringNames = "Marco Yuri Ferran"

const removed = names4.shift();           // ! 'James' [first index]
const removed2 = names4.pop();            // ! 'Bravo' [last index]

names4.unshift('Walter')                  // ! add Walter [firt index]
names4.push('Tyler')                      // ! add tyler [last index] *

const newNames5 = names5.slice(1,3)       // ! slice index 1 and 3 to newNames5

const names6 = stringNames.split(" ")      // ! Split an String into an array
