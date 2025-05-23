// * Arrays
const nums = [5, 50, 70, 1, 2, 5, 33, 11, 15, 222]

const persons = [
  {name: "Hitori Gotou", age: 19},
  {name: "Ryou Yamada", age: 36},
  {name: "Nijika Ijichi", age: 23},
  {name: "Ikuyo Kita", age: 59},
  {name: "Kikuri Hiroi", age: 27},
]


// * Map (nums)
const doubleNums = nums.map((value) => {
  return value*2
});

console.log(doubleNums)


// * Map with Objects
const namePersons = persons.map((obj) => {
  return {
    name: obj.name,
  }
})

console.log(namePersons)


// * Manipulating Objects with Map
const newPersons = persons.map((obj, index) => {
  return {
    id: (index + 1),
    name: obj.name,
    age: obj.age
  }
});

console.log(newPersons)