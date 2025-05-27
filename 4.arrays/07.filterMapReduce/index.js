// * Array
const nums = [5, 50, 80, 1, 2, 3, 4, 5, 7, 11, 15, 22, 27]


// * Filter (filter num with only odd numbers)
const filterredNums = nums.filter((v) => {
   return (v % 2 == 0)
}) 

console.log(filterredNums)


// * Map (double every value in nums)
const doubleNums = nums.map((v) => {
  return v*2
})

console.log(doubleNums)


// * Reduce (sum every value in nums)
const sumNums = nums.reduce((a, v) =>{
  a += v
  return a
})

console.log(sumNums)