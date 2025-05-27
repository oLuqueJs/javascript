// * Array
let total = 0
const a1 = [1, 2, 3, 4, 5, 6, 7]
const a2 = [10, 20, 30, 40, 50, 60, 70]


// * For Of
for (let v of a1) {
  console.log(v)
}


// * For Each
a2.forEach((value, index, array) => console.log(value, index))


a1.forEach((v) => {
  total += v
})

console.log(total)