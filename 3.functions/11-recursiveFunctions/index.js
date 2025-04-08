// * Recursive Function
function recursiveF(max){
  console.log(max)
  if (max >= 10) return;
  max++
  recursiveF(max) // ! Recursive Call
}
recursiveF(6)