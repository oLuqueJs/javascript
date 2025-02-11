// let, var & Const
let name = 'Louis'
var name2 = 'Louis'
const truth = true

console.log(name, name2)

// let name = 'Mark' (We can't do this, since we already created {let name} on this block)
var name2 = 'Mark'

console.log(name, name2) 

// Basic Function
if (truth) {
    let name = 'Mark' // We can use let name here since let is function scope
    console.log(name, name2)
}

/* 
    VAR -> Block scope
    LET -> Function scope
*/ 

// Nested Function
// global scope
if (truth) {
    // another scope
    let name = 'Wendy'
    console.log(name);

    if (truth) {
        // Another scope
        let name = 'Petry'
        console.log(name);
    }
}

// Hoisting
console.log(surname); // undefined since it's created

var surname = 'Griffin' // surname get hoisted by JS and it's declares as undefined
