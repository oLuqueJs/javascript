let i = 0
let b = 0

// While Structure
while (i <= 10) {
    console.log(i)
    i++
}

// While w/ Strings
const name = 'louis'
while (b < name.length) {
    console.log(name[b])
    b++
}

// Random Function w/ While (Check the condition first then execute the code)
function random(min, max) {
    const r = Math.floor(Math.random() * (max - min) + min)
    return r
}

let rand = random(1, 50)
while (rand !== 10) {
    rand = random(1,50)
    console.log(rand)
}

console.log("\n")

// Do While (Execute the code first and then check the condition)
do {
    rand = random(1,50)
    console.log(rand)
} while(rand !== 10)


// While = 1. condition -> 2. Execute
// Do While = 1. Execute -> 2. Condition