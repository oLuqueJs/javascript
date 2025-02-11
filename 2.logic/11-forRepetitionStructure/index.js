// Basic for
for (let i = 0; i<=5; i++) {
    console.log(`Number ${i}`)
}

// For with pace 2
let pace = 2
for (let i = 0; i<=6; i += pace) {
    console.log(`Number ${i}`)
}

// Negative index
for (let i = -10; i<=10; i++) {
    console.log(`Number ${i}`)
}

// Negative pace
let pace2 = 10
for (let i = 30; i>=0; i -= pace2) {
    console.log(`Number ${i}`)
}

// Getting even & odd numbers
for (let i = 0; i<=10; i++){
    const even = i % 2 === 0 ? 'is even!' : 'is odd!';
    console.log(i,even)

    /* Or..
        const r = i % 2
        if (r == 0) {
            console.log(`${i} is even!`)
        } else {
            console.log(`${i} is odd!`)
        }
    */
}

// Traversing an array with for
const fruits = ['🍌', '🍉', '🍏', '🍇', '🍍', '🍐' ];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i])
}