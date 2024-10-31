// conditional structures

// hour variable
let hour = 23;

// basic conditional function
if (hour <= 12) {
    console.log("Guten Morgen!");
}

// basic IF & else
if (hour >= 0 && hour <= 23){
    console.log(`${hour}`)
} else {
    console.log("ERROR")
    return 0
}


// else if usage ( 0 - 11 = Gutten Morgen!) & ( 12 - 17 = Guten Tag!) & ( 18 - 23 = Gute Nacht)
if (hour >= 0 && hour <= 11 ) {
    console.log("Guten Morgen!");
}   else if (hour >= 12 && hour <= 17) {
    console.log("Guten Tag!");
}   else if (hour >= 18 && hour <= 23 ) {
    console.log("Gute Nacht!");
}



