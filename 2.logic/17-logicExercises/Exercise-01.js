// Write a function that receives 2 numbers and returns the largest of them

//01 (Function)
function checkNums(x,y) {
   return x < y ? y : x
}
console.log(checkNums(45,15))

//02 (Arrow Function)
const checkNums2 = (x,y) => x < y ? y : x 
console.log(checkNums2(10,20))
