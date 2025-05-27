// * Arrays
let ages = [15, 22, 11, 40, 20, 31, 17, 53]


// * Reduce 
const total = ages.reduce((acumulator, value, index, array) => {
  acumulator += value
  console.log(acumulator, value)
  
  return acumulator
}, 0)

console.log(total)