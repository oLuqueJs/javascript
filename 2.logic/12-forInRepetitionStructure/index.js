// Basic vector
const fruits = ['🍉', '🍏', '🍇', '🍍', '🍌', '🍐'];

// Basic For in 
for (let i in fruits) {
    console.log(fruits[i])
}

// Basic Object
const Person = {
    name:"Anne",
    surname:"Jamber",
    age: "18"
};

// For in with object keys
for (let i in Person) {
    console.log(i)
}

// For in with object values
for (let i in Person) {
    console.log(i, Person[i])
}