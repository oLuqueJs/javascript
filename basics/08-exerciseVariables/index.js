// varA must be "b", varB must be "C" & varc must be "A", you can't use literal declaration

let varA = 'A'; // -> B
let varB = 'B'; // -> C
let varC = 'C'; // -> A

//res01
let temp = varA
varA = varB
varB = varC
varC = temp

//res02
// [varA, varB, varC] = [varB, varC, varA] ([A, B, C] -> [B, C, A])

console.log(varA, varB, varC);  // B C A


