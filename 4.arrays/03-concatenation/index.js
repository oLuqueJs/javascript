// * Arrays Concatenation
const a1 = [1, 2, 3]
const a2 = [4, 5, 6]
const a3 = a1.concat(a2) // * Concat method

console.log(a3)

// * Literal Concat
const a4 = ["a", "b", "c"]
const a5 = a4.concat("D", 5)

console.log(a5)

// * Spread operator (...)
const a6 = ["Akame", "Esdeth"]
const a7 = [...a6, "Tatsumi",]

console.log(a7)