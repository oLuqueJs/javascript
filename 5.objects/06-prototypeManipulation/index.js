// * Constructor (every constructor have a prototype)
const objA = {
  keyA: 'A'
  // ? __proto__: Object.prototype
}

const objB = {
  keyB:  'B'
}

const objC = {
  keyC: 'C'
}

// * SetPrototypeOf
Object.setPrototypeOf(objB, objA)
console.log(objB.keyA)

Object.setPrototypeOf(objC, objB)
console.log(objC.keyA)