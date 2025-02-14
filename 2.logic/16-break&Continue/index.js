// Array
const number = [1,2,3,4,5,6,7,8,9]

// Continue
for (let num of number) {
    if (num === 2 || num === 5) {
        continue; // skip to the next repetition
    }

    console.log(num) //2 & 5 skipped
}

// Break
for (let num of number) {
    if(num ===2) {
        console.log(num, 'Stop!')
        break; // stop the loop
    }

    console.log(num)
}

// Continue -> Continues to the next interation
// Break -> Exit from the loop