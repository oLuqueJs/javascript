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

// continue..