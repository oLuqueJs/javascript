// * Arrays
const nums = [5, 50, 70, 1, 2, 5, 33, 11, 15, 222]

const persons = [
  {name: "Hitori Gotou", age: 19},
  {name: "Ryou Yamada", age: 36},
  {name: "Nijika Ijichi", age: 23},
  {name: "Ikuyo Kita", age: 59},
  {name: "Kikuri Hiroi", age: 27},
]

// * Filter 
const greater20 = nums.filter((value, index, array) => {
  return `Value: ${value > 20}`;
})

console.log(greater20)

// * Filter (long)
function callbackFilter(value, index, array) {
  if (value > 10) {
    return true;
  }
}

const greater10 = nums.filter(callbackFilter);

console.log(greater10)

// * Filter with Objects
const filterredPersons = persons.filter((person) => {
  return person.name.length >= 12
})

console.log(filterredPersons)